# VSE Build Readiness Gate

**Current decision (2026-10-16): HOLD — research and selection of the first bounded VSE learning journey.**  
**Authority:** This gate supplements PRODUCT_CONCEPT.md, ROADMAP.md, docs/ARCHITECTURE.md and docs/research/RESEARCH_BATCH_PLAN.md. The owner-confirmed project direction is VSE, the question-first visual learning engine. This gate does not lock the first topic, event rules or technology stack.

## Why the gate exists

VSE's product direction is already clear: help a person understand how a scientific or technical concept works through simple explanation, a meaningful visual, interaction, deeper detail, and in-app evidence. The remaining risk is scope—trying to support every possible question before one complete learning journey is accurate, useful and testable. Research should compare possible first topics and experiences *inside VSE*, not reopen the overall product direction.

The project owner intends to pursue this VSE concept for the event they call the “World Dot Name weekend hackathon”. The exact official event page/rules have not yet been identified confidently. Event deadline, eligibility, prior-code policy, AI/API rules and submission constraints must be verified before the demo is tailored to the event.

Do not choose a frontend framework, backend, database, external API, model provider, vector store, or hosting architecture simply because an agent can generate it. First establish what one learner needs to understand, what evidence/data supports that journey, and how the result can be checked.

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

## Candidate first learning journeys inside VSE

The project itself is VSE; this comparison is only about which small, verifiable learning journey should lead the first demo. These are examples to investigate, not a final selection:

1. **How does an AI language model generate an answer?** Potential visual: a token-by-token, step-by-step teaching sequence with a bounded illustrative next-token interaction. Main risks: implying the teaching diagram reveals the exact internals of a deployed model, oversimplifying tokenization/attention, or presenting illustrative scores as measured probabilities.
2. **Why does a satellite stay in orbit?** The existing orbit page can be reused as a sample module, but it needs real-browser/accessibility review and stronger numerical/scientific validation before it is presented as a finished learning experience. Main risk: mistaking a toy module for the product's question-first journey.
3. **Why does the sky appear blue?** Potential visual: compare wavelengths and scattering through a clearly bounded atmosphere illustration. Main risks: incorrect scale/colour encoding, weak treatment of wavelength dependence, and confusing an illustration with a photographic observation.
4. **How does an electric circuit work?** Potential visual: inspect a simple circuit and change one parameter to compare predicted behavior. Main risks: choosing an unsafe or inaccurate physical analogy, hiding assumptions, or creating a model that does not match the stated circuit law.

A sky-data or environmental dataset may be investigated as a future VSE topic when it offers a well-defined learning outcome. An ML dataset/benchmark is a separate future capability, not a replacement product direction. Do not spend the first batch researching every data platform; select topics based on learner value, primary evidence, a truthful visual, reasonable effort and testability.

Compare candidate learning journeys using documented evidence for: learner value; source quality; meaningful interactivity; difference from passive search; accessibility on phone/low bandwidth; access and rights; cost/effort; and ease of validating correctness. Qualitative ratings are acceptable before there is enough evidence for a numeric score. Do not manufacture precise scores.

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
