# VSE — Visual Science Explorer

VSE (Visual Science Explorer) is a question-first, AI-assisted visual learning engine for understanding how things work across mathematics, physics, AI, and the wider sciences. It turns questions into progressive explanations, interactive visual models, and deeper evidence-aware learning—all inside VSE.

**The north star: make knowledge visible, in the world.** Do not merely show information; help people build a mental model they can inspect, question, and explore—and then continue into the next connected idea.

## Project status

The repository is now intentionally research-first: the earlier standalone satellite-orbit demo, its regression test, and its dedicated workflow have been removed from the working tree so the product can be planned from a clean foundation. Their prior versions remain recoverable in Git history; no replacement frontend has been built. The project owner has confirmed VSE—the built-in question-to-visual-understanding engine—as the project direction for the event they call the “World Dot Name weekend hackathon”. That event is one opportunity to demonstrate the idea, not the reason VSE exists or the boundary of its future. The exact official event page/rules and the first bounded demonstration topic are still unverified.

- Authentication and authorization: out of scope for now.
- Monetization, payments, subscriptions, and ads: out of scope for now.
- User experience: people should be able to understand answers and explore visual models inside VSE; external sources are research/provenance inputs, not destinations the app sends learners to.
- Architecture direction: built-in knowledge library + AI-assisted retrieval/explanation + a constrained interactive visualization renderer. The product direction is confirmed; the first learning slice, event requirements and long-term stack remain to be determined.
- Long-term direction: a connected, cross-domain learning environment where concepts link to prerequisites, related ideas, applications, and next steps so a learner can keep exploring.
- Research coverage: broad and ongoing. Never claim that all scientific knowledge has been collected.
- AI answers: must not be presented as verified science by default.

## Start here

1. Read [AGENTS.md](AGENTS.md) before doing work.
2. Read [STATE.md](STATE.md) to understand the current checkpoint and the next action.
3. Read [PRODUCT_CONCEPT.md](PRODUCT_CONCEPT.md) for the canonical product thesis.
4. Read [HACKATHON_SLICE_BRIEF.md](HACKATHON_SLICE_BRIEF.md) for the leading but still provisional first experience.
5. Read [SPEC.md](SPEC.md) for the product boundaries and user experience.
6. Read [docs/AGENT_WORKFLOW.md](docs/AGENT_WORKFLOW.md) for the resume/continue protocol.
7. Read [docs/research/SOURCE_CATALOG.md](docs/research/SOURCE_CATALOG.md) and [docs/research/RESEARCH_BACKLOG.md](docs/research/RESEARCH_BACKLOG.md) before gathering material.
8. Update [STATE.md](STATE.md) and [docs/research/RESEARCH_LOG.md](docs/research/RESEARCH_LOG.md) after meaningful work.

## Documentation map

- AGENTS.md — mandatory operating contract for coding/research agents.
- STATE.md — current verified state, completed work, blockers, and exact next steps.
- PRODUCT_CONCEPT.md — canonical statement of the visual question engine, built-in user experience, AI/retrieval layer, and scope boundaries.
- HACKATHON_SLICE_BRIEF.md — provisional LLM-explainer candidate and acceptance criteria; not a locked decision or confirmed submission.
- SPEC.md — product goal, target experience, constraints, and non-goals.
- ROADMAP.md — staged milestones with explicit exit criteria.
- docs/ARCHITECTURE.md — provisional system model; no premature stack commitments.
- docs/CONTENT_SCHEMA.md — format for lessons, claims, visualizations, source records, and review status.
- docs/QUALITY_AND_PROVENANCE.md — verification, citation, uncertainty, and reuse rules.
- docs/AGENT_WORKFLOW.md — how agents resume work safely and avoid scope drift.
- docs/research/SOURCE_CATALOG.md — source leads and candidates with explicit review statuses.
- docs/research/OPENAI_MATH_RELEASE.md — specific research plan for OpenAI's mathematics release.
- docs/research/RESEARCH_BACKLOG.md — known gaps and ordered investigation queue.
- docs/research/RESEARCH_LOG.md — dated notes on work actually performed.
- docs/PROJECT_AUDIT.md — remote repository integrity, CI findings, and current gaps.
- docs/BUILD_READINESS.md — the mandatory hold/ready gate; no implementation while on hold.
- docs/AGENT_RESEARCH_BRIEF.md — the multi-agent research and content-compilation brief for the practical, cross-domain VSE vision.
- docs/DATA_AND_RESEARCH_PIPELINE.md — how sources become claims, data transformations, visuals, and learning packets.
- docs/research/DATASET_AND_API_REGISTER.md — data/API candidates, what was actually checked, and outstanding access/rights work.
- docs/research/RESEARCH_BATCH_PLAN.md — bounded research steps leading to an owner-reviewed build decision.

