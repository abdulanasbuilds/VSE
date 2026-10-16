# Project Decisions and Assumptions

This file records stable choices so future sessions do not reinterpret the brief from scratch. Revisit a decision only when new evidence or an explicit user instruction justifies it.

## Confirmed by the project owner

### D-001 — Product direction
VSE means Visual Science Explorer: a place to understand how the world works through progressive explanations, diagrams, interactive visual models, scientific resources, and source citations.

### D-002 — Beyond mathematics
Mathematics is important but is not the entire product. The research map includes physics, astronomy, AI/computer science, chemistry, biology, Earth/climate science, engineering, health, statistics, and other fields.

### D-003 — Interactivity matters
The product should not be a static page of links or a chat-only interface. The goal is to help people understand concepts by inspecting and interacting with meaningful visual models where appropriate.

### D-004 — Progressive explanation
Explain the core intuition first, then the visual model, then the real scientific terms, formal reasoning, mathematics, and references. Simplifications and analogy limits must be visible.

### D-005 — Start small, do not force a giant product
Research broadly, implement narrowly. Start with one compelling and verifiable learning experience; expand only after the first one works and has been tested.

### D-006 — No authentication now
Authentication, authorization, user accounts, and sign-in pages are out of scope for the current phase. They may be reconsidered later, but no implementation should start now.

### D-007 — No monetization now
Payment, subscriptions, advertising, and monetization are out of scope for the current phase. Keep future commercial reuse rights in mind when choosing resources, but do not build billing.

### D-008 — Durable agent continuation
The repository must include clear Markdown instructions, project specification, content and source rules, backlog, logs, and a persistent state/handoff file. Agents must read the state and continue from the latest verified position rather than restarting or expanding scope automatically.

### D-009 — Found and missing information must both be tracked
Keep a visible source inventory and a backlog of anything not yet found, not reviewed, inaccessible, contradictory, or not verified. Never misrepresent an incomplete search as exhaustive.

## Current working assumptions, not permanent decisions

- The first audience is a curious beginner/self-directed learner.
- A static application may be enough for the first demo, but the implementation stack is not selected.
- The first topic should be chosen only after checking the actual hackathon requirements and evaluating source quality, visual potential, effort, and testability.
- AI may be used for retrieval and drafting, but it must not certify its own claims. The first version may rely on manually curated explanations if that produces a more reliable result.
- Users should not be sent away from VSE for the explanation; source provenance should be presented in-app. External sources may be consulted behind the scenes, but reuse, adaptation, downloading, and API use require item-specific rights/terms checks.

## Changes to these decisions

Append the date, prior decision, new evidence, and reason for any substantive change. Do not silently remove earlier constraints.


### D-010 — Orbit demo is an engineering experiment, not the product definition
The existing orbit module demonstrates one interactive science visualization. It is not a decision that VSE is a space product, not the selected hackathon entry, and not the product's central user journey. Keep it as a reusable example module; the first VSE-facing hackathon slice remains to be selected. Its technical notes live in docs/research/FIRST_PROTOTYPE_ORBIT.md.

### D-011 — The orbit experiment does not determine VSE's architecture
A static HTML/CSS/JavaScript page is enough for the existing orbit experiment. This does not decide the architecture of the intended VSE question engine, which may need server-side model access, retrieval, caching, or structured content storage. Choose tools only after the actual first hackathon slice is defined.


### D-012 — The learner experience stays inside VSE
Users should receive the explanation, visualization, interaction, deeper content, and evidence/provenance details inside VSE. Do not substitute external links, articles, videos, or embeds for the core explanation. External sources and APIs may inform VSE behind the scenes, but the user-facing learning journey should not redirect the learner away from the app. Store accurate source metadata and respect copyright, attribution, and licenses; “built in” does not mean bulk-copying whole sources.

### D-013 — AI expands the explainer beyond the curated library
The product combines a growing built-in library with AI-assisted question interpretation, evidence retrieval, and explanation generation. AI-generated claims and visual plans remain unverified until checked. If evidence is incomplete, say so rather than generating false certainty.

### D-014 — Visuals must be meaningful and structurally constrained
A diagram is not decoration. Every visual should express the concept's relationships and offer interaction when that aids understanding. Use a controlled set of validated visual schemas/components instead of executing arbitrary code generated by a model in the browser. Make simplifications, model assumptions, and limits visible.


### D-015 — Research and owner sign-off precede implementation (2026-10-16)

Before frontend, backend, database, external API, model integration/training, data-ingestion pipeline, or production architecture work begins, agents must complete the applicable requirements in `docs/BUILD_READINESS.md` and follow `docs/research/RESEARCH_BATCH_PLAN.md`. While the readiness status is HOLD, only bounded research, documentation, data/source inspection, evidence mapping, and test planning are authorized. The first bounded learning journey and tech stack remain open until supporting evidence exists. Once the required packet is ready, report the recommendation to the project owner and stop; a READY status does not grant agents permission to start implementation automatically.


### D-016 — VSE is the chosen project for the named weekend hackathon (2026-10-16)

The project owner has reaffirmed VSE as the project to pursue for the event they call the “World Dot Name weekend hackathon”. The exact official event page/name and its rules remain unverified, so no eligibility or submission claim may be made until those details are checked. This does not make the broad, universal topic coverage a first-demo requirement: select one small, evidence-backed question-to-visual learning journey, make it work well, and keep expanding VSE if the event submission does not win or the event passes. Do not pivot to a separate environmental dashboard or ML benchmark product as part of the current project.

### D-017 — VSE is a long-term, cross-domain learning product, not hackathon-only (2026-10-16)

The guiding idea is **“make knowledge visible, in the world.”** Mathematics and physics are major pillars, alongside the wider sciences and technology. A learner should be able to understand a concept through a progressive explanation and meaningful visual, then continue to connected ideas, prerequisites, consequences, or applications within VSE. A hackathon is one occasion to demonstrate and validate this core loop; it does not define the product's identity, disciplinary scope, or future. Keep early builds narrow for quality and testability without confusing the first slice with the full ambition.

### D-018 — Teach the process, not theory alone (2026-10-16)

VSE should serve people who may not know the technical vocabulary or prerequisites. Start with an accurate plain-language explanation, then make the process or relationship visible through the most useful concept-specific representation. Where it improves understanding, include interactive exploration, worked examples, guided practice, predictions, or a safe virtual experiment, with feedback explaining why an outcome follows. Then offer deeper mechanisms, formal terminology/mathematics, evidence and limitations, plus a connected next concept. “Explain it simply” must not mean oversimplifying into falsehood. Broad long-term coverage is an ambition to be earned through reviewed, rights-aware content batches; it is not a claim that every possible question is already supported.
