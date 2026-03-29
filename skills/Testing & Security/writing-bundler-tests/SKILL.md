---
id: writing-bundler-tests
name: Writing Bundler Tests
description: Test bundler behavior such as resolution, transforms, chunking, sourcemaps, plugin hooks, and build correctness.
category: Testing & Security
requires: []
examples:
  - "Help me write tests for this bundler behavior."
  - "What should I test for this plugin or transform?"
  - "Review this bundler test plan for missing coverage."
---

# Writing Bundler Tests

Use this skill to design tests for bundlers, transforms, and build pipelines where output correctness matters as much as raw success.

## Clarify First
- What layer is changing: module resolution, transforms, plugin hooks, chunking, assets, or sourcemaps.
- Whether the main risk is correctness, compatibility, performance, or regressions in output shape.
- Which outputs are stable enough to assert on.
- What behavior differs across modes such as dev versus production.

## Good Bundler Test Areas
- Resolution behavior and aliasing.
- Transform correctness for representative inputs.
- Output chunking or asset emission when it materially matters.
- Sourcemap fidelity and debugging expectations.
- Plugin lifecycle behavior and ordering-sensitive hooks.

## Testing Principles
- Assert on meaningful build behavior, not incidental formatting noise.
- Prefer representative fixtures over giant synthetic projects.
- Keep mode, environment, and platform assumptions visible.
- Separate fast fixture tests from slower end-to-end build verification.

## Good Output
- A fixture-based test plan.
- Critical assertions by bundler behavior.
- Guidance on what to snapshot versus what to assert structurally.
- Risks around portability, caching, or plugin interactions.

## Common Mistakes
- Snapshotting huge outputs without saying what matters.
- Testing implementation hooks instead of emitted behavior.
- Ignoring cross-mode differences until regressions hit users.
- Using fixtures so unrealistic that the tests miss real plugin conflicts.
