# VSE Research Batch Plan

**Created:** 2026-10-16 UTC  
**Current stage:** Pre-implementation research.  
**Current decision:** Do not build yet; the product owner requested that structured data, information, sources and requirements be assembled before frontend/backend/database/API work begins.

This is a sequence of bounded research batches, not a commitment to complete all scientific research before the first prototype. The purpose is to select one narrow, defensible learning journey within the confirmed VSE project and prepare the records needed to build it responsibly.

## Working principle

VSE's long-term ambition can remain broad. Research must be broad enough to choose wisely, but the first implementation must be narrow enough to verify. No candidate is selected solely because it has beautiful images, a popular topic, an official API or available AI credits.

Use the companion documents:
- Repository integrity and current blockers: [PROJECT_AUDIT.md](../PROJECT_AUDIT.md)
- Explicit no-build gate: [BUILD_READINESS.md](../BUILD_READINESS.md)
- Source-to-learning lifecycle: [DATA_AND_RESEARCH_PIPELINE.md](../DATA_AND_RESEARCH_PIPELINE.md)
- Concrete source/API candidates: [DATASET_AND_API_REGISTER.md](DATASET_AND_API_REGISTER.md)
- Broad source leads and domain boundaries: [SOURCE_CATALOG.md](SOURCE_CATALOG.md), [SCIENCE_DOMAIN_MAP.md](SCIENCE_DOMAIN_MAP.md)
- Research status and record of work: [RESEARCH_COVERAGE.md](RESEARCH_COVERAGE.md), [RESEARCH_LOG.md](RESEARCH_LOG.md), [RESEARCH_BACKLOG.md](RESEARCH_BACKLOG.md)

## Batch 0 — Preserve and verify repository state

**Status:** Remote-tree/document audit completed on 2026-10-16.  
**Deliverable:** PROJECT_AUDIT.md.  
**Finding:** The remote tree contains 29 paths and the planned research records; PR #2 has a failing regular-expression parse error in its newly added test assertion. No runtime code or test file was changed by this documentation pass.

## Batch 1 — Compare candidate learning journeys inside VSE

**Status:** NOT STARTED. This is the next research batch. The owner-confirmed project is VSE, the question-first visual learning engine. Do not compare this project against separate dashboard or benchmark product ideas; select a small, evidence-backed learning journey within VSE.

| Candidate learning journey | Learner job | Evidence packet needed | Primary risk to test |
|---|---|---|---|
| How does an AI language model generate an answer? | Follow a simplified generation sequence, explore one behavior, then go deeper into real terminology and limitations | Authoritative technical sources on tokenization, transformer inference and next-token selection; explicit claim/source map; distinction between illustrative teaching values and actual model internals | An appealing visual presents an inaccurate picture of real model inference, or the toy interaction is mistaken for real model output |
| Why does a satellite stay in orbit? | Inspect how initial motion and gravity relate to trajectory | Existing NASA-based concept packet, original orbit model, relevant equations, assumptions and independent/broader test plan | Existing prototype is mistaken for a complete VSE question-first experience, or numeric behavior is not sufficiently validated |
| Why does the sky appear blue? | Compare how light wavelengths interact with the atmosphere | Authoritative optics/atmosphere sources, wavelength/scattering claim map and a carefully labelled illustration | Colour/scale is misleading or the diagram is confused with a real photograph/observation |
| How does a simple electric circuit work? | Change a bounded circuit condition and see how the relationship changes | Foundational electrical sources, exact simple circuit assumptions, units, expected calculations and safe illustrative visual | Incorrect analogy, hidden assumptions, or mismatch between visual and the stated model |

These are topic candidates, not four features to build. Research them only enough to choose one first learning journey. A sky/environment dataset can support a later lesson if it directly advances the same VSE learning purpose; an ML training/benchmark route is not the current project direction.

Use the evidence-based criteria in BUILD_READINESS.md: beginner learning value, authoritative evidence, meaningful interaction, genuine added value over static search, access and rights, mobile/bandwidth fit, effort/cost, and ease of correctness checks. Record reasons and uncertainty. Avoid fabricated numerical scores or precise cost estimates before actual evidence/sample review.

### Required output for Batch 1

