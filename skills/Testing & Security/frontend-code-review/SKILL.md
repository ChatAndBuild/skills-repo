---
id: frontend-code-review
name: Frontend Code Review
description: Review frontend code for regressions, accessibility, interaction quality, state handling, and testability risks.
category: Testing & Security
requires: []
examples:
  - "Review this frontend change for quality risks."
  - "What should I look for in this UI code review?"
  - "Check this component change for accessibility and regression issues."
---

# Frontend Code Review

Use this skill to review frontend changes with attention to user-visible regressions, accessibility, interaction quality, and testability.

## Review Priorities
- User-visible behavior and state transitions.
- Accessibility semantics, focus handling, and keyboard support.
- Error, loading, and empty-state behavior.
- State management clarity and unintended coupling.
- Testability and regression risk of the changed code.

## Review Questions
- What can break visually or behaviorally for users?
- Are important states and transitions represented clearly?
- Do labels, roles, focus order, and interaction patterns stay accessible?
- Is state flow understandable enough to test and maintain?
- Does the change introduce brittle selectors, implicit contracts, or hidden side effects?

## Good Output
- Highest-risk review findings first.
- Notes on regressions, accessibility, and state-handling concerns.
- Suggestions for tests that would reduce uncertainty.
- Concrete cleanup or simplification opportunities.

## Common Mistakes
- Reviewing only styling and missing behavioral regressions.
- Treating accessibility as optional polish.
- Ignoring loading and failure states.
- Approving complex state wiring that is hard to reason about or test.
