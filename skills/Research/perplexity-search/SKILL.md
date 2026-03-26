---
id: perplexity-search
name: Perplexity Search
description: Conduct web-grounded searches for current information and academic research using Perplexity models via OpenRouter.
category: Research
requires: []
examples:
  - Conduct a web-grounded search for recent AI agent research.
  - Verify facts about the 2024 global carbon emissions with citations.
---

# Perplexity Search

## Overview

Perform AI-powered web searches using Perplexity models through LiteLLM and OpenRouter. Perplexity provides real-time, web-grounded answers with source citations, making it ideal for finding current information, recent scientific literature, and facts beyond the model's training data cutoff.

This skill provides access to all Perplexity models through OpenRouter, requiring only a single API key (no separate Perplexity account needed).

## When to Use This Skill

Use this skill when:
- Searching for current information or recent developments (2024 and beyond)
- Finding latest scientific publications and research
- Getting real-time answers grounded in web sources
- Verifying facts with source citations
- Conducting literature searches across multiple domains
- Accessing information beyond the model's knowledge cutoff
- Performing domain-specific research (biomedical, technical, clinical)
- Comparing current approaches or technologies

**Do not use** for:
- Simple calculations or logic problems (use directly)
- Tasks requiring code execution (use standard tools)
- Questions well within the model's training data (unless verification needed)

## Instruction
- Formulate search queries that target current information or academic research beyond the LLM knowledge cutoff.
- Select the appropriate Sonar model (e.g., Sonar Pro for deep research) based on the required depth and accuracy.
- Execute the search through the OpenRouter API and monitor usage for cost-effectiveness.
- Synthesize the real-time search results into grounded answers, ensuring all factual claims include source citations.
- Verify facts by cross-referencing multiple web sources provided in the search response.

## Output
- Comprehensive, web-grounded reports with inline or numbered citations.
- Lists of primary sources and scientific literature relevant to the research topic.


## Integration with Other Skills

This skill complements other scientific skills:

### Literature Review

Use with `literature-review` skill:
1. Use Perplexity to find recent papers and preprints
2. Supplement PubMed searches with real-time web results
3. Verify citations and find related work
4. Discover latest developments post-database indexing

### Scientific Writing

Use with `scientific-writing` skill:
1. Find recent references for introduction/discussion
2. Verify current state of the art
3. Check latest terminology and conventions
4. Identify recent competing approaches

### Hypothesis Generation

Use with `hypothesis-generation` skill:
1. Search for latest research findings
2. Identify current gaps in knowledge
3. Find recent methodological advances
4. Discover emerging research directions

### Critical Thinking

Use with `scientific-critical-thinking` skill:
1. Find evidence for and against hypotheses
2. Locate methodological critiques
3. Identify controversies in the field
4. Verify claims with current evidence

## Best Practices

### Query Design

1. **Be specific**: Include domain, time frame, and constraints
2. **Use terminology**: Domain-appropriate keywords and phrases
3. **Specify sources**: Mention preferred publication types or journals
4. **Structure questions**: Clear components with explicit context
5. **Iterate**: Refine based on initial results

### Model Selection

1. **Start with sonar-pro**: Good default for most queries
2. **Upgrade for complexity**: Use sonar-pro-search for multi-step analysis
3. **Downgrade for simplicity**: Use sonar for basic facts
4. **Use reasoning models**: When step-by-step analysis needed

### Cost Optimization

1. **Choose appropriate models**: Match model to query complexity
2. **Set token limits**: Use `--max-tokens` to control costs
3. **Monitor usage**: Check OpenRouter dashboard regularly
4. **Batch efficiently**: Combine related simple queries when possible
5. **Cache results**: Save and reuse results for repeated queries

### Security

1. **Protect API keys**: Never commit to version control
2. **Use environment variables**: Keep keys separate from code
3. **Set spending limits**: Configure in OpenRouter dashboard
4. **Monitor usage**: Watch for unexpected activity
5. **Rotate keys**: Change keys periodically


## Summary

This skill provides:

1. **Real-time web search**: Access current information beyond training data cutoff
2. **Multiple models**: From cost-effective Sonar to advanced Sonar Pro Search
3. **Simple setup**: Single OpenRouter API key, no separate Perplexity account
4. **Comprehensive guidance**: Detailed references for query design and model selection
5. **Cost-effective**: Pay-as-you-go pricing with usage monitoring
6. **Scientific focus**: Optimized for research, literature search, and technical queries
7. **Easy integration**: Works seamlessly with other scientific skills

Conduct AI-powered web searches to find current information, recent research, and grounded answers with source citations.
