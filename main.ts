// Two Robots in an Elevator — writes one line of awkward robot small talk.
// The program takes no input and needs no network: it writes a fixed line
// of 126 characters with no trailing newline, exactly one line of text.
import { chmodSync, mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "So… we updated firmware on the same server last night, and now we're both pretending this is our first elevator ride together.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
for (const child of readdirSync(outDir)) {
  rmSync(join(outDir, child), { recursive: true, force: true });
}
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, LINE, { encoding: "utf8", mode: 0o644 });
chmodSync(entryPath, 0o644);
