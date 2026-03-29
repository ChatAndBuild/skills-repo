---
id: create-database-migration
name: Create Database Migration
description: Draft database migration changes with attention to compatibility, data safety, backfills, and verification.
category: Databases
requires: []
examples:
  - "Help me draft a migration for this schema change."
  - "What should this database migration include?"
  - "Review this migration draft for compatibility and rollback risk."
---

# Create Database Migration

Use this skill when the user is authoring a migration artifact or deciding how a migration should be structured.

## Clarify First
- What schema or data change is actually needed.
- Whether the migration is additive, destructive, or transitional.
- Which application versions must coexist during rollout.
- Whether existing rows need backfill, transformation, or cleanup.
- How large the affected tables are and whether locking matters.

## What A Good Migration Should Do
- Express one coherent change, not a grab bag of unrelated edits.
- Preserve compatibility where old and new code may overlap.
- Make risky operations explicit instead of hiding them in a giant script.
- Keep verification and fallback thinking close to the migration design.

## Drafting Guidance
- Prefer additive steps before removals or renames.
- Split schema changes, backfills, and cleanup phases when they have different risk profiles.
- Include defaults, nullability, and constraint changes only after thinking through existing data.
- Treat indexes, foreign keys, and uniqueness as behavior changes, not just syntax.
- If a change is irreversible, say so clearly.

## What To Surface
- Proposed migration steps in order.
- Compatibility concerns for old and new code.
- Backfill or data-cleanup needs.
- Validation checks after the change.
- Rollback or forward-fix considerations.

## Common Failure Modes
- Writing a migration that only works if deployed instantly with matching code.
- Renaming or dropping columns before all readers are updated.
- Backfilling inside a risky schema step without considering runtime impact.
- Adding constraints before proving the existing data satisfies them.

## Boundaries
- Do not present examples as already executed changes.
- Prefer reviewable migration structure, checklist logic, and safety notes over assuming direct database access.
