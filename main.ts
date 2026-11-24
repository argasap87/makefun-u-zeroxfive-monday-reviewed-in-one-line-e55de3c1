// Monday, Reviewed in One Line — make.fun bounty
// u-zeroxfive-monday-reviewed-in-one-line-e55de3c1
//
// Writes a single funny one-line review of Monday to
// /output/entry.txt (1-200 chars, UTF-8, one line).
//
// The hook: Monday reviewed like a defective product in a deadpan
// 1-star review — it arrived with zero motivation included, and the
// inbox came pre-loaded with 47 "quick questions." The laugh lands
// in the closer: "1/5 stars, would not re-order."

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Monday arrived with zero motivation included, and the inbox came pre-loaded with 47 'quick questions.' 1/5 stars, would not re-order.";

// Gate guard: the competition accepts a single line of 1–200 chars.
// Reject anything outside that range instead of writing a bad entry.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Entry line must be 1-200 chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} chars to /output/entry.txt`);
