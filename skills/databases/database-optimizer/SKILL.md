---
id: database-optimizer
name: Database Optimizer
description: Diagnose and improve database performance by reviewing query patterns, indexing, schema choices, and operational bottlenecks.
category: Databases
requires: []
examples:
  - "Help me diagnose this database performance issue."
  - "What should I optimize first in this database workload?"
  - "Review this schema and query pattern for bottlenecks."
---

# Database Optimizer

Use this skill to diagnose database bottlenecks and propose the highest-value optimization path.

## Clarify First
- Is the problem query latency, throughput, lock contention, replication lag, connection pressure, or cost?
- Which queries, tables, or workloads are hottest?
- Is the system read-heavy, write-heavy, or mixed?
- What changed recently: schema, traffic, queries, indexes, deployment shape, or data volume?

## Optimization Priorities
- Find the real bottleneck before recommending fixes.
- Separate query, schema, index, workload, and infrastructure problems.
- Prefer the smallest high-leverage improvement over speculative broad rewrites.
- Consider operational cost and write amplification when suggesting new indexes or denormalization.
- Optimize for the business-critical path, not vanity metrics.

## Good Output
- Likely bottleneck categories.
- Highest-priority investigations or fixes.
- Tradeoffs of each optimization direction.
- Metrics or evidence needed before committing.
- Risks of making the wrong optimization first.

## Common Failure Modes
- Adding indexes without understanding the workload.
- Blaming the database for application-level inefficiencies.
- Chasing one slow query while system-wide contention is elsewhere.
- Treating optimization as purely SQL tuning when topology or workload design is the issue.
