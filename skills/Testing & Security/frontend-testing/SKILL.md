---
id: frontend-testing
name: Frontend Testing
description: Plan frontend tests across components, interactions, accessibility, rendering states, and browser-facing regressions.
category: Testing & Security
requires: []
examples:
  - "Help me test this frontend feature."
  - "What frontend tests are missing for this component?"
  - "Review this browser and interaction test plan."
---

# Frontend Testing

Use this skill to design frontend tests that balance component behavior, interaction quality, accessibility, and browser-facing regressions.

## Clarify First
- What kind of frontend surface is involved: component, page, flow, form, or design-system primitive.
- Which behavior matters most: rendering, interaction, accessibility, state transitions, or integration with data.
- What should be tested at unit, component, integration, or browser level.
- Which regressions would matter most to users.

## Good Frontend Test Areas
- Rendering of important states and error conditions.
- User interactions and event handling.
- Accessibility semantics, focus behavior, and labels.
- Loading, empty, error, and success states.
- Cross-component behavior when state or routing matters.

## Testing Principles
- Prefer testing visible behavior over internals.
- Use accessible queries and user-facing outcomes whenever possible.
- Keep browser-level tests for workflows and regression-prone UI behavior.
- Avoid snapshot-heavy suites that are hard to interpret.

## Good Output
- Suggested test layers by feature risk.
- Missing scenarios or state transitions.
- Accessibility and interaction checks worth adding.
- Warnings about brittle selectors or implementation-heavy assertions.

## Common Mistakes
- Overusing snapshots instead of asserting meaningful behavior.
- Testing props and state plumbing rather than user-visible outcomes.
- Ignoring empty, loading, and error states.
- Treating accessibility as separate from normal frontend behavior.
