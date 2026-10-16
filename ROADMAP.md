# VSE Roadmap

This roadmap follows the product thesis in PRODUCT_CONCEPT.md. It separates the broad vision from the smallest hackathon deliverable. A small first build is not a restriction on what VSE may become.

## Phase 0 — Keep the project resumable

Status: complete except for the unresolved official event identity.

- [x] Establish GitHub repository, project documents, agent handoff, research log, and explicit status vocabulary.
- [x] Define VSE as a question-first visual learning engine across science and technology.
- [x] Record the requirement that the user-facing explanation and evidence panel remain inside VSE.
- [x] Preserve the orbital-motion experiment and its bounded regression suite as a standalone module.
- [ ] Confirm the exact hackathon event and official rules. The phrase “World Dot Name weekend hackathon” has not been matched confidently to an official event page; do not infer rules from unrelated events.

Exit gate: a new agent understands the real product intent, current repository state, what is only an experiment, and the next unfinished task.

## Phase 1 — Define the first hackathon slice

Status: in progress.

- [ ] Identify the official event, deadline and time zone, eligibility, theme, judging rubric, code-preexistence policy, required demo, and submission method.
- [ ] Select one coherent question-first user journey to implement, based on VSE's core concept and event rules.
- [ ] Treat “How does an AI language model generate an answer?” as a leading candidate, not a locked decision.
- [ ] Define the initial supported question set and the honest response for unsupported questions.
- [ ] Define the minimum evidence path: source records, in-app evidence details, what claim support is required, and what remains a draft.
- [ ] Define the allowed visual representation and one meaningful interaction. Do not generate or execute arbitrary browser code.
- [ ] Decide whether the first demo needs a live LLM/retrieval service or whether a carefully prepared in-built concept packet proves the learning loop sufficiently.
- [ ] Decide the smallest stack only after these requirements and event rules are clear.

Exit gate: the first experience can be described as a testable end-to-end journey, with a bounded topic/claim scope, a visual interaction, in-app evidence, cost/credential plan, and demo success criteria.

## Phase 2 — Build the first VSE question-to-understanding experience

- [ ] Build the question input and a supported concept-discovery path.
- [ ] Retrieve a built-in concept packet and assemble an explanation at an accessible level.
- [ ] Show a step-by-step visual tailored to the concept.
- [ ] Add a meaningful control or state comparison and explain what changes.
- [ ] Reveal the real terminology, deeper explanation and mathematics where relevant.
- [ ] Show sources, claim support, limitations, assumptions, and evidence state inside the app; do not send the learner to an external webpage to receive the explanation.
- [ ] Provide a clear fallback for unsupported questions, missing sources, or unavailable model/API services.
- [ ] Keep API keys off the client and validate any model-generated visual plan against an approved schema.
- [ ] Test accuracy, layout, keyboard access, reduced motion, mobile behavior, and beginner understanding.

The existing orbit experiment can be reused as one built-in topic/module, but it does not by itself complete this phase.

Exit gate: a new user can ask or select a supported question, explore an accurate visual, deepen their explanation, and inspect evidence without leaving VSE.

## Phase 3 — Add a small set of topic packets

- Add a few carefully chosen questions across related subjects only after the first flow is validated.
- Use a consistent content/source/visual schema.
- Add search/discovery so people do not need perfect technical keywords.
- Track source freshness, claim review, model tests, rights, and uncertainty.
- Test whether the same interaction architecture can serve different kinds of scientific concepts without forcing the same visual style.

Exit gate: new topics can be added reliably without turning the product into passive text cards or unreviewed generated diagrams.

## Phase 4 — AI-assisted expansion, only when justified

Potential future capabilities:
- query interpretation and semantic retrieval;
- permitted research/data API integrations;
- source updates and version tracking;
- structured visual-plan generation;
- more visualization component types;
- comparison across competing explanations or sources;
- wider subject coverage and language support.

Each capability requires a user problem, evidence, a cost/terms plan, a validation path, and failure behavior. Do not build a giant crawler, vector database, agent orchestration layer, or universal simulation generator just because it sounds powerful.

## Phase 5 — Future possibilities, not first-release commitments

Accounts, saved journeys, classroom collaboration, offline packs, institutional tools, user submissions/reviews, personalization, and monetization remain out of scope unless a demonstrated need and explicit later decision justify them.

## Change-control rule

Before expanding scope, record the user problem, expected benefit, evidence, effort, costs, risks, and what current work it displaces. Prefer a working, understandable core journey over a large pile of features.
