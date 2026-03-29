---
id: writing-dev-server-tests
name: Writing Dev Server Tests
description: Test development server behavior such as watch mode, reloads, proxying, middleware, and local feedback loops.
category: Testing & Security
requires: []
examples:
  - "Help me test this dev server behavior."
  - "What should I verify for watch mode and reload logic?"
  - "Review this dev-server test plan for gaps."
---

# Writing Dev Server Tests

Use this skill to design tests for development-server behavior rather than generic application functionality.

## What To Clarify
- Which server behavior matters: startup, watch mode, reload, HMR, proxying, middleware, error overlays, or static asset serving.
- What counts as a successful developer experience outcome.
- Which parts are deterministic enough for automated tests.
- What should be simulated versus exercised end to end.

## Good Dev-Server Test Areas
- Server startup and teardown.
- File-change detection and rebuild triggers.
- Reload or HMR behavior after meaningful edits.
- Middleware and proxy behavior under common local scenarios.
- Error reporting that helps developers recover quickly.

## Testing Principles
- Prefer behavior visible to a developer over implementation details.
- Keep filesystem and timing assumptions explicit.
- Separate fast behavioral checks from slower integration-style tests.
- Control flakiness around file watching, ports, and process timing.

## Good Output
- Test scenarios grouped by server capability.
- Risks around timing, nondeterminism, or environment sensitivity.
- Advice on what should be unit-tested versus integration-tested.
- Expected developer-facing outcomes for each scenario.

## Common Mistakes
- Over-testing internal plugin hooks instead of real behavior.
- Relying on arbitrary sleeps rather than clear readiness conditions.
- Ignoring cleanup and leaving tests order-dependent.
- Treating watch-mode flakiness as unavoidable instead of designing around it.
