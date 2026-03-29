---
id: dynamodb
name: DynamoDB
description: Design DynamoDB access patterns, partition keys, indexes, and item models around predictable query needs.
category: Databases
requires: []
examples:
  - "Help me model this in DynamoDB."
  - "What partition key should I use for this access pattern?"
  - "Review this DynamoDB schema for hot-partition risk."
---

# DynamoDB

Use this skill for DynamoDB-specific data modeling and access-pattern decisions.

## Start With Access Patterns
- What queries must be fast and frequent.
- Which entities are read together.
- Expected write distribution and burst patterns.
- Whether global secondary indexes are truly needed.
- Retention, TTL, and item-size constraints.

## Design Principles
- Model for access patterns first, not for relational elegance.
- Partition-key quality is central to scale and cost.
- Composite keys should reflect real retrieval needs.
- Secondary indexes are powerful but not free.
- Single-table design should simplify reads, not become a puzzle nobody can maintain.

## What To Surface
- Candidate partition and sort key designs.
- Hot-partition or uneven-distribution risks.
- Index tradeoffs and cost implications.
- Where denormalization helps or hurts.
- Questions that must be answered before locking the model.

## Common Mistakes
- Leading with entity modeling instead of query modeling.
- Creating GSIs for every imagined future query.
- Ignoring write hotspots.
- Forcing relational patterns into DynamoDB without adaptation.
