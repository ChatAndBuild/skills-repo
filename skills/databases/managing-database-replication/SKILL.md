---
id: managing-database-replication
name: Managing Database Replication
description: Plan and review database replication strategies with lag awareness, failover tradeoffs, and read-consistency concerns.
category: Databases
requires: []
examples:
  - "Help me think through database replication."
  - "What should I watch for in a replicated database setup?"
  - "Review this replication plan for lag and failover risks."
---

# Managing Database Replication

Use this skill to reason about replication architecture, operational tradeoffs, and application behavior under lag or failover.

## Clarify First
- Primary-replica versus multi-region versus logical replication use case.
- Read scaling, disaster recovery, or analytics goals.
- Tolerance for replication lag.
- Expected failover behavior and operational ownership.
- Which workloads can safely read from replicas.

## Key Concerns
- Read-after-write consistency.
- Replication lag and its user-facing consequences.
- Failover timing and split-brain avoidance.
- Schema change coordination across replicated nodes.
- Backup and restore interactions with replication topology.

## Output
- Recommended replication stance and tradeoffs.
- Risks around lag, stale reads, or failover.
- Safe workload placement guidance.
- Monitoring and validation priorities.

## Common Mistakes
- Sending freshness-sensitive reads to replicas.
- Ignoring lag during deployments or backfills.
- Treating failover as instant without rehearsing it.
- Forgetting that replication does not replace backups.
