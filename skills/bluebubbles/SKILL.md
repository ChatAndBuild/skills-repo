---
id: bluebubbles
name: BlueBubbles
description: Deployment and operations workflow for BlueBubbles service setup, health checks, and incident response.
category: Tools
requires: []
examples:
  - "Set up a reliable BlueBubbles deployment checklist for a new host."
  - "BlueBubbles is unstable after restart; give me a recovery workflow."
---

# BlueBubbles

Use this skill to run BlueBubbles as a stable service with predictable startup and health validation.

## When to Use

- You are deploying BlueBubbles for the first time.
- Service startup succeeds but notifications or sync are inconsistent.
- You need a repeatable operational runbook for maintenance windows.

## Workflow

1. Verify prerequisites: runtime version, host permissions, network access, and required credentials.
2. Validate configuration: env values, connection endpoints, webhook URLs, and storage paths.
3. Start the service with supervised process management and persistent logs.
4. Run smoke checks: login/session validation, message flow, media handling, and reconnect behavior.
5. Monitor runtime signals: error rates, reconnect loops, memory growth, and queue delays.
6. Document remediation for common failures and define restart/escalation criteria.

## Output / Checklist

- Confirmed prerequisite and configuration matrix.
- Health check results for core user flows.
- Known-failure playbook with exact recovery actions.
- Operational handoff notes for on-call use.

## Constraints

- Never expose credentials or tokens in logs or reports.
- Keep changes reversible; snapshot config before modifications.
- Prefer incremental fixes over full reinstall during incidents.
