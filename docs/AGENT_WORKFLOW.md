# Agent Workflow: Resume, Research, Build, Report

This document exists so work continues coherently when an agent, device, model, or session changes.

## Resume protocol

At the beginning:
1. Check the current branch, working tree, and latest commit.
2. Read AGENTS.md, STATE.md, and PRODUCT_CONCEPT.md.
3. Confirm the current state against files actually present.
4. Read the related SPEC/ROADMAP/research document.
5. Start with the next incomplete action in STATE.md unless actual evidence shows it is obsolete.
6. Do not ask the user to repeat decisions already recorded here.

## Research task protocol

1. Rewrite the question as a bounded research objective.
2. Search primary and authoritative sources first.
3. Verify canonical URLs and inspect relevant sections/files rather than relying on snippets.
4. Record both found and not found items.
5. Capture title, source type, owner, date, direct relevance, access path, known rights, review status, and unresolved questions.
6. Separate the source's claim from the agent's interpretation.
7. Add new candidates to SOURCE_CATALOG.md and specific unresolved work to RESEARCH_BACKLOG.md.
8. Add a dated entry to RESEARCH_LOG.md when meaningful review occurs.
9. Cite claims in project documents using direct links.
10. Report what was checked and what remains unchecked.

## Implementation task protocol

1. Confirm that a product requirement exists and belongs to the current milestone.
2. Inspect existing code and dependencies before choosing a design.
3. Implement the smallest slice that proves the idea.
4. Include sources, limitations, and testing for relevant science/visual logic.
5. Run targeted checks and capture actual output.
6. Inspect the diff for unintended changes.
7. Update STATE.md and ROADMAP.md if the project checkpoint has moved.

## When a task is too large

Do not attempt to ingest the whole internet, every paper, or every scientific claim in one operation. Break the work into bounded batches, prioritise sources with clear reuse paths, and use an inventory with statuses. If only a subset can be processed, commit that subset and list the remaining items explicitly rather than implying completeness.

## Handoff format

Before stopping, STATE.md must include:
- current phase and goal;
- last completed work with paths and commit where available;
- current repository reality (not memory of a prior session);
- verified findings;
- incomplete tasks and blockers;
- the next one or two actions, in order;
- tests/checks actually run;
- any decisions that must remain unchanged.

Prefer one explicit next task over an unprioritized list of 30 ideas.

## Response when the user says “continue”

Continue from the most recent saved checkpoint and the canonical PRODUCT_CONCEPT.md. Treat the orbit page as an engineering experiment, not VSE's whole concept. If the next task is clear, execute it without asking for confirmation. If the task needs a missing external permission or a user-specific decision, do the independent research first and record the dependency clearly. Never promise background work or claim to be working after the current response ends.
