---
id: analytics-events
name: Analytics Events
description: End-to-end workflow for defining, implementing, validating, and governing analytics events.
category: DevOps
requires: []
examples:
  - "Design analytics events for this feature and provide a validation checklist."
  - "Audit current analytics instrumentation and identify gaps before release."
---

# Analytics Events

Use this skill to keep analytics instrumentation accurate, consistent, and release-ready.

## When to Use

- A feature needs new or updated product analytics tracking.
- Event naming/properties have drifted and require normalization.
- You need pre-release verification for event quality.

## Workflow

1. Define analytics goals and map them to concrete user/system events.
2. Standardize schema: event names, required properties, types, and ownership.
3. Implement instrumentation at reliable trigger points with minimal duplication.
4. Validate payloads locally/staging against schema and expected cardinality.
5. Add monitoring for event volume anomalies and ingestion failures.
6. Document taxonomy updates and communicate downstream reporting impacts.

## Output / Checklist

- Event specification table (name, trigger, properties, owner).
- Instrumentation points and deduplication strategy.
- Validation evidence from staging/test environments.
- Post-release watchlist for anomalies and data quality.

## Constraints

- Do not emit PII or sensitive fields without explicit approval.
- Avoid event spam; keep high-cardinality fields intentional and controlled.
- Preserve compatibility with existing dashboards where possible.
