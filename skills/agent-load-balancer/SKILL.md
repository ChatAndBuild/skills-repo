---
id: agent-load-balancer
name: Agent Load Balancer
description: Design load balancing and traffic distribution strategies for AI agents to improve reliability, latency, and throughput under varying demand.
category: DevOps
requires: []
examples:
  - Propose a load balancing strategy for this agent system under peak traffic.
  - Build a rollout plan for weighted routing between two agent backends.
---

# Agent Load Balancer

Plan and validate traffic distribution patterns for resilient agent operations.

## When to Use

- You need to distribute request load across multiple agent services/models.
- You want failover behavior with minimal user impact.
- You need safe rollout of new backends using gradual traffic shifting.

## Workflow

1. Identify traffic profile, peak patterns, and critical paths.
2. Choose routing strategy (round robin, weighted, latency-aware, failover-first).
3. Define health checks and circuit-breaker conditions.
4. Set rollout weights and rollback triggers.
5. Validate with synthetic and real-traffic checkpoints.

## Output Format

```markdown
## Routing Strategy
- Primary backend(s): <list>
- Policy: <routing policy>

## Health and Failover
- Health checks: <rules>
- Failover trigger: <condition>

## Rollout Plan
- Stage 1: <traffic split>
- Stage 2: <traffic split>
- Rollback: <trigger + action>
```

## Constraints

- Prefer incremental traffic shifts over full cutovers.
- Keep failover criteria explicit and measurable.
- Define rollback before rollout.
