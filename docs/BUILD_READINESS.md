# VSE Build Readiness Gate

**Current decision (2026-10-16): HOLD — research and product-slice selection first.**  
**Authority:** This gate supplements PRODUCT_CONCEPT.md, ROADMAP.md, docs/ARCHITECTURE.md and docs/research/RESEARCH_BATCH_PLAN.md. It does not select a product route or technology stack.

## Why the gate exists

VSE is broad enough to become several different products if scope is not controlled: a question-to-visual concept explainer, a real scientific-data explorer, an environmental data investigation tool, or an ML dataset/benchmark workspace. These share a learning goal but have materially different data, validation, infrastructure, cost and user-experience needs.

The project must not choose a frontend framework, backend, database, external API, model provider, vector store, or hosting architecture simply because an agent can generate it. First establish what one learner needs to understand, what evidence/data supports that journey, and how the result can be checked.

**The gate applies to any agent or contributor. Do not start frontend, backend, database, API, model-training or production architecture implementation before this gate is passed. Documentation, source research and bounded paper-level analysis are allowed while the gate is on hold.**

## Non-negotiable sequencing

1. Decide which candidate experience is being evaluated; do not silently assume that the current leading LLM-explainer proposal is final.
2. Specify one user question/problem and a measurable learning outcome.
3. inspect primary sources and, for data-driven options, inspect at least one real, suitably small dataset/API response instead of researching only landing pages.
4. Build a claim/source map, data dictionary and rights/access record for the selected experience.
5. Specify what the visual represents, which variables users control, the assumptions, the limits and expected outcomes.
6. Define failure behavior and tests before implementation.
7. Only now compare the smallest viable technical options and their costs/constraints.
8. Present the completed evidence and readiness recommendation to the project owner. **Stop and notify the owner before beginning implementation.**

## Required gates

All mandatory gates must be checked before the status changes to READY FOR A SCOPED BUILD.

| ID | Gate | Required evidence | Status |
|---|---|---|---|
| BG-01 | Product slice | One selected candidate, clearly bounded user question, intended user, and reason it is a better first slice than alternatives | NOT READY |
| BG-02 | Learning outcome | Observable statement of what a beginner should understand or be able to do after the experience | NOT READY |
| BG-03 | Source packet | Primary/authoritative sources reviewed in context, exact version/date recorded, and each important claim linked to relevant source passages | NOT READY |
| BG-04 | Data packet (where applicable) | One actual data/API sample inspected; schema, field definitions, units, temporal/spatial scope, missingness, resolution, size and update cadence recorded | NOT READY |
| BG-05 | Access and rights | Verified access/authentication path, current service restrictions and quotas, source/data/code/media rights per item, attribution and redistribution conditions | NOT READY |
| BG-06 | Evidence and uncertainty | Claim-to-source map; distinguish measured, derived, modelled, simulated, predicted, hypothetical and simplified content; unresolved claims visible | NOT READY |
| BG-07 | Visual contract | A concept-specific visual plan, learning objective, user controls, ranges, scientific/transform rules, assumptions, edge cases and text fallback | NOT READY |
| BG-08 | Validation plan | Expected results, hand-checkable examples or reference comparisons, boundary cases and reproducible test strategy; do not confuse code tests with scientific verification | NOT READY |
| BG-09 | Failure and safety behavior | Unsupported questions, unavailable data/API, missing evidence, invalid parameters, timeout and network failure have honest fallbacks | NOT READY |
| BG-10 | Accessibility and device constraints | Mobile-first layout expectations, keyboard access, readable text, reduced-motion plan, non-visual explanation and low-bandwidth fallback are testable | NOT READY |
| BG-11 | Cost and operating assumptions | Cost-free path or an explicit cost ceiling, request/compute limits, API key handling, privacy minimization and fallback if free access ends | NOT READY |
| BG-12 | Technical decision record | Frontend/backend/storage/API/AI/deployment choices arise from requirements; alternatives and why they are rejected are documented | NOT READY |
| BG-13 | Success measure | Small beginner evaluation, before/after question or task, acceptance criteria, and clear failure threshold are defined | NOT READY |
| BG-14 | Repository hygiene | Open CI failures and deployment signals affecting the selected route are understood; project/code license decision recorded before external reuse is invited | IN PROGRESS |

## Candidate experiences to compare

These are research hypotheses, not selected features or commitments:

1. **Question-to-visual explainer.** A learner asks how a concept works; VSE presents simple explanation, an interactive model, deeper science/mathematics and in-app evidence. The current AI language-model answer-generation question belongs here. Main risks: generic-chatbot behavior, unsupported AI claims, and a visual that is decorative rather than explanatory.
2. **SPHEREx sky-data explorer.** The learner explores actual SPHEREx observations, compares wavelength bands/observations, filters relevant metadata and understands scientific context. Main risks: IRSA already provides a Data Explorer and analysis tools; VSE must add real learning value, while the data formats, calibrations and scientific interpretation may be technically demanding.
3. **Earth/environment data explorer.** A learner uses public earth-observation, climate, water or global-indicator data to investigate a meaningful question. Main risks: mismatched units/resolutions/periods, geographic gaps, data-quality assumptions and a dashboard that never teaches why a pattern appears.
4. **ML dataset/benchmark investigation.** A learner inspects a dataset, trains or compares models and checks results against a defined evaluation set. Main risks: license and privacy restrictions, dataset leakage, biased benchmarks, compute requirements and poor reproducibility. This is a different build class; do not select it merely because a leaderboard looks compelling.

Score candidates against documented evidence using a 0–5 scale for: learner value; source/data quality; visual interactivity; differentiating value; accessibility for phone/low bandwidth; feasible access and rights; cost/effort; ease of validating correctness. Record the reason for each score. Do not manufacture numerical scores before completing the relevant research.

## What does not need to be complete before the first build

- The full global scientific source catalogue.
- Every discipline, API or research paper.
- A production database or automated ingestion pipeline when a few versioned files meet the first requirement.
- Authentication, accounts, monetization, a vector database or multi-agent orchestration.
- A general renderer supporting every kind of scientific concept.

The correct goal is **a complete, defensible evidence packet for one small experience**, not an exhaustive inventory of all science.

## Current gate status and release rule

Current verdict: **HOLD**. The product slice has not been chosen, the data-first alternatives have not been compared with the LLM explainer, no selected-topic data packet has been inspected end-to-end, and the owner has not received a final readiness recommendation. PR #2 also currently has a known test-parse failure; see docs/PROJECT_AUDIT.md.

When all applicable gates are complete, update this file with evidence and direct links, change the verdict only if justified, and notify the project owner with the exact proposed first build and the remaining risks. Do not start implementation in the same step as marking this gate ready.