Create a concise comparison record with:
- target learner and exact question;
- why the learner cannot already accomplish it adequately with current tools/resources;
- what VSE uniquely contributes beyond a search result or an official data explorer;
- one expected learning outcome;
- exact primary source/data candidate(s);
- data schema/format/access/rights status;
- visualization possibilities and validation method;
- build scope, open risks and no-cost path;
- what would disqualify the candidate;
- a recommendation with evidence and explicit uncertainty.

## Batch 2 — Inspect a bounded real source or data sample

**Status:** NOT STARTED for the selected first experience.  
**Rule:** Do not integrate the API yet. First inspect it manually or with a small bounded request.

For data-first candidates:
1. Find the actual product/collection—not just the platform landing page.
2. Capture a small sample, cutout or limited metadata response.
3. Record source/version/DOI, access date, query, schema, units, format, coordinates/time conventions, missing values, data volume, processing/quality flags and reuse terms.
4. Check the sample against the official data guide and a second source where needed.
5. Verify whether the proposed learner action can be implemented from the accessible data. If not, record that as a constraint rather than hiding it.

For concept-explainer candidates:
1. Choose a narrow mechanism that has authoritative primary/technical references.
2. Decompose the explanation into checkable claims.
3. Trace every key stage in the visual to claim/source evidence.
4. Mark teaching simplifications and analogy limits.
5. Define a simple, meaningful interaction and predicted result before drawing the visual.

## Batch 3 — Prepare the topic/content packet

**Status:** NOT STARTED for the selected route.

The packet should follow CONTENT_SCHEMA.md and include:
- stable topic identifier, question, audience/prerequisites and learning outcome;
- simple, standard and deeper explanation drafts;
- claim records and direct supporting evidence;
- original source summaries, version/date and rights notes;
- data records and transformations where applicable;
- visualization contract, parameters/ranges and assumptions;
- limitations, misconceptions and unsupported cases;
- one or more hand-checkable examples and expected outcomes;
- accessibility/mobile fallback and error messages;
- review status and exact follow-up tasks.

Do not copy entire articles, data portals, papers, images or interactive tools. Build an original explanation from checked evidence and use material only under applicable terms.

## Batch 4 — Validation plan

**Status:** NOT STARTED for the selected route.

Before implementation, define:
- scientific/data claim checks;
- dimensional/unit checks and expected quantitative results;
- boundary/missing/invalid input cases;
- data revision and unavailable-source behavior;
- source-evidence display tests;
- keyboard, reduced-motion, text alternatives and mobile checks;
- simple before/after learning task and pass criterion.

Do not claim “scientifically verified” from a passing program test. Record code test, source/claim review and independent review as different statuses.

## Batch 5 — Architecture decision

**Status:** NOT STARTED. Stack deliberately unselected.

Only after Batches 1–4:
- compare a static, version-controlled content approach with the minimum server-side or data-fetching approach actually required;
- decide whether live APIs are necessary or whether one prepared, versioned sample is more robust;
- decide whether secrets require a backend boundary;
- assess cache/storage needs, request volume, data size, hosting and deployment constraints;
- compare provider terms, rate limits, available no-cost quotas, privacy and failure modes;
- choose a frontend and visualization library only to satisfy the approved visual contract;
- choose persistence/database only when demonstrated search, updates, scale or access-control requirements need it.

Record chosen option, rejected alternatives, consequences and reversal conditions in DECISIONS.md before implementation.

## Batch 6 — Owner readiness review

**Status:** NOT STARTED.

When all applicable gates in BUILD_READINESS.md are complete, prepare a go/no-go memo for the project owner. It must state:
- selected question and why;
- evidence/source packet and unresolved limitations;
- actual sample inspected and its format/access/rights;
- proposed visual and test plan;
- the smallest technical arrangement and why it is sufficient;
- estimated operating/cost constraints grounded in official quotas or measured sample behavior;
- exact first build milestone and what will explicitly not be built.

Stop after delivering the readiness memo. Notify the owner before starting implementation.

## What this plan explicitly avoids

- Researching every scientific paper before proving one learner journey.
- Rebuilding official archive tools without a learning-centered reason.
- Choosing a frontend framework or database first and then forcing the problem into it.
- Treating public access as blanket reuse permission.
- Claiming that a single sample proves an entire archive is understood.
- Letting an AI agent fabricate source claims, silently fill gaps or mark its own output verified.
- Beginning code implementation in the same step that decides the build gate has passed.
