# Hackathon Slice Brief — Question-to-Visual Explainer

**Status:** Proposal for planning and evaluation, not a locked implementation decision or confirmed event submission. Read PRODUCT_CONCEPT.md first. The official “World Dot Name weekend hackathon” page/rules have not been identified confidently.

## 1. What the first demo must prove

VSE turns a question into a progressive, interactive learning experience—not only a chat response or a list of search results. The user should be able to understand the idea, inspect a visual representation, change something meaningful, go deeper, and see evidence and limitations without leaving VSE.

Core loop:

**Ask a question → retrieve relevant built-in/evidence records → explain simply → visualize the mechanism → let the user explore → reveal deeper science/AI/maths → show in-app evidence and limitations.**

The overall vision can cover many domains. The first demo must say plainly which questions are supported.

## 2. Leading candidate question

**“How does an AI language model generate an answer?”**

Why it is a candidate:
- AI is a core interest of the product owner.
- It lets VSE explain a mechanism rather than just produce an answer.
- A simplified but accurate sequence can make difficult language-model concepts visible.
- It can show progressive depth, one controlled interaction, evidence and caveats in a single coherent demo.

This choice still needs to be checked against the actual hackathon theme, rules, deadline, allowed prior work, and available AI services before it is locked.

## 3. Proposed user experience

### Step 1 — Ask

Show one question input and a few clearly labelled example prompts. Avoid a marketing promise that every possible question already works.

### Step 2 — Start with simple language

Give an explanation understandable to a beginner:
- the text is broken into token pieces;
- those token pieces are represented numerically;
- model layers use learned patterns and context to calculate what token could come next;
- a selection process chooses a token;
- the process repeats until the response is complete, then token IDs are converted back into readable text.

The exact level of detail must be checked against suitable source material; do not imply the model thinks or understands exactly like a human.

### Step 3 — Explore the visual sequence

Use a step-by-step flow with the current stage highlighted. Include a clear “teaching simplification” notice where a box stands in for complex internal computation. A sequence diagram is preferable to a decorative brain/network image.

### Step 4 — Make one thing interactive

Proposed first interaction: a small illustrative next-token selection panel. The learner can change a sample context or an illustrative setting and see how candidate scores/selections can change. Label the values as a toy example, not the actual private probabilities or activations of a real deployed model. Do not claim that the illustration reproduces a real model's exact internal inference.

Keep the interaction bounded and testable; do not ask an LLM to invent and execute fresh JavaScript at runtime.

### Step 5 — Go deeper

Reveal real terms in stages: tokenization, token IDs, embeddings, context, transformer layers, attention, next-token prediction, probability, and sampling. Explain each term in context. Add equations only where they improve understanding.

### Step 6 — Show the evidence inside VSE

Include an in-app evidence panel that states source titles, authors/organizations, dates/version, what each source supports, and what remains a simplification. Keep exact URLs, DOI/identifiers, dates accessed and reuse terms in internal source records. Do not make external URLs or third-party pages the way the learner obtains the explanation.

## 4. Candidate scope boundaries

**In the first deliverable:**
- one question-first path;
- one flagship explanation (LLM answer generation) polished end-to-end;
- at least one meaningful user-controlled visual interaction;
- simple and deeper explanation levels;
- an evidence/limitations panel within VSE;
- a visible fallback for unsupported questions;
- a repeatable test and a tiny beginner-learning evaluation.

**Optional only if event scope/time/capacity allow:**
- two additional built-in example questions that illustrate the cross-domain direction, such as one physics concept and one natural-world concept;
- live LLM-assisted wording or retrieval, provided keys are protected, cost is known, and generated output is treated as a draft.

**Not in the first deliverable:**
- a promise to visually answer every question on Earth;
- a giant research-paper crawler or copied encyclopedia;
- a database, vector store, agents or providers added without demonstrated need;
- accounts, authentication, payments, subscriptions or monetization;
- arbitrary model-generated browser code;
- sending users to outside websites to finish learning.

## 5. Retrieval and AI behavior

1. Check supported built-in concept packets first.
2. Retrieve only source material that is relevant and usable under its terms.
3. Keep the claim/source relationship in structured form.
4. Use an LLM to draft accessible wording or a constrained visual plan, not to mark its own output verified.
5. Validate the visual plan against approved components and parameter ranges.
6. If retrieval or evidence fails, explain the limitation. Do not fabricate a citation, calculation, or visual.
7. Keep the core experience usable with built-in material if a remote model/API is unavailable.

A full LLM integration and provider should not be chosen until the hackathon's rules, available credits, latency, budget, and deployment environment are confirmed.

## 6. In-app source requirement

The learner should not be redirected to an article, video, research site, or source URL to get the key explanation. Put the relevant summary, visual, and evidence metadata in the VSE interface. Internally retain canonical source identifiers/URLs, publication/version and access dates, rights, and claim-level support. “All built-in” describes the user experience; it does not authorize bulk copying material whose licence or terms do not permit reuse.

## 7. What needs to be researched before implementation

- Identify the exact event and official terms.
- Review authoritative beginner and technical resources about tokenization, transformer processing, and next-token prediction.
- Choose the exact technical claims and write the initial claim/source map.
- Decide what the toy visual does and explicitly state what it does not represent.
- Decide whether the first implementation can be built with local curated content alone or needs a live LLM/retrieval endpoint.
- Define acceptance tests for evidence display, unsupported inputs, visual-plan validation, keyboard/mobile use, and model/visual correctness.
- Define a before/after learner question that evaluates whether the experience improves understanding.

## 8. Acceptance criteria

The slice is ready to demonstrate when:
- a learner can enter or select the flagship question and remain inside VSE;
- the response includes a simple explanation, visual sequence, one meaningful interaction, a deeper layer, and in-app source/limitations details;
- the learner can describe the broad next-token generation loop in their own words;
- the UI distinguishes real model concepts from toy illustrative values;
- generated or missing information is not presented as verified;
- no external outbound link is needed to understand the lesson;
- the app works at mobile and desktop sizes and has keyboard/reduced-motion behavior checked;
- a regression check passes and a beginner test is recorded honestly.

## 9. Unresolved items

- Official hackathon name, page, rules, deadline/time zone and allowed pre-existing code.
- Whether the LLM question is the final first topic or just the leading candidate.
- Exact permitted LLM/research service and available no-cost access.
- Final technology choices and deployment environment.
