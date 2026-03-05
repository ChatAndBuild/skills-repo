---
id: add-provider-doc
name: Add Provider Doc
description: Documentation workflow for adding a new provider guide with setup, usage, limits, and troubleshooting.
category: Documentation
requires: []
examples:
  - "Add provider docs for a new integration with setup and troubleshooting sections."
  - "Draft a provider documentation checklist for release readiness."
---

# Add Provider Doc

Use this skill to produce provider documentation that is accurate, actionable, and support-friendly.

## When to Use

- A new provider integration is being introduced.
- Existing provider docs are incomplete or hard to operationalize.
- Support/onboarding teams need a reliable setup and troubleshooting guide.

## Workflow

1. Gather provider capabilities, prerequisites, authentication model, and rate limits.
2. Document setup sequence: required configs, credentials, and environment assumptions.
3. Add usage examples for common operations and expected responses.
4. Include error catalog with probable causes and concrete remediation steps.
5. Define operational notes: quotas, retries, backoff, and incident contacts/escalation.
6. Validate doc accuracy against real setup flow before publishing.

## Output / Checklist

- Provider overview with supported features and limitations.
- Step-by-step setup with verification checkpoints.
- Troubleshooting matrix with symptoms, causes, and fixes.
- Maintenance notes for upgrades, deprecations, and ownership.

## Constraints

- Keep security-sensitive values redacted in all examples.
- Align instructions with current production configuration and API versions.
- Avoid undocumented assumptions; call out prerequisites explicitly.
