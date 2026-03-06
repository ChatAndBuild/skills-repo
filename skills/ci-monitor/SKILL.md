---
id: ci-monitor
name: CI Monitor
description: Monitor CI pipelines for failures, regressions, and instability, then prioritize fixes with clear ownership.
category: DevOps
requires: []
examples:
  - Monitor our CI failures and suggest prioritized remediation.
  - Create a CI health checklist with alert thresholds and owner actions.
---

# CI Monitor

Track CI health and drive rapid recovery from failing pipelines.

## When to Use

- CI pipelines are flaky, failing, or slowing down delivery.
- You need visibility into failure trends and ownership gaps.
- You want a repeatable process to improve CI reliability.

## Workflow

1. Collect pipeline outcomes and failure categories.
2. Identify highest-impact failing jobs and bottlenecks.
3. Group issues into flaky tests, infra issues, and config regressions.
4. Assign remediation owners and due dates.
5. Verify improvements with trend comparison.

## Output Format

```markdown
## CI Health Snapshot
- Success rate: <percent>
- Mean duration: <time>
- Top failing jobs: <list>

## Priority Fixes
1. <issue> -> <owner> -> <ETA>
2. <issue> -> <owner> -> <ETA>

## Verification
- [ ] Failure rate reduced
- [ ] Queue time stable
- [ ] Flake recurrence tracked
```
