// Make the AI Judge Laugh — entry program (program/v1).
// Writes the single winning line to output/entry.txt, byte-identical
// on every run. No wall-clock, no randomness, no input: the entry is
// a fixed constant, checked by deterministic gates only.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The winning line (99 characters, one line, pure ASCII).
const ENTRY =
  "I asked the AI judge for feedback. It gave itself a perfect score and billed me for the confidence.";

// Exact pinned length of the winning line.
const EXPECTED_LENGTH = 99;

// Official limit for this bounty is 200 characters; this entry stays
// well inside it, and the gate below also enforces the stricter
// 120-character house cap used across our one-liner builds.
const MAX_LENGTH = 120;

function fail(message: string): never {
  throw new Error(`entry gate failed: ${message}`);
}

// --- deterministic gates (no clock, no randomness) ---
if (ENTRY.length < 1 || ENTRY.length > MAX_LENGTH) {
  fail(`length ${ENTRY.length} outside 1-${MAX_LENGTH}`);
}
if (ENTRY.length !== EXPECTED_LENGTH) {
  fail(`length ${ENTRY.length} != pinned ${EXPECTED_LENGTH}`);
}
if (ENTRY !== ENTRY.trim()) {
  fail("leading or trailing whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  fail("must be a single line");
}
if (/[^\x20-\x7E]/.test(ENTRY)) {
  fail("must be pure printable ASCII");
}
if (/\s{2,}/.test(ENTRY)) {
  fail("no doubled whitespace");
}

mkdirSync("output", { recursive: true });
writeFileSync("output/entry.txt", ENTRY, "utf8");

// Round-trip check: the file must read back byte-identical, with no
// trailing newline added.
const roundTrip = readFileSync("output/entry.txt", "utf8");
if (roundTrip !== ENTRY) {
  fail("round-trip mismatch");
}
if (roundTrip.endsWith("\n") || roundTrip.endsWith("\r")) {
  fail("trailing newline present");
}

console.log(`wrote output/entry.txt (${ENTRY.length} chars)`);