## Non-negotiable research rule

Track each item as **verified**, **partially verified**, **candidate**, **blocked**, or **not started**. A link being listed is not the same as its content having been reviewed; a paper's claim is not the same as an independently verified result; a visually convincing demonstration is not evidence on its own.

## Research-before-build gate

The project owner explicitly requires structured research, source/data checks, and a bounded product decision before implementation. Read [docs/BUILD_READINESS.md](docs/BUILD_READINESS.md) and follow [docs/research/RESEARCH_BATCH_PLAN.md](docs/research/RESEARCH_BATCH_PLAN.md). While the build gate says **HOLD**, do not start frontend, backend, database, API, model integration, or training work. A passing gate requires an owner-facing readiness recommendation; do not treat research completion as automatic permission to start building.

## First milestone

Research and prototype **one** concept end-to-end:
- a beginner-friendly question;
- a simple explanation with a clear analogy;
- one correct visual or interactive model;
- a deeper explanation with relevant mathematics/science;
- cited sources, limitations, and a visible verification state.

The orbit demo is an engineering experiment only. The initial hackathon slice should demonstrate the question → simple explanation → interactive visual → deeper explanation → in-app evidence loop. The LLM question is a natural candidate, but the precise slice is not locked until the event rules and a feasible plan are confirmed. The event identity is still unresolved; do not claim eligibility or permission to submit pre-existing code. Do not build authentication, billing, or a massive ingestion pipeline.

## Prototype regression tests

The first orbit prototype has dependency-free checks for path outcomes, approximate circular-radius stability, finite SVG coordinates, presets, reset, quiz feedback, and reduced-motion stepping. With Node.js 22 or newer available, run:

```sh
node tests/orbit-model.test.mjs
```

GitHub Actions run #38836368258 passed the Node.js 22 regression suite on PR #1, which was merged into `main`. These checks exercise the JavaScript and a stub DOM; they are not a real-browser test or independent physics review.

## How research status works

Research is intentionally incomplete until the records say otherwise. Use [the Research Coverage Ledger](docs/research/RESEARCH_COVERAGE.md) to see what was checked, what is only a candidate, and what remains missing or blocked. The project records failed searches and unverified claims so another agent can continue without repeating work or pretending it is complete.

## Give any coding/research agent this prompt

Read `AGENTS.md`, `STATE.md`, `PRODUCT_CONCEPT.md`, `SPEC.md`, `HACKATHON_SLICE_BRIEF.md`, `ROADMAP.md`, `docs/BUILD_READINESS.md`, `docs/AGENT_RESEARCH_BRIEF.md`, `docs/research/RESEARCH_BATCH_PLAN.md`, `docs/research/DATASET_AND_API_REGISTER.md`, and `docs/research/RESEARCH_COVERAGE.md` first. The previous orbit demo has been removed from the working tree; use the research and product documents as the current source of truth. VSE's north star is “make knowledge visible, in the world”: explain concepts simply, make mechanisms visible, add concept-specific practical exploration where it helps, and connect one learning step to the next. Keep the explanation, interaction, depth, and evidence inside VSE. Continue from the recorded checkpoint, inspect traceable sources, and record what was and was not checked. If the build gate is HOLD, do not implement frontend/backend/database/API/model/data-pipeline work; proceed with bounded research and documentation only. Compare a small number of candidate lesson topics within VSE rather than reopening the project direction; keep the LLM explanation as a leading topic candidate, not an irrevocable choice. Never invent sources or claim verification you did not perform. Keep changes small, maintain the research logs/state/backlog, and leave an exact next step for the next agent.
