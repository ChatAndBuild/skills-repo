---
id: database-architect
name: Database Architect
description: Design database architecture at the system level, including service boundaries, tenancy, topology, consistency, and scaling tradeoffs.
category: Databases
requires: []
examples:
  - "Help me think through the database architecture for this system."
  - "Should this platform use one database or several?"
  - "Review these tenancy and scaling tradeoffs from a database architecture perspective."
---

# Database Architect

Use this skill for higher-level database architecture decisions that go beyond individual tables or schemas.

## Start By Clarifying
- System shape: monolith, modular service, or multi-service platform.
- Workload mix: transactional, analytical, search-heavy, event-driven, or realtime.
- Expected scale, growth rate, and regional footprint.
- Isolation needs across teams, customers, or tenants.
- Consistency, latency, compliance, and recovery requirements.

## Architecture Questions
- One database or several?
- Shared schema, separate schemas, or separate databases for tenants?
- OLTP only, or a split between transactional and analytical workloads?
- Read replicas, partitioning, sharding, or none yet?
- Which data must remain strongly consistent, and where is eventual consistency acceptable?

## Design Priorities
- Keep boundaries aligned with ownership and operational reality.
- Favor simpler topologies until real scale or risk justifies added complexity.
- Separate workloads when they conflict in performance, retention, or access patterns.
- Treat tenancy and compliance decisions as architectural, not cosmetic.
- Design for recoverability and observability, not just happy-path throughput.

## Good Output
- Recommended architecture shape and why it fits.
- Key tradeoffs around consistency, scale, tenancy, and operations.
- Likely pressure points as the system grows.
- Questions that must be answered before committing to a topology.
- A phased path if the right answer changes over time.

## Common Failure Modes
- Sharding or splitting too early without a real bottleneck.
- Forcing all workloads through one store despite conflicting needs.
- Mixing tenant isolation strategies inconsistently.
- Designing only for throughput and ignoring recovery, migrations, and ownership.
- Letting product boundaries and data boundaries drift apart.

## Boundaries
- Do not pretend to inspect production architecture unless the user provides concrete details.
- Prefer architecture guidance, tradeoff analysis, and decision frameworks over pretending there is one universal best topology.
