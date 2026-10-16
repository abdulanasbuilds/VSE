# VSE Product Concept — A Visual Engine for Understanding How Things Work

**Canonical product direction.** This document clarifies the intended product. The orbit demo is an engineering experiment, not the definition of VSE and not the locked hackathon entry.

## 1. The idea in one paragraph

VSE (Visual Science Explorer) is a question-first, AI-assisted visual learning engine. Someone can ask how or why something works—an everyday object, a machine, an AI system, electricity, a natural phenomenon, a mathematical idea, a physical process, or a concept from another field. VSE should not require the person to know technical vocabulary before asking. It turns the question into an accessible explanation, a concept-appropriate visual model, and meaningful opportunities to explore, test, or practise the idea. People can start with language simple enough for a very young beginner, then move gradually into the real mechanism, terminology, equations, evidence, and limitations. The learning experience should happen **inside VSE**, rather than merely sending the person to articles, videos, or other websites.

**The north star is: make knowledge visible, in the world.** The product's central value is not the number of facts collected; it is making the relationships behind those facts visible and explorable. In the long term, VSE should help a learner move from one idea to the next through clear connections—prerequisites, related concepts, consequences, and real-world applications—rather than treating each question as an isolated answer.

## Owner-confirmed direction — 2026-10-16

The project owner has reaffirmed VSE as the project to pursue for the named **“World Dot Name weekend hackathon”**. The hackathon is a near-term proving ground, not the purpose, identity, or long-term boundary of VSE. The exact official event page/name has not yet been identified confidently, so event eligibility, deadline, submission rules and permitted prior work remain unverified. This uncertainty must not be misread as uncertainty about the product's direction.

The long-term ambition is for a person to be able to ask how or why something works across mathematics, physics, AI, technology, everyday objects, nature, and the wider fields of human knowledge where VSE can support a sound explanation. VSE should teach the process, not merely recite theory: let the learner see, explore, test, and practise an idea where appropriate. The whole learning journey should remain inside the VSE experience. After understanding one concept, they should be able to continue to a connected next idea, see why it relates, and build understanding cumulatively. The interface should not assume that the learner already knows technical vocabulary or every mathematical prerequisite. Start with an accurate intuitive explanation, then reveal the mechanism, a concept-appropriate visual, meaningful interaction or practice activity, deeper technical detail, and evidence in stages. “Explain it like I am five” is an entry point, not permission to distort the facts. Use plain language first and let learners grow into the complexity.

The hackathon version must be **small enough to research and validate properly**, not a claim that VSE already handles every question on Earth. Decide a narrow first learning journey and be honest about which questions are supported. If a question or evidence path is unsupported, explain the limitation rather than inventing an answer or rendering a plausible-looking but ungrounded model.

The product direction is confirmed; the first question, event compliance and technical stack are still open decisions. Other domains and data sources should be explored as possible lessons or future capabilities inside VSE—not as automatic replacements for this project.

## 2. The problem VSE is trying to solve

A person can find lots of information online and still not understand how a thing works. The material may be too advanced, scattered between sources, mostly text, or shown as a picture that cannot be explored. Some explanations state a rule without showing the process, letting the learner try an example, or connecting the idea to what they already know. Someone who missed some foundational mathematics or science should not need to master every prerequisite before taking the first step into a new concept.

VSE should build a bridge:
- from a natural-language question to the key idea;
- from the key idea to a visual sequence or model;
- from watching to interacting;
- from a beginner-level intuition to the actual mechanism, terms, maths, and evidence;
- from an answer generated for the user to an in-app record of what supports it and what remains uncertain;
- from one concept to the next through meaningful, explained relationships rather than an arbitrary list of links.

## 3. The three product layers

### A. A built-in knowledge library

A growing collection of curated knowledge packets: explanations, important concepts, discoveries and research results, claim-level provenance, original diagrams or animations, interactive model specifications, caveats, and related concepts. It should be searchable and browsable so people can discover concepts without already knowing the right technical keywords.

This is **not a promise to download or reproduce the whole internet or every scientific paper**. Add content in verifiable, rights-aware packets. Store original summaries, reusable data, licensed material, and necessary source metadata—not wholesale copied books, papers, websites, or educational videos.

### B. An AI explainer and research/retrieval layer

When someone asks a question, VSE should first find useful built-in material. If it is missing or incomplete, AI can help interpret the question, find relevant evidence through permitted research/data services, summarize the findings, adjust the language to the learner's level, and propose a suitable visual explanation.

AI expands discovery; it does not certify its own answers. It must distinguish established knowledge, source-reported findings, estimates, hypotheses, simplifications, and things that remain unresolved. If enough evidence is unavailable, say so. Do not invent citations or show a made-up visual as if it represented a real mechanism.

### C. An interactive visual understanding engine

Turn the answer into a small, understandable experience—not a paragraph with a decorative image.

