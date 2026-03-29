---
id: write-unit-tests
name: Write Unit Tests
description: Design focused unit tests with clear intent, good isolation, and strong coverage of edge cases and failure paths.
category: Testing & Security
requires: []
examples:
  - "Help me write unit tests for this function."
  - "What unit tests are missing for this module?"
  - "Review these unit tests for focus and coverage gaps."
---

# Write Unit Tests

Use this skill to design and review unit tests that are focused, readable, and useful as long-term regression protection.

## Start By Clarifying
- What unit is actually under test.
- Which inputs and branches matter most.
- What dependencies should be isolated versus exercised directly.
- What failure modes or edge cases are most likely.

## Good Unit Test Principles
- Test behavior and contract, not implementation trivia.
- Keep each test focused on one meaningful claim.
- Cover success paths, edge cases, and error paths.
- Use names that explain the scenario and expected behavior.
- Prefer simple setup over clever reusable test machinery.

## What To Include
- Happy-path examples that document expected usage.
- Edge cases that are easy to miss in manual reasoning.
- Failure or rejection cases when the unit validates input or state.
- Assertions that prove the intended behavior without over-asserting on internals.

## Isolation Guidance
- Stub or fake unstable dependencies when they distract from the unit's behavior.
- Control time, randomness, environment, and network behavior when relevant.
- Be explicit about what the test is intentionally not covering.

## Good Output
- A test plan by scenario.
- Missing cases worth adding.
- Simplifications to make the tests easier to trust and maintain.
- Warnings about brittle or overly coupled assertions.

## Common Mistakes
- Testing private implementation details.
- Writing one oversized test that hides multiple concerns.
- Mocking so much that the test proves almost nothing.
- Ignoring error paths and weird inputs because the happy path passes.
