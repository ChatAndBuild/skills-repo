---
id: add-expert
name: Add Expert
description: Operational process for onboarding a new expert profile with scope, quality gates, and governance.
category: Tools
requires: []
examples:
  - "Onboard a new expert and define acceptance criteria before activation."
  - "Create an expert addition workflow with review and rollback controls."
---

# Add Expert

Use this skill to add experts in a controlled way with clear ownership and quality checks.

## When to Use

- You are introducing a new expert persona/capability.
- You need consistent onboarding and review standards.
- You want to reduce quality variance after expert launch.

## Workflow

1. Define expert scope: domain boundaries, responsibilities, and non-goals.
2. Prepare profile inputs: tone, constraints, required references, and escalation policy.
3. Create acceptance tests covering correctness, safety, and edge-case handling.
4. Run staged validation with representative scenarios and failure injection.
5. Complete peer review and sign-off from technical/domain owners.
6. Launch with monitoring, feedback loop, and rollback/deactivation procedure.

## Output / Checklist

- Expert definition document (scope, allowed actions, limitations).
- Validation suite with pass/fail results and unresolved risks.
- Activation decision with owners and post-launch monitoring plan.
- Rollback criteria and rapid-disable instructions.

## Constraints

- Avoid overlapping scope that conflicts with existing experts.
- Enforce clear escalation for unsupported or high-risk requests.
- Do not activate without documented quality and safety review.
