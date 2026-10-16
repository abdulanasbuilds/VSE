# VSE — Visual Science Explorer

VSE is a research-first project exploring how to help people understand how the world works through clear explanations, trustworthy sources, diagrams, and interactive visual models.

**The product principle:** do not merely show people information; help them build a mental model they can inspect, question, and explore.

## Project status

The repository was empty at initialization and now contains the research/agent handoff documents plus a first single-file interactive prototype about satellite orbits. VSE remains an evidence-led project, not a complete multi-science platform.

- Authentication and authorization: out of scope for now.
- Monetization, payments, subscriptions, and ads: out of scope for now.
- First slice: static HTML/CSS/JavaScript with local calculation; long-term stack/hosting remain undecided.
- Research coverage: broad and ongoing. Never claim that all scientific knowledge has been collected.
- AI answers: must not be presented as verified science by default.

## Start here

1. Read [AGENTS.md](AGENTS.md) before doing work.
2. Read [STATE.md](STATE.md) to understand the current checkpoint and the next action.
3. Read [SPEC.md](SPEC.md) for the product boundaries and user experience.
4. Read [docs/AGENT_WORKFLOW.md](docs/AGENT_WORKFLOW.md) for the resume/continue protocol.
5. Read [docs/research/SOURCE_CATALOG.md](docs/research/SOURCE_CATALOG.md) and [docs/research/RESEARCH_BACKLOG.md](docs/research/RESEARCH_BACKLOG.md) before gathering material.
6. Update [STATE.md](STATE.md) and [docs/research/RESEARCH_LOG.md](docs/research/RESEARCH_LOG.md) after meaningful work.

## Documentation map

- AGENTS.md — mandatory operating contract for coding/research agents.
- STATE.md — current verified state, completed work, blockers, and exact next steps.
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

The current first concept is provisional and documented in `docs/research/FIRST_PROTOTYPE_ORBIT.md`. The hackathon identity/rules remain unresolved, so don't claim the prototype is eligible or that existing code may be submitted. Do not build authentication, billing, a general-purpose agent platform, or a massive ingestion pipeline as part of this milestone.

## How research status works

Research is intentionally incomplete until the records say otherwise. Use [the Research Coverage Ledger](docs/research/RESEARCH_COVERAGE.md) to see what was checked, what is only a candidate, and what remains missing or blocked. The project records failed searches and unverified claims so another agent can continue without repeating work or pretending it is complete.

## Give any coding/research agent this prompt

Read `AGENTS.md`, `STATE.md`, `ROADMAP.md`, and `docs/research/RESEARCH_COVERAGE.md` first. Continue VSE from its recorded state: do the next highest-priority unfinished task, research and verify from traceable sources, record what you checked and what you could not find, update the Markdown logs/state/backlog, and keep changes small. Never invent sources or claim verification you did not perform. Do not build a giant product, add authentication, or add monetization. Follow the current scope and leave an exact next step for the next agent.
