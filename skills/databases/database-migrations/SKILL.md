---
id: database-migrations
name: Database Migrations
description: Plan database schema migrations with rollout safety, data backfills, compatibility checks, and rollback awareness.
category: Databases
requires: []
examples:
  - "Help me plan a safe schema migration."
  - "What rollout steps should I use for this database change?"
  - "Review this migration plan for risk and rollback gaps."
---

# Database Migrations

Use this skill to plan safe schema and data migrations without assuming direct execution access.

## Clarify First
- What is changing in schema or data.
- Whether the change is additive, destructive, or both.
- Which services depend on the affected objects.
- Expected table size, write volume, and downtime tolerance.
- Whether a backfill or dual-read/dual-write phase is needed.

## Migration Safety Principles
- Prefer additive changes before destructive ones.
- Separate schema changes from data backfills when possible.
- Keep old and new application versions compatible during rollout.
- Define validation checks before making the change.
- Know the blast radius, fallback path, and stop conditions.

## Good Migration Plan
- Prechecks and assumptions.
- Ordered rollout steps.
- Compatibility strategy between old and new code.
- Backfill approach and verification points.
- Rollback or forward-fix strategy.

## Watch For
- Long locks on large tables.
- Backfills that overwhelm production traffic.
- Renames that break older code paths.
- Nullability or default changes that rewrite large datasets.
- Dropping columns or indexes before proving they are unused.

## Boundaries
- Do not present example steps as commands already executed.
- Emphasize review, staging validation, backups, and observability for risky changes.
