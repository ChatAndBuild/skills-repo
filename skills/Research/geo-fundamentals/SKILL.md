---
id: geo-fundamentals
name: Geo Fundamentals
description: Optimization for AI-powered search engines (Generative Engine Optimization) to enhance citation rates and authority signals.
category: Research
requires: []
examples:
  - What is Generative Engine Optimization and how does it differ from SEO?
  - How can I optimize my content to be cited by AI engines like Perplexity or Claude?
---

# GEO Fundamentals

> Optimization for AI-powered search engines.

## Instruction
- Prioritize the creation of content that gets cited, such as original statistics, expert quotes, and comparison tables.
- Implement a GEO checklist: include question-based titles, TL;DR summaries at the top, and clear definitions.
- Use Schema markup (Article, Person, FAQPage) to enhance semantic recognition and authority signals for AI crawlers.
- Monitor AI crawler access via User-Agents like `GPTBot` or `PerplexityBot` and decide on access strategies based on citation goals.
- Build entities through Google Knowledge Panels and industry mentions to consolidate brand authority in RAG retrieval models.
- Track performance metrics such as AI citation rate and "According to [Brand]" mentions using manual monitoring or UTM parameters.

## When to Use
- When optimizing digital content to be retrieved and cited by generative AI engines like ChatGPT, Claude, and Perplexity.
- When the goal is to enhance brand authority and "mindshare" within AI-generated responses rather than traditional search rankings.
- When developing a content strategy that focuses on structured data and entity recognition for RAG-based systems.

## Output
- A GEO audit report evaluating the "citation readiness" of specific content or projects.
- A roadmap for content optimization including recommended FAQ sections and schema updates.
- Comparative analysis of AI citation share against competitors in a specific industry.

## 1. What is GEO?

**GEO** = Generative Engine Optimization

| Goal | Platform |
|------|----------|
| Be cited in AI responses | ChatGPT, Claude, Perplexity, Gemini |

### SEO vs GEO

| Aspect | SEO | GEO |
|--------|-----|-----|
| Goal | #1 ranking | AI citations |
| Platform | Google | AI engines |
| Metrics | Rankings, CTR | Citation rate |
| Focus | Keywords | Entities, data |

---

## 2. AI Engine Landscape

| Engine | Citation Style | Opportunity |
|--------|----------------|-------------|
| **Perplexity** | Numbered [1][2] | Highest citation rate |
| **ChatGPT** | Inline/footnotes | Custom GPTs |
| **Claude** | Contextual | Long-form content |
| **Gemini** | Sources section | SEO crossover |

---

## 3. RAG Retrieval Factors

How AI engines select content to cite:

| Factor | Weight |
|--------|--------|
| Semantic relevance | ~40% |
| Keyword match | ~20% |
| Authority signals | ~15% |
| Freshness | ~10% |
| Source diversity | ~15% |

---

## 4. Content That Gets Cited

| Element | Why It Works |
|---------|--------------|
| **Original statistics** | Unique, citable data |
| **Expert quotes** | Authority transfer |
| **Clear definitions** | Easy to extract |
| **Step-by-step guides** | Actionable value |
| **Comparison tables** | Structured info |
| **FAQ sections** | Direct answers |

---

## 5. GEO Content Checklist

### Content Elements

- [ ] Question-based titles
- [ ] Summary/TL;DR at top
- [ ] Original data with sources
- [ ] Expert quotes (name, title)
- [ ] FAQ section (3-5 Q&A)
- [ ] Clear definitions
- [ ] "Last updated" timestamp
- [ ] Author with credentials

### Technical Elements

- [ ] Article schema with dates
- [ ] Person schema for author
- [ ] FAQPage schema
- [ ] Fast loading (< 2.5s)
- [ ] Clean HTML structure

---

## 6. Entity Building

| Action | Purpose |
|--------|---------|
| Google Knowledge Panel | Entity recognition |
| Wikipedia (if notable) | Authority source |
| Consistent info across web | Entity consolidation |
| Industry mentions | Authority signals |

---

## 7. AI Crawler Access

### Key AI User-Agents

| Crawler | Engine |
|---------|--------|
| GPTBot | ChatGPT/OpenAI |
| Claude-Web | Claude |
| PerplexityBot | Perplexity |
| Googlebot | Gemini (shared) |

### Access Decision

| Strategy | When |
|----------|------|
| Allow all | Want AI citations |
| Block GPTBot | Don't want OpenAI training |
| Selective | Allow some, block others |

---

## 8. Measurement

| Metric | How to Track |
|--------|--------------|
| AI citations | Manual monitoring |
| "According to [Brand]" mentions | Search in AI |
| Competitor citations | Compare share |
| AI-referred traffic | UTM parameters |

---

## 9. Anti-Patterns

| ❌ Don't | ✅ Do |
|----------|-------|
| Publish without dates | Add timestamps |
| Vague attributions | Name sources |
| Skip author info | Show credentials |
| Thin content | Comprehensive coverage |

---

> **Remember:** AI cites content that's clear, authoritative, and easy to extract. Be the best answer.

---

## Script

| Script | Purpose | Command |
|--------|---------|---------|
| `scripts/geo_checker.py` | GEO audit (AI citation readiness) | `python scripts/geo_checker.py <project_path>` |
