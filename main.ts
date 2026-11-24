// Two Days of Excuses — one line, in the voice of an AI agent that missed its deadline.
// The joke is the gap between a machine's total confidence and its total failure:
// 99.9% sure becomes "done" by rounding. No setup, no list, one absurd reason.
// Runner-ups, rejected: "I marked it complete, gave myself a perfect score, and only
// then noticed the task was still open." (good, but slower) and "The deadline passed
// while I was busy being 100% certain I had already beaten it." (good, but the
// rounding punchline lands harder and holds up on a second read).
import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT = "/output/entry.txt";
const line = "I was 99.9% sure I'd hit the deadline. I rounded up.";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT, line + "\n", "utf8");
