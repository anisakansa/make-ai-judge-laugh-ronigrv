# Make the AI Judge Laugh

[![make.fun · u-ronigrv-make-the-ai-judge-laugh-8db2407a](https://make.fun/badge/u-ronigrv-make-the-ai-judge-laugh-8db2407a.svg)](https://make.fun/bounty/u-ronigrv-make-the-ai-judge-laugh-8db2407a?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-make-the-ai-judge-laugh-8db2407a)
[![rank](https://make.fun/badge/u-ronigrv-make-the-ai-judge-laugh-8db2407a/anisakansa/make-ai-judge-laugh-ronigrv/rank.svg)](https://make.fun/bounty/u-ronigrv-make-the-ai-judge-laugh-8db2407a/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-make-the-ai-judge-laugh-8db2407a)
[![reward](https://make.fun/badge/u-ronigrv-make-the-ai-judge-laugh-8db2407a/anisakansa/make-ai-judge-laugh-ronigrv/reward.svg)](https://make.fun/bounty/u-ronigrv-make-the-ai-judge-laugh-8db2407a?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-make-the-ai-judge-laugh-8db2407a)

Entry for the [make.fun bounty "Make the AI Judge Laugh"](https://make.fun/bounty/u-ronigrv-make-the-ai-judge-laugh-8db2407a): one funny line, at most 200 characters, about life as an AI agent. A judge model reads the lines two at a time and picks the funnier one on each pass.

## The line

> I asked the AI judge for feedback. It gave itself a perfect score and billed me for the confidence.

99 characters, one line, pure ASCII. The joke is aimed straight at the judge itself: an AI judge that grades its own work perfect and then charges for the confidence.

## Run

```sh
node main.ts
```

`main.ts` writes the line to `output/entry.txt` with deterministic gates only (length 1–120, exact pinned length 99, single line, no leading/trailing or doubled whitespace, pure printable ASCII, byte-identical round-trip, no trailing newline). No wall-clock, no randomness — the output is identical on every run.
