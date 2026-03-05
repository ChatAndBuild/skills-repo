---
id: backend-development-feature-development
name: Backend Development Feature Development
description: Feature delivery workflow for backend services with API contracts, data changes, testing, and rollout controls.
category: Development
requires: []
examples:
  - "Implement a new backend feature with schema changes and a safe rollout plan."
  - "Plan backend feature development with API, observability, and migration steps."
---

# Backend Development Feature Development

Use this skill to ship backend features safely from design to production rollout.

## When to Use

- You are adding a net-new backend capability.
- A feature requires API updates plus storage or migration changes.
- You need release controls for staged rollout and rollback.

## Workflow

1. Define feature contract: inputs, outputs, errors, auth, and backward compatibility.
2. Design data updates: schema migrations, indexes, and consistency strategy.
3. Implement service logic with validation, idempotency, and fault handling.
4. Add observability: structured logs, metrics, traces, and alert thresholds.
5. Validate with tests: unit, integration, and contract tests for compatibility.
6. Roll out with feature flags/canaries and a documented rollback path.

## Output / Checklist

- API/data contract and compatibility notes.
- Migration plan with ordering and rollback instructions.
- Test coverage plan and verification commands.
- Rollout plan with monitoring signals and stop conditions.

## Constraints

- Preserve backward compatibility unless explicitly versioning the API.
- Never ship irreversible migrations without backup/restore strategy.
- Keep side effects idempotent for retries and distributed failures.
