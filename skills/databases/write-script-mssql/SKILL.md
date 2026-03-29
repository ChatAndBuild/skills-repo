---
id: write-script-mssql
name: Write Script MSSQL
description: Draft SQL Server scripts with attention to transactional safety, deployment sequencing, and SQL Server-specific behavior.
category: Databases
requires: []
examples:
  - "Help me write a SQL Server script for this change."
  - "Review this MSSQL script for deployment safety."
  - "How should I structure this SQL Server migration script?"
---

# Write Script MSSQL

Use this skill to draft or review SQL Server scripts with clear sequencing, assumptions, and safety notes.

## Clarify First
- Is this for schema change, data correction, reporting, or operational maintenance?
- Will the script run interactively, in CI/CD, or as part of a deployment package?
- What transactional guarantees and downtime constraints matter?
- Are there dependencies on stored procedures, jobs, views, or application versions?

## SQL Server Guidance
- Make transaction scope and error-handling intent explicit.
- Think about locking, blocking, and deployment ordering.
- Keep idempotency in mind when scripts may be rerun.
- Be careful with destructive changes, large updates, and dependent objects.

## Good Output
- Ordered script structure.
- Notes on SQL Server-specific deployment concerns.
- Validation checks and assumptions.
- Risks around reruns, locking, or object dependencies.

## Common Mistakes
- Assuming the script is safe to rerun when it is not.
- Bundling unrelated changes together.
- Ignoring dependency order between objects.
- Making data and schema changes without considering blocking or rollback.
