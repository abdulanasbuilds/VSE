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
- External websites should usually remain linked sources. Reuse, adaptation, downloading, and embedding require item-specific rights checks.

## Changes to these decisions

Append the date, prior decision, new evidence, and reason for any substantive change. Do not silently remove earlier constraints.
