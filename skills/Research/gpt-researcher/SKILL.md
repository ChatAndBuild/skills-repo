---
id: gpt-researcher
name: GPT Researcher
description: LLM-based autonomous agent using a planner-executor-publisher pattern for high-speed, parallelized research and reporting.
category: Research
requires: []
examples:
  - Conduct a deep research report on the latest developments in quantum computing.
  - How do I configure gpt-researcher to use a local source for report generation?
---

# GPT Researcher Development Skill

GPT Researcher is an LLM-based autonomous agent using a planner-executor-publisher pattern with parallelized agent work for speed and reliability.

## Instruction
- Initialize the `GPTResearcher` agent by specifying the research query, report type (e.g., deep, outline), and source (web, local).
- Configure retrieval systems by registering and selecting appropriate search engines in `gpt_researcher/retrievers/`.
- Define the research plan by decomposing the main query into focused sub-queries for parallel execution.
- Orchestrate the "Planner-Executor-Publisher" pattern to gather context, analyze data, and synthesize final Markdown reports.
- Integrate specialized features like image generation or MCP (Model Context Protocol) data sources into the research workflow.
- Implement error handling with graceful degradation, ensuring the agent remains functional during network or API failures.
- Utilize WebSocket streaming to provide real-time status updates and incremental report generation to the user.

## When to Use
- When building autonomous research agents for high-speed, parallelized data gathering and reporting.
- When performing deep-dive research into complex topics requiring synthesis of information from multiple web or local sources.
- When automating the end-to-end research-to-reporting pipeline with high reliability and parallelization.

## Output
- Synthesized Markdown research reports containing citations and structured analysis.
- Real-time research logs and status updates delivered via WebSocket or console.
- Architectural diagrams and configuration templates for custom research agent development.