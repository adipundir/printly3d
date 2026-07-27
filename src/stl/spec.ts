/**
 * Prompt -> ModelSpec parser.
 *
 * Deterministic and dependency-free: detects the shape from keywords and pulls the text to
 * engrave. No LLM required, so the endpoint works with zero external keys. (An LLM
 * extraction step could be layered on later behind the same ModelSpec output.)
 */
import type { ModelSpec, ShapeKind } from "./generate.js";

const SHAPE_WORDS: Array<[ShapeKind, RegExp]> = [
  ["keychain", /\b(keychain|key chain|key ring|keyring|key fob|keyfob|key tag)\b/i],
  ["coin", /\b(coin|medallion|token|badge|disc|disk|medal)\b/i],
  ["nameplate", /\b(nameplate|name plate|sign|plaque|plate|desk sign|door sign|label)\b/i],
];

const MAX_TEXT = 24;

export interface ParsedSpec extends ModelSpec {
  /** what the parser understood, for echoing back to the caller */
  note: string;
}

export function parsePrompt(prompt: string): ParsedSpec {
  const raw = (prompt ?? "").trim();
  if (!raw) throw new Error("empty prompt");

  let shape: ShapeKind = "keychain";
  for (const [kind, re] of SHAPE_WORDS) {
    if (re.test(raw)) {
      shape = kind;
      break;
    }
  }

  const text = extractText(raw) || "HELLO";

  // optional size hint: "40mm", "4 cm"
  let textSize: number | undefined;
  const mm = raw.match(/(\d+(?:\.\d+)?)\s*mm\b/i);
  const cm = raw.match(/(\d+(?:\.\d+)?)\s*cm\b/i);
  if (mm) textSize = clampSize(parseFloat(mm[1]!) * 0.3);
  else if (cm) textSize = clampSize(parseFloat(cm[1]!) * 3);

  return {
    shape,
    text,
    textSize,
    note: `shape=${shape}, text="${text}"${textSize ? `, textSize≈${textSize.toFixed(1)}mm` : ""}`,
  };
}

function clampSize(n: number): number {
  return Math.max(5, Math.min(30, n));
}

/** Pull the engraving text: prefer explicit quotes / "says X", else strip shape+filler words. */
function extractText(prompt: string): string {
  const quoted = prompt.match(/["'“”‘’]([^"'“”‘’]{1,40})["'“”‘’]/);
  if (quoted) return clean(quoted[1]!);

  const says = prompt.match(/\b(?:says|saying|reads|reading|with(?:\s+the)?(?:\s+name|\s+text|\s+word)?|labeled|labelled|engraved with|that says|for)\s+(.+)$/i);
  if (says) return clean(says[1]!);

  // fallback: remove shape + common filler, keep the rest
  let s = prompt;
  for (const [, re] of SHAPE_WORDS) s = s.replace(re, " ");
  s = s.replace(/\b(a|an|the|make|create|generate|me|please|for|with|of|3d|print|printable|stl|model|small|big|large|desk|door|my|name)\b/gi, " ");
  return clean(s);
}

function clean(s: string): string {
  const out = s.replace(/\s+/g, " ").trim().slice(0, MAX_TEXT);
  return out;
}
