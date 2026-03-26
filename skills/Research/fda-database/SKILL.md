---
id: fda-database
name: FDA Database
description: Query openFDA API for drugs, devices, adverse events, recalls, regulatory submissions, and substance identification.
category: Research
requires: []
examples:
  - Search for recent adverse event reports associated with this specific drug.
  - Retrieve the 510(k) clearance summary for a target medical device.
---

# FDA Database Access

## Overview

Access comprehensive FDA regulatory data through openFDA, the FDA's initiative to provide open APIs for public datasets. Query information about drugs, medical devices, foods, animal/veterinary products, and substances using Python with standardized interfaces.

**Key capabilities:**
- Query adverse events for drugs, devices, foods, and veterinary products
- Access product labeling, approvals, and regulatory submissions
- Monitor recalls and enforcement actions
- Look up National Drug Codes (NDC) and substance identifiers (UNII)
- Analyze device classifications and clearances (510k, PMA)
- Track drug shortages and supply issues
- Research chemical structures and substance relationships

## When to Use This Skill

This skill should be used when working with:
- **Drug research**: Safety profiles, adverse events, labeling, approvals, shortages
- **Medical device surveillance**: Adverse events, recalls, 510(k) clearances, PMA approvals
- **Food safety**: Recalls, allergen tracking, adverse events, dietary supplements
- **Veterinary medicine**: Animal drug adverse events by species and breed
- **Chemical/substance data**: UNII lookup, CAS number mapping, molecular structures
- **Regulatory analysis**: Approval pathways, enforcement actions, compliance tracking
- **Pharmacovigilance**: Post-market surveillance, safety signal detection
- **Scientific research**: Drug interactions, comparative safety, epidemiological studies

## Instruction
- Query specific FDA endpoints to retrieve data on drug/device adverse events, product labeling, and enforcement actions.
- Perform temporal trend analysis by using date ranges to track the frequency of safety signals or recalls over time.
- Conduct comparative profile analysis to evaluate the safety or recall history of multiple products side-by-side.
- Cross-reference information across different databases, such as linking 510(k) clearances with post-market adverse event reports.
- Map substance identifiers (UNII) to chemical structures and CAS numbers for drug research and identification.
- Adhere to API rate limits by implementing automatic pagination and utilizing API keys for high-volume requests.


## Output
- Comprehensive safety profiles and temporal trend reports for drugs, devices, or food products.
- Tabulated lists of recalls and enforcement actions including reasons for recall and product classification.
- Integrated data summaries linking approvals, labeling, and post-market performance for specific medical technologies.

## FDA Database Categories

### Drugs

Access 6 drug-related endpoints covering the full drug lifecycle from approval to post-market surveillance.

**Endpoints:**
1. **Adverse Events** - Reports of side effects, errors, and therapeutic failures
2. **Product Labeling** - Prescribing information, warnings, indications
3. **NDC Directory** - National Drug Code product information
4. **Enforcement Reports** - Drug recalls and safety actions
5. **Drugs@FDA** - Historical approval data since 1939
6. **Drug Shortages** - Current and resolved supply issues

### Devices

Access 9 device-related endpoints covering medical device safety, approvals, and registrations.

**Endpoints:**
1. **Adverse Events** - Device malfunctions, injuries, deaths
2. **510(k) Clearances** - Premarket notifications
3. **Classification** - Device categories and risk classes
4. **Enforcement Reports** - Device recalls
5. **Recalls** - Detailed recall information
6. **PMA** - Premarket approval data for Class III devices
7. **Registrations & Listings** - Manufacturing facility data
8. **UDI** - Unique Device Identification database
9. **COVID-19 Serology** - Antibody test performance data


### Foods

Access 2 food-related endpoints for safety monitoring and recalls.

**Endpoints:**
1. **Adverse Events** - Food, dietary supplement, and cosmetic events
2. **Enforcement Reports** - Food product recalls

### Animal & Veterinary

Access veterinary drug adverse event data with species-specific information.

**Endpoint:**
1. **Adverse Events** - Animal drug side effects by species, breed, and product


### Substances & Other

Access molecular-level substance data with UNII codes, chemical structures, and relationships.

**Endpoints:**
1. **Substance Data** - UNII, CAS, chemical structures, relationships
2. **NSDE** - Historical substance data (legacy)

## Support and Troubleshooting

### Common Issues

**Issue**: Rate limit exceeded
- **Solution**: Use API key, implement delays, or reduce request frequency

**Issue**: No results found
- **Solution**: Try broader search terms, check spelling, use wildcards

**Issue**: Invalid query syntax
- **Solution**: Review query syntax in `references/api_basics.md`

**Issue**: Missing fields in results
- **Solution**: Not all records contain all fields; always check field existence

### Getting Help

- **GitHub Issues**: https://github.com/FDA/openfda/issues
- **Email**: open-fda@fda.hhs.gov
