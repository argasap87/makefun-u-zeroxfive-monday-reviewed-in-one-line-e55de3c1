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

// Gate guard (reviser pass): the competition accepts exactly one line of
// 1-200 chars, UTF-8, non-whitespace. Fail loudly — clear message on
// stderr plus a non-zero exit — rather than writing a bad entry, so a
// broken line can never reach the grader.
function validateLine(line: string): void {
  if (line.length < 1 || line.length > 200) {
    console.error(`error: entry line must be 1-200 chars, got ${line.length}`);
    process.exit(1);
  }
  if (/\r|\n/.test(line)) {
    console.error("error: entry must be a single line (no line breaks)");
    process.exit(1);
  }
  if (!line.trim()) {
    console.error("error: entry must not be empty or whitespace-only");
    process.exit(1);
  }
}

validateLine(LINE);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} chars to /output/entry.txt`);
