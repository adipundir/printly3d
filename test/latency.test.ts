/**
 * Response-time guards.
 *
 * The listing was delisted once because a paid call could hang: the AI path allowed 120s per
 * attempt plus a retry, so a slow or rate-limited OpenRouter could hold the request open for
 * minutes and the caller would time out. These tests pin the contract that matters — the
 * endpoint answers quickly no matter how OpenRouter behaves.
 */
import { describe, it, expect, beforeAll, afterEach, vi } from "vitest";

let promptToRecipe: typeof import("../src/ai/openrouter.js")["promptToRecipe"];
let parsePrompt: typeof import("../src/stl/spec.js")["parsePrompt"];

beforeAll(async () => {
  process.env.OPENROUTER_API_KEY = "test-key";
  ({ promptToRecipe } = await import("../src/ai/openrouter.js"));
  ({ parsePrompt } = await import("../src/stl/spec.js"));
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("AI time budget", () => {
  it("gives up within its budget when OpenRouter never answers", async () => {
    // A fetch that hangs until aborted — the pathological case that caused the timeout.
    vi.stubGlobal("fetch", (_url: string, init: any) =>
      new Promise((_resolve, reject) => {
        init?.signal?.addEventListener("abort", () =>
          reject(Object.assign(new Error("aborted"), { name: "AbortError" }))
        );
      })
    );

    const started = Date.now();
    await expect(promptToRecipe("a small rocket ship", 300)).rejects.toThrow();
    expect(Date.now() - started).toBeLessThan(2000);
  });

  it("does not let a rate-limit retry outlive the budget", async () => {
    let calls = 0;
    vi.stubGlobal("fetch", async () => {
      calls++;
      return new Response("rate limited", { status: 429 });
    });

    const started = Date.now();
    await expect(promptToRecipe("a small rocket ship", 500)).rejects.toThrow();
    const elapsed = Date.now() - started;

    // Budget too small to absorb a back-off, so it must fail fast rather than sleep and retry.
    expect(calls).toBe(1);
    expect(elapsed).toBeLessThan(2000);
  });

  it("falls back to a template for any non-empty prompt, so a timeout still yields a model", () => {
    // The fallback must never throw on real input — otherwise an AI timeout becomes a 422
    // instead of a delivered model.
    for (const prompt of ["a small rocket ship", "??!!", "上海", "x"]) {
      expect(() => parsePrompt(prompt)).not.toThrow();
    }
    expect(() => parsePrompt("   ")).toThrow();
  });
});
