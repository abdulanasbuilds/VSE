# Agent Operating Contract

These instructions apply to every AI coding agent, research agent, and human contributor working in VSE.

## First action on every session

1. Inspect the working tree and current branch before making changes.
2. Read README.md, AGENTS.md, STATE.md, SPEC.md, and ROADMAP.md.
3. Read only the relevant supporting documents next, including the source catalogue and research backlog for research tasks.
4. Identify the current milestone and the single next action already recorded in STATE.md.
5. Continue from that checkpoint. Do not restart, re-scaffold, or replace the project merely because a new session started.

If STATE.md is missing or contradicts the actual repository, inspect the actual files and recent commits, then repair the state note before proceeding.

## Scope discipline

- VSE means Visual Science Explorer: an evidence-led way to understand how the world works through explanations, sources, diagrams, and interactive visual models.
- The immediate goal is a small, trustworthy prototype, not a complete encyclopaedia or autonomous research platform.
- No authentication, authorization, accounts, payments, subscriptions, advertising, or monetization in the current phase.
- Do not assume or install a framework, database, hosting provider, vector database, or paid API before the smallest product requirement justifies it.
- Prefer reliable curated records and hand-built interactive models over a large unreviewed scraping pipeline.
- Do not copy entire books, papers, research repositories, visual assets, or websites into VSE. Record source links, metadata, lawful short summaries, citations, and only materials whose reuse terms have been checked.
- If the task is broader than the current milestone, document it in the backlog rather than expanding the implementation automatically.

## Research discipline

- Use primary sources when possible: original papers, official datasets, source repositories, institutional databases, and official documentation.
- Treat a search snippet, a generated answer, a visualization, and a repository claim as different evidence types.
- Distinguish: an established scientific fact, a researcher's claim, a model-generated claim, a prediction, a hypothesis, an analogy, and an educational simplification.
- A model-generated explanation must never be marked verified solely because an LLM produced it.
- Log the source URL, source type, date checked, what was checked, and what remains uncertain.
- A listed source is not reviewed source material. Use explicit statuses: verified, partially verified, candidate, blocked, or not started.
- For scientific findings, record the original claim and the verification path. For mathematics, distinguish paper proof, proof formalization, successful kernel checking, correct formal statement, and independent expert assessment.
- Respect the source's license, attribution, terms, and third-party rights. If reuse permission is unclear, link to the source instead of copying or embedding it.

## Implementation discipline

- Make the smallest coherent change that advances the current milestone.
- Inspect existing conventions before adding files or dependencies.
- Keep research metadata independent from UI code where practical.
- Every visualization should explain what is represented, what assumptions are used, what users can manipulate, and where the model stops being accurate.
- Add tests or a repeatable manual verification checklist for every non-trivial interactive model.
- Do not claim work passed tests unless the tests were run and results recorded.
- Do not leave fake data, placeholder citations, made-up research, or simulated verification presented as real.
- If blocked by credentials, inaccessible pages, API limits, or incomplete information, record the blocker and keep working on independent tasks.

## Close-out protocol

At the end of every meaningful task:
1. Summarize the exact change and evidence.
2. Update STATE.md with completed work, current phase, blockers, and one explicit next step.
3. Update docs/research/RESEARCH_LOG.md when sources were checked or research status changed.
4. Update the backlog if new gaps or follow-up work were discovered.
5. Run relevant checks; record the commands and outcomes honestly.
6. Inspect the final diff and ensure links and document paths are correct.

## How to interpret “continue”

When the user says “continue”, resume from STATE.md and the latest committed files. Work on the next highest-priority task that is sufficiently specified, do not ask the user to repeat known decisions, and do not turn the request into an uncontrolled rewrite. If a meaningful product decision is not yet supported by research, conduct that research or record a bounded decision proposal before implementing it.
