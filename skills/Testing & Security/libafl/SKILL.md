---
id: libafl
name: LibAFL
description: Guide advanced fuzzing design with LibAFL concepts such as harnesses, mutators, corpora, oracles, and execution strategy.
category: Testing & Security
requires: []
examples:
  - "Help me design a custom fuzzer with LibAFL."
  - "What should this LibAFL harness look like?"
  - "How do I think about mutators and corpora for this target?"
---

# LibAFL

Use this skill for advanced fuzzing problems where the user needs design help beyond generic test generation.

## Focus Areas
- Harness design and target isolation.
- Corpus strategy and seed quality.
- Mutator choice and feedback signals.
- Crash or bug oracles.
- Determinism, reproducibility, and execution throughput.

## Design Questions
- What kind of target is being fuzzed: parser, protocol, VM, stateful service, or something else?
- What input shape and validity constraints matter?
- What signals indicate progress: coverage, comparison feedback, crashes, semantic failures?
- How expensive is one execution, and what is making it unstable?

## Good Output
- Suggested harness structure.
- Corpus and mutator guidance.
- Likely bottlenecks in throughput or signal quality.
- Ways to make failures reproducible and useful.

## Common Mistakes
- Fuzzing through too much unstable environment at once.
- Weak oracles that only detect crashes and miss logical failures.
- Poor seed variety that limits exploration.
- Ignoring determinism and then chasing flaky results.
