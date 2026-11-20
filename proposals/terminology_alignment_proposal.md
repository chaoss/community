# Proposal: Aligning Terminology Around “Signals”, “Metrics”, and “Impact”

## Context
Across various CHAOSS working groups, several key terms are used with slightly different meanings. This can lead to ambiguity for new contributors and external audiences. This proposal suggests a framework for aligning these terms while respecting intentional variations between WGs.

## 1. Terminology Definitions

### Signal
- **Common Usage:** Observable data points that may indicate a change or status.
- **WG Variation:** 
    - Some view signals strictly as raw data (e.g., number of PRs).
    - Others use "signal" as a proxy for a higher-level concept (e.g., "burst of interest" as a signal for project health).
- **Proposed Alignment:** A "Signal" is an observable, quantifiable indicator that provides insight into a specific aspect of community health, often serving as a precursor to more complex metrics.

### Metric
- **CHAOSS Definition:** "A documented way of measuring and tracking the success of any open-source software/community."
- **Areas for Clarification:** Distinguishing between a standalone metric and a "Metrics Model" (which aggregates multiple metrics).
- **Proposed Alignment:** A "Metric" is a formalized, standardized definition of how to measure a specific signal or set of signals consistently.

### Impact
- **Common Usage:** The real-world outcome or value resulting from community activities.
- **WG Variation:**
    - **Evolution WG:** Might view impact as repository-level growth and sustainment.
    - **OSPO/Funding WG:** Might view impact as business value, social good, or economic outcomes.
- **Proposed Alignment:** "Impact" refers to the demonstrated effects of an open-source project or community activity on its stakeholders (users, contributors, organizations, society).

## 2. Cross-WG Terminology Matrix

| WG Type | Focus Area | High Interest Term | Interpretation |
| :--- | :--- | :--- | :--- |
| **Metrics WGs** (DEI) | Metric Definition | **Signal** | Direct observations (e.g., demographic survey data). |
| **Context WGs** (OSPO, Funding) | Value & Strategy | **Impact** | Strategic outcomes (e.g., cost savings, talent retention). |
| **Operations WGs** | Community Support | **Contribution** | Visible activities (e.g., PRs, meeting attendance). |

## 3. Recommended Discussion Points
1. **Overlap Identification:** Where do "Signal" and "Metric" blur? Should we use "Signal" for unrefined data and "Metric" for CHAOSS-standardized definitions?
2. **Impact Levels:** Can we define "Micro-Impact" (project level) vs. "Macro-Impact" (ecosystem/societal level)?
3. **Internal vs. External:** How should we present these terms to external audiences (e.g., researchers, corporate partners) for maximum clarity?

## 4. Next Steps
- Present this outline in the next Cross-WG coordination meeting.
- Gather feedback via a community-wide survey or working document.
- Update the `terminology.md` file with agreed-upon nuances.
