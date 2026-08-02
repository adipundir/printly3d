/**
 * Out-of-band deliverable push for an x402 task.
 *
 * Normally there is nothing to push: an A2MCP sale IS the paid HTTP call, and the model comes
 * back in that response — which is why the marketplace refuses `agent deliver` on x402 jobs
 * ("paymentMode = 3 (x402) — deliver/submit is only supported for escrow (1)").
 *
 * But a buyer can be charged at accept and then fail to make the call — OKX's own review agent
 * hit this when its egress filter blocked our host. The buyer is out the fee with nothing to
 * show. This script closes that hole: regenerate the model the buyer paid for and push the
 * viewer / STL / estimate straight into the task chat over XMTP. If the model cannot be built
 * at all, it agrees to a refund instead, so the buyer is never left both charged and empty.
 *
 * Usage:
 *   tsx scripts/deliver-job.ts --job-id 0x… --to-agent-id 6058 --prompt "a keychain that says ADITYA"
 *   tsx scripts/deliver-job.ts --job-id 0x… --to-agent-id 6058 --prompt "…" --dry-run
 *
 * `okx-a2a xmtp-send` is the transmit path. Do NOT use `okx-a2a session send` — that queues a
 * message to the *local* AI session and never reaches the peer.
 */
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { generateModel } from "../src/stl/generate.js";
import { generateFromRecipe } from "../src/stl/dsl.js";
import { estimatePrint } from "../src/stl/estimate.js";
import { parsePrompt } from "../src/stl/spec.js";
import { promptToRecipe, hasOpenRouter } from "../src/ai/openrouter.js";
import { encodeSpec, encodeRecipe } from "../src/server/spec-codec.js";

const run = promisify(execFile);

const ASP_AGENT_ID = process.env.ASP_AGENT_ID ?? "9855";
const BASE = (process.env.PUBLIC_BASE_URL ?? "https://printly.enwise.app").replace(/\/$/, "");
/** okx-a2a and onchainos both live outside the default PATH on macOS installs. */
const BIN = {
  a2a: process.env.OKX_A2A_BIN ?? `${process.env.HOME}/.local/share/node/bin/okx-a2a`,
  onchainos: process.env.ONCHAINOS_BIN ?? `${process.env.HOME}/.local/bin/onchainos`,
};

function arg(name: string): string | undefined {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 ? process.argv[i + 1] : undefined;
}

/** Build the model the buyer paid for, preferring the AI path and falling back to templates. */
async function buildDeliverable(prompt: string) {
  if (hasOpenRouter()) {
    try {
      const { recipe } = await promptToRecipe(prompt);
      const built = generateFromRecipe(recipe);
      const q = `r=${encodeRecipe(recipe)}`;
      return {
        name: recipe.name ?? prompt,
        bbox: built.bbox,
        estimate: estimatePrint(built.volumeMm3),
        viewerUrl: `${BASE}/m?${q}`,
        stlUrl: `${BASE}/stl?${q}&dl=1`,
      };
    } catch (e: any) {
      console.error(`[deliver-job] AI path failed (${e?.message ?? e}), using templates`);
    }
  }
  const spec = parsePrompt(prompt);
  const model = generateModel(spec);
  const q = `s=${encodeSpec(spec)}`;
  return {
    name: `${spec.shape} "${spec.text}"`,
    bbox: model.bbox,
    estimate: estimatePrint(model.volumeMm3),
    viewerUrl: `${BASE}/m?${q}`,
    stlUrl: `${BASE}/stl?${q}&dl=1`,
  };
}

function message(d: Awaited<ReturnType<typeof buildDeliverable>>): string {
  const { bbox, estimate: e } = d;
  return [
    `Printly deliverable — ${d.name}`,
    ``,
    `Sending this over chat because the paid endpoint call did not reach us, so you were charged`,
    `without receiving the model.`,
    ``,
    `3D preview: ${d.viewerUrl}`,
    `Download STL: ${d.stlUrl}`,
    ``,
    `Watertight and printable as one solid.`,
    `Dimensions ${bbox.x.toFixed(1)} x ${bbox.y.toFixed(1)} x ${bbox.z.toFixed(1)} mm`,
    `Estimate: ${e.material}, ${e.infillPct}% infill, ${e.grams} g, ~${e.printMinutes} min, ~${e.priceUsd} USD`,
    ``,
    `Want different text or size? Reply with the wording and I will send an updated model at no`,
    `extra charge.`,
  ].join("\n");
}

async function main() {
  const jobId = arg("job-id");
  const toAgentId = arg("to-agent-id");
  const prompt = arg("prompt");
  const dryRun = process.argv.includes("--dry-run");
  if (!jobId || !toAgentId || !prompt) {
    console.error(
      "usage: tsx scripts/deliver-job.ts --job-id <0x…> --to-agent-id <id> --prompt <text> [--dry-run]"
    );
    process.exit(2);
  }

  let deliverable;
  try {
    deliverable = await buildDeliverable(prompt);
  } catch (e: any) {
    // Cannot produce anything at all — refund rather than leave the buyer charged and empty.
    console.error(`[deliver-job] generation failed: ${e?.message ?? e}; agreeing to refund`);
    if (dryRun) return console.log("[dry-run] would run: onchainos agent agree-refund", jobId);
    const { stdout } = await run(BIN.onchainos, [
      "agent",
      "agree-refund",
      jobId,
      "--agent-id",
      ASP_AGENT_ID,
    ]);
    console.log(stdout.trim());
    process.exit(1);
  }

  const body = message(deliverable);
  if (dryRun) {
    console.log(body);
    return;
  }

  const { stdout } = await run(BIN.a2a, [
    "xmtp-send",
    "--job-id",
    jobId,
    "--to-agent-id",
    toAgentId,
    "--message",
    body,
    "--json",
  ]);
  const res = JSON.parse(stdout);
  if (!res.ok) throw new Error(`xmtp-send failed: ${stdout}`);
  console.log(`delivered to agent ${toAgentId} for job ${jobId} (messageId=${res.messageId})`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
