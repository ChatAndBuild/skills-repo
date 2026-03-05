---
id: bats-testing-patterns
name: Bats Testing Patterns
description: Practical patterns for writing maintainable Bats tests in shell-heavy CI and release pipelines.
category: DevOps
requires: []
examples:
  - "Create Bats tests for this deploy script with reliable setup and teardown."
  - "Refactor flaky Bats tests into deterministic patterns."
---

# Bats Testing Patterns

Use this skill to design stable, readable Bats tests for scripts, CLIs, and automation tasks.

## When to Use

- You are adding tests for shell scripts used in CI/CD.
- Existing Bats tests are flaky or difficult to debug.
- You need reusable fixtures for filesystem, env vars, or command mocks.

## Workflow

1. Define test scope by behavior: success paths, failure paths, and side effects.
2. Build fixture helpers for temp directories, sample inputs, and common assertions.
3. Isolate external dependencies using command stubs and deterministic environment setup.
4. Write small tests with clear assertions on exit status, stdout/stderr, and file outputs.
5. Add teardown cleanup and leak checks to avoid cross-test contamination.
6. Run tests in CI-like environment and fix nondeterministic assumptions.

## Output / Checklist

- Bats suite organized by behavior and script responsibility.
- Shared helper library for setup, assertions, and stubs.
- Flake-reduction notes (timing assumptions removed, state reset).
- CI execution guidance and expected runtime constraints.

## Constraints

- Avoid network and wall-clock dependencies unless explicitly mocked.
- Keep tests portable across developer machines and CI runners.
- Assert behavior, not exact implementation details where possible.
