---
id: postgres-schema-design
name: Postgres Schema Design
description: Design PostgreSQL schemas with strong constraints, sensible data types, indexing strategy, and operational awareness.
category: Databases
requires: []
examples:
  - "Help me design this Postgres schema."
  - "Which Postgres types and constraints fit this model?"
  - "Review this PostgreSQL schema for performance and integrity."
---

# Postgres Schema Design

Use this skill for PostgreSQL-specific schema choices when generic database advice is not enough.

## Focus Areas
- Data type choices that match real semantics.
- Constraints that protect invariants.
- Indexes driven by actual query patterns.
- Partitioning or archival only when scale justifies it.
- Operational effects of defaults, updates, and large tables.

## PostgreSQL Heuristics
- Prefer explicit types over vague text columns when the domain is structured.
- Use `uuid`, `timestamptz`, numeric types, and enums carefully based on interoperability and change cost.
- Keep nullable columns intentional rather than accidental.
- Use partial or composite indexes only for known access patterns.
- Treat JSONB as a flexible escape hatch, not the default data model.

## Review Output
- Recommended schema shape.
- Column and constraint suggestions.
- Indexing notes tied to expected queries.
- Risks around growth, updates, and migrations.
- Tradeoffs that may change later.

## Common Mistakes
- Overusing JSONB for relational data.
- Missing uniqueness or foreign-key guarantees.
- Adding too many indexes without query evidence.
- Designing without considering update frequency or table bloat.
