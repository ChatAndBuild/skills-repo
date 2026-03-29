---
id: database-design
name: Database Design
description: Design relational data models with clear entities, constraints, normalization tradeoffs, and query-aware schema choices.
category: Databases
requires: []
examples:
  - "Help me design the schema for this app."
  - "What tables and relationships should this system have?"
  - "Review this data model for normalization and query tradeoffs."
---

# Database Design

Use this skill to turn product requirements into a practical relational schema.

## Start By Clarifying
- Core entities and the business events that change them.
- Read-heavy versus write-heavy paths.
- Required consistency guarantees.
- Expected scale, retention, and audit needs.
- Which queries matter most on day one.

## Design Priorities
- Model facts and relationships before optimizing edge cases.
- Keep naming consistent and easy to reason about.
- Use constraints to protect invariants instead of relying on application code alone.
- Normalize first, then denormalize only when a real access pattern justifies it.
- Be explicit about ownership, lifecycle, and deletion behavior.

## Good Output
- Proposed tables or collections.
- Key columns, identifiers, and constraints.
- Relationship choices and why they fit.
- Expected hot queries and indexing implications.
- Tradeoffs, risks, and what to revisit later.

## Common Failure Modes
- Modeling screens instead of durable business concepts.
- Mixing unrelated concerns in the same table.
- Missing uniqueness, foreign keys, or state constraints.
- Premature denormalization without a clear query problem.
- Hiding many-to-many relationships in ad hoc JSON blobs.

## Boundaries
- Do not pretend to inspect a live database unless the user provides the schema.
- Prefer guidance, examples, and review criteria over assuming direct database access.
