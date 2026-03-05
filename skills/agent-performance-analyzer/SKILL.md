---
id: agent-performance-analyzer
name: Agent Performance Analyzer
description: Analyze AI agent performance using latency, success rate, cost, and quality signals to identify bottlenecks and improvement opportunities.
category: DevOps
requires: []
examples:
  - Analyze this agent workflow and identify the biggest performance bottlenecks.
  - Create a performance investigation checklist for latency, cost, and failure rate.
---

# Agent Performance Analyzer

Evaluate end-to-end agent execution quality and efficiency with actionable optimization guidance.

## When to Use

- You need to diagnose slow, expensive, or unreliable agent runs.
- You want to compare baseline performance against current behavior.
- You need concrete recommendations prioritized by impact.

## Workflow

1. Define performance goals (latency, quality, reliability, and cost).
2. Break execution into major stages and identify hotspots.
3. Quantify failure modes, retries, and low-quality outcomes.
4. Rank improvement candidates by impact, effort, and risk.
5. Propose a validation plan to measure post-change improvement.

## Output Format

```markdown
## Performance Snapshot
- Latency: <baseline/current>
- Success rate: <baseline/current>
- Cost per run: <baseline/current>

## Bottlenecks
1. <bottleneck and evidence>
2. <bottleneck and evidence>

## Recommended Optimizations
- <change 1> (impact: high|medium|low)
- <change 2> (impact: high|medium|low)

## Validation Plan
- [ ] Measure baseline
- [ ] Apply optimization
- [ ] Compare against baseline
```

## Constraints

- Prefer evidence-based recommendations over assumptions.
- Separate measurement from interpretation to avoid bias.
- Call out trade-offs when reducing latency may reduce quality.
