# VSE — Visual Science Explorer

VSE (Visual Science Explorer) is a question-first, AI-assisted visual learning engine that helps people understand how things work across AI, mathematics, physics, biology, space, engineering, and other subjects. It turns questions into progressive explanations, interactive visual models, and deeper evidence-aware learning—all inside VSE.

**The product principle:** do not merely show people information; help them build a mental model they can inspect, question, and explore.

## Project status

The repository includes durable research/agent documentation and a tested satellite-orbit engineering experiment. That experiment is a sample visual module, not the definition of the product and not the chosen hackathon entry. The intended VSE experience is a built-in question-to-visual-understanding journey across scientific and technical domains.

- Authentication and authorization: out of scope for now.
- Monetization, payments, subscriptions, and ads: out of scope for now.
- User experience: people should be able to understand answers and explore visual models inside VSE; external sources are research/provenance inputs, not destinations the app sends learners to.
- Architecture: built-in knowledge library + AI-assisted retrieval/explanation + a constrained interactive visualization renderer. First hackathon scope and long-term stack remain to be chosen.
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
- docs/research/SOURCE_CATALOG.md — verified starting sources and additional candidates.
- docs/research/OPENAI_MATH_RELEASE.md — specific research plan for OpenAI's mathematics release.
- docs/research/RESEARCH_BACKLOG.md — known gaps and ordered investigation queue.
- docs/research/RESEARCH_LOG.md — dated notes on work actually performed.

## Non-negotiable research rule

Track each item as **verified**, **partially verified**, **candidate**, **blocked**, or **not started**. A link being listed is not the same as its content having been reviewed; a paper's claim is not the same as an independently verified result; a visually convincing demonstration is not evidence on its own.

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

Read `AGENTS.md`, `STATE.md`, `PRODUCT_CONCEPT.md`, `HACKATHON_SLICE_BRIEF.md`, `ROADMAP.md`, and `docs/research/RESEARCH_COVERAGE.md` first. Treat the orbit page as an engineering experiment, not the product definition. Keep the explanation, interaction, depth, and evidence inside VSE. Continue VSE from its recorded state: do the next highest-priority unfinished task, research and verify from traceable sources, record what you checked and what you could not find, update the Markdown logs/state/backlog, and keep changes small. Never invent sources or claim verification you did not perform. Do not build a giant product, add authentication, or add monetization. Follow the current scope and leave an exact next step for the next agent.
