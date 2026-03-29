---
id: comparing-database-schemas
name: Comparing Database Schemas
description: Compare two database schemas and surface structural differences, compatibility risks, and migration implications.
category: Databases
requires: []
examples:
  - "Compare these two schemas for differences."
  - "What changed between these database versions?"
  - "Help me review schema drift between environments."
---

# Comparing Database Schemas

Use this skill to analyze how two schemas differ and what those differences mean operationally.

## Compare At These Levels
- Tables, columns, and data types.
- Nullability, defaults, and constraints.
- Indexes, keys, and unique guarantees.
- Views, triggers, and generated behavior if provided.
- Naming or semantic drift between versions.

## What To Surface
- Additive versus breaking changes.
- Differences likely to affect application compatibility.
- Index or constraint gaps that may alter behavior.
- Migration sequencing concerns.
- Changes that look accidental rather than intentional.

## Good Output
- Clear diff summary by object type.
- Breaking-risk assessment.
- Migration or rollout implications.
- Questions to ask before promoting the change.

## Watch For
- Same column name with different semantics.
- Default or nullability changes that alter write behavior.
- Missing indexes in one environment causing performance drift.
- Silent removal of uniqueness or referential constraints.
