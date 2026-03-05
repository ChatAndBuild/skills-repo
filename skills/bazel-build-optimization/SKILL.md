---
id: bazel-build-optimization
name: Bazel Build Optimization
description: Build-system optimization playbook for reducing Bazel build times and improving cache effectiveness.
category: DevOps
requires: []
examples:
  - "Analyze this Bazel project and propose the highest-impact build speed improvements."
  - "Our CI Bazel builds regressed; provide a targeted optimization workflow."
---

# Bazel Build Optimization

Use this skill to diagnose Bazel performance bottlenecks and apply measurable optimizations.

## When to Use

- Local or CI builds are too slow or unstable.
- Cache hit rate is low despite repeated builds.
- Incremental builds rebuild too many unrelated targets.

## Workflow

1. Capture baseline metrics: clean build time, incremental build time, and cache hit rate.
2. Identify expensive targets/actions via Bazel profiling and build event output.
3. Reduce invalidation: tighten dependencies, remove broad globs, and isolate generated outputs.
4. Improve cacheability: hermetic actions, stable environment, and deterministic toolchains.
5. Optimize remote execution/caching configuration for CI parity and locality.
6. Re-measure after each change and keep only improvements with proven impact.

## Output / Checklist

- Before/after performance metrics with methodology.
- Ranked optimization changes by impact and implementation cost.
- Risks and rollback strategy for build graph modifications.
- Follow-up monitoring plan for future regressions.

## Constraints

- Do not trade correctness for speed.
- Avoid large-scale rule rewrites without metrics-backed justification.
- Keep local and CI behavior aligned to prevent false gains.