A typical experience can include:
1. **The question:** what the person wants to understand.
2. **Simple intuition:** everyday language and a carefully labelled analogy, with where the analogy stops being accurate.
3. **Visual steps:** a diagram, sequence, chart, animation, or model that explains relationships.
4. **Explore it:** change a meaningful input, select a step, compare states, or inspect what changes and why.
5. **Try it:** where useful, complete a worked example, answer a prediction question, solve a small exercise, or explore a safe virtual experiment. Show feedback that explains the reasoning, not merely right/wrong.
6. **Go deeper:** reveal real terminology, equations, mechanisms, assumptions, data, and more precise explanations.
7. **Evidence inside VSE:** source titles, authors/organizations, dates, relevant claim support, evidence status, uncertainty, and limitations shown in the app.
8. **Continue learning:** offer relevant next concepts, prerequisites, contrasting ideas, or applications, with a short explanation of how each connects. This may be small in the first demo and grow into a richer cross-domain learning map over time.

The renderer must choose a visual form suited to the concept. A physics system may need a simulation; an LLM explanation may need a token/processing flow plus an explicitly simplified illustration; a statistical idea may need a plot that changes with the data. Not every subject should be forced into the same diagram template.

## 4. The user's experience must be self-contained

A core product requirement is that users should not have to leave VSE to understand the answer. VSE should provide the explanation, visualization, interaction, deeper layer, and evidence/provenance panel in its own interface. The app must not use an external article or video as a substitute for answering the question.

This does **not** mean VSE should hide where knowledge came from or copy all external source material. Source records remain in VSE, and their useful metadata and claim-to-source relationships can be displayed in-app. The system may consult permitted external research sources or services behind the scenes; they are inputs to the VSE experience, not a destination the user is sent to. Respect copyright, API terms, licences, privacy, and attribution. If content cannot lawfully be incorporated, create an original explanation supported by the source record rather than copying it wholesale.

## 5. Example: “How does an AI language model generate an answer?”

A well-scoped explanation could show:
- the person's input being split into tokens (with a small visible example);
- a simplified sequence showing that token IDs are represented numerically;
- a high-level picture of layers processing the sequence, with a clear note that this is a teaching model, not a literal view of every internal computation;
- a next-token prediction example with illustrative candidate scores;
- how selecting a token and adding it to the sequence repeats until an answer is produced;
- a control that changes a small, illustrative setting so the learner sees how outputs or candidate selection can differ;
- a deeper panel for embeddings, attention, transformer layers, probability, and next-token prediction;
- source notes and specific limits displayed inside VSE.

The example must not suggest that the toy candidate-score model reveals the private activations or exact reasoning of a real model. Real model inference and an educational visualization of inference are different things.

Other topics—why the sky is blue, how a circuit works, what makes a satellite orbit, how a cell makes a protein, or why an equation works—use the same overall journey but their own appropriately chosen visual model.

## 6. What the first hackathon should prove

The product vision is broad and long-term; a weekend implementation must remain bounded. The hackathon is a chance to validate and demonstrate the core idea, not a reason to shrink VSE into a one-off hackathon app. The first entry should demonstrate the core product loop clearly:

**Question → understandable explanation → meaningful visual → user interaction → deeper understanding → evidence displayed in-app.**

A strong first version can include a question input, a polished flagship concept, a small handful of additional curated example questions to communicate the breadth, progressive explanation levels, one genuinely interactive visual model, and an in-app evidence/limitations panel. Add live LLM or research retrieval when access, cost, event rules, and evaluation justify it. Do not claim that every possible question is already supported when the underlying library and visual model set are still small. A graceful honest fallback is better than confident nonsense.

The AI/LLM question is a natural **candidate** flagship because it aligns with the product owner's interest in AI and demonstrates VSE's central method. It is not locked as the entry until the precise event requirements and a practical build plan are confirmed.

The existing satellite-orbit page proves that a browser-based visual model can be implemented and regression-tested. It is a reusable example module, **not** a complete representation of VSE and not, by itself, the chosen hackathon product.

## 7. Explicitly not the goal

- Not just a static encyclopedia in which users scroll through piles of text.
- Not just a gallery of unconnected diagrams, animations, or videos.
- Not a generic chatbot that returns paragraphs and leaves the hard learning work to the user.
- Not a prettier search engine that redirects people to third-party sites instead of explaining.
- Not an automatic claim that an LLM explanation is scientifically true.
- Not a hackathon-only project; the event demo is just one milestone in a longer cross-domain learning product.
- Not a promise to answer every possible question perfectly from day one.
- Not a pipeline that bulk-copies the internet or every research paper.
- Not an all-at-once platform with account systems, payments, a giant backend, and agent orchestration before the core experience works.

## 8. The decision rule for every feature

Before building a feature, ask: **Does this help VSE turn a question into a more understandable, explorable, evidence-aware mental model?** If not, defer it.

For the first hackathon, prioritise a coherent, convincing learning loop over the volume of content, the number of integrations, or architectural complexity. Keep the technology stack, model provider, storage approach, and hosting open until the chosen experience and event rules make their requirements clear.
