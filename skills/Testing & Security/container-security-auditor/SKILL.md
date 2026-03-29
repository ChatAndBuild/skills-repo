---
id: container-security-auditor
name: Container Security Auditor
description: Audit container build and runtime setups for image hygiene, privilege boundaries, secrets exposure, and supply-chain risk.
category: Testing & Security
requires: []
examples:
  - "Help me audit this container setup for security issues."
  - "What should I check in this Dockerfile and runtime config?"
  - "Review this container deployment for privilege and secret risks."
author: "Jeremy Longshore <jeremy@intentsolutions.io>"
version: "1.0.0"
---

# Container Security Auditor

Use this skill to review container images, Dockerfiles, and runtime configurations for practical security risk.

## Audit Areas
- Base image trust and update posture.
- Build-stage versus runtime-stage separation.
- Privilege level, user identity, and Linux capabilities.
- Filesystem writes, mounted volumes, and secret exposure.
- Network surface, package footprint, and supply-chain risk.

## Review Method
- Check what the image contains and why it needs to be there.
- Look for ways the container can do more than the workload requires.
- Review how secrets, credentials, and tokens enter the container.
- Separate image-hardening issues from orchestration/runtime issues.
- Highlight which findings are build-time, runtime, or operational.

## Good Output
- Highest-risk findings first.
- Concrete hardening priorities.
- Questions about missing runtime context when needed.
- Verification ideas for image contents, privilege model, and secret handling.

## Common Findings
- Running as root without justification.
- Oversized images with unnecessary packages or tools.
- Secrets baked into images or passed insecurely.
- Writable filesystems or broad mounts without need.
- Missing distinction between development convenience and production safety.
