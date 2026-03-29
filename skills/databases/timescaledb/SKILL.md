---
id: timescaledb
name: TimescaleDB
description: Design and review TimescaleDB time-series schemas, hypertables, retention policies, and query patterns.
category: Databases
requires: []
examples:
  - "Help me model time-series data in TimescaleDB."
  - "What should I consider when using hypertables?"
  - "Review this TimescaleDB design for retention and query tradeoffs."
---

# TimescaleDB

Use this skill for PostgreSQL time-series workloads where TimescaleDB-specific design choices matter.

## Focus Areas
- Event shape, timestamp semantics, and cardinality.
- Hypertable partitioning strategy.
- Retention and compression needs.
- Query windows, rollups, and aggregation patterns.
- Write rate, late-arriving data, and backfill behavior.

## Good Design Heuristics
- Make time semantics explicit and consistent.
- Partition for operational scale, not for novelty.
- Plan retention and downsampling together.
- Keep hot-path queries simple and index-aware.
- Think about late data and reprocessing before it becomes urgent.

## Output
- Suggested hypertable and dimension strategy.
- Retention or compression guidance.
- Query and indexing considerations.
- Risks around cardinality, chunking, or backfills.

## Common Mistakes
- Too many high-cardinality dimensions.
- No retention strategy for ever-growing data.
- Treating all historical data as equally hot.
- Ignoring rollups until dashboards become slow.
