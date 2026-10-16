# VSE Roadmap

This roadmap deliberately separates research inventory from product implementation. Milestones are gates, not a promise to build every later phase.

## Phase 0 — Establish the project and keep it resumable

Status: foundation docs are complete except for the unresolved official event identity. General-purpose prototype work proceeds as a reusable product experiment; no event-specific eligibility is assumed.

- [x] Confirm repository access and inspect repository state.
- [x] Establish README and an agent-first working contract.
- [x] Finish the foundational product, research, and verification documents.
- [ ] Confirm hackathon requirements from an official event source.
- [x] Check repository reality: a single-file static prototype now exists; long-term stack is not locked.
- Exit gate: a new agent can resume from STATE.md and explain the goal, constraints, evidence, and next action.

## Phase 1 — Research inventory and first concept selection

- Audit the key sources in docs/research/SOURCE_CATALOG.md.
- For OpenAI math, inspect the current README, CONTENTS.md, overview.pdf/overview.tex, preprints, Lean README, formalization catalogue, comparator instructions, history, and license.
- Build a list of candidate concepts with source quality, visualization potential, complexity, and learner value.
- Review examples of visual learning and compare how they explain rather than simply display content.
- Confirm all intended reuse and licensing constraints.
- [x] Provisionally select one first concept and define what a learner should understand; see docs/research/FIRST_PROTOTYPE_ORBIT.md.
- Exit gate: the provisional orbit concept has NASA learning sources, an original visual model, declared caveats, and a testable learning objective. Numerical/reference validation and learner feedback remain open.

## Phase 2 — Smallest demonstrable experience

Status: in progress. Root index.html is the first static frontend slice; testing and user validation are not complete.

- Implement one question/concept entry path.
- Present progressive explanations.
- [x] Build an original, in-browser orbital-motion visualization; simulation verification remains pending.
- [x] Display source links, model limitations, and assumptions; keep model-test status honest and make verification status visible.
- [ ] Test mobile usability, accessibility basics, numerical accuracy, and the intended learner outcome.
- Exit gate: model tests pass, accessibility/mobile checks are documented, and a real novice can explain the core idea better after use. No evidence for this gate has been collected yet.

## Phase 3 — Small controlled content expansion

- Add a small number of additional concepts only after the first is reviewed.
- Reuse a content schema and verification workflow.
- Track coverage by subject, source type, age/depth, visualization type, and verification status.
- Add search or AI-assisted retrieval only if observed users need it.
- Exit gate: content can be added consistently without weakening provenance or quality.

## Phase 4 — Research catalogue and discovery improvements

Potential work, only when justified:
- Metadata integrations and respectful API clients.
- Source update detection and change history.
- Better cross-topic linking and citation graph.
- Reproducible computational notebooks and checked simulation results.
- Researcher review workflows and correction submissions.

Do not assume that a large-scale import of every source is feasible, permitted, or necessary.

## Phase 5 — Later possibilities, not current commitments

- Accounts and saved learning journeys.
- Institutional or classroom tools.
- Localization and offline experiences.
- Monetization or commercial licensing.
- Public contributions and editorial review.
- Personalization.

These are explicitly out of scope until a demonstrated need, safety/privacy plan, operational capacity, and business case justify them.

## Change-control rule

Before adding a major phase, record the user problem, expected benefit, evidence, effort, risks, and what current work it displaces. Prefer removing scope over letting the project expand without a working result.
