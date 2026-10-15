# VSE Product Specification

Status: working product brief; subject to evidence and user testing.

## 1. Purpose

VSE (Visual Science Explorer) helps people understand how things work by converting reliable scientific knowledge into explanations that move from intuition to visual inspection and, where useful, mathematical detail.

The product should do more than return an answer. It should help a learner form a mental model, explore that model, understand its limits, and follow the evidence back to source material.

## 2. Problem

Scientific information is spread across papers, repositories, institutional websites, datasets, textbooks, static diagrams, videos, and interactive demonstrations. These resources often assume prior knowledge. A reader can find information without understanding how its parts relate or what evidence supports it.

VSE investigates whether a guided, source-linked visual explanation can make a difficult concept easier to understand and explore.

## 3. Primary initial audience

Start with curious learners and self-directed beginners who want to understand a difficult concept but are not ready for dense papers or advanced notation. The user may be a school learner, a self-taught builder, or an adult exploring science.

Do not design every screen for a toddler, a child, a general learner, a specialist, and a researcher simultaneously. Use progressive depth instead.

## 4. Product principles

1. Visual understanding over information volume.
2. Evidence and attribution over confident-sounding text.
3. Progressive depth: intuition, visual model, formal explanation, further reading.
4. Honest simplification: explain what the model leaves out.
5. Interaction should teach something, not exist only for decoration.
6. A source's existence does not prove every claim in it.
7. Narrow scope and demonstrated learning beat an enormous unverified catalogue.
8. The product should remain useful when no generative AI is available.

## 5. Core user journey

1. A user asks a question or chooses a concept.
2. VSE identifies the topic and an appropriate explanation level.
3. The user receives a concise plain-language explanation and an analogy clearly labelled as an analogy.
4. A diagram, chart, animation, or interactive model shows the relevant relationships.
5. The user can click through stages or change a small number of meaningful parameters.
6. A deeper section connects the intuition to the real terminology, equations, data, or mechanism.
7. The page lists source references, source dates, verification status, assumptions, and limitations.
8. The user can explore related concepts and original sources.

## 6. First prototype requirements

- One clearly defined scientific concept, selected through research rather than by breadth.
- One complete explanation with at least two levels of depth.
- One interactive visual or a clearly specified fallback if implementation is not feasible.
- A visible reference list connected to claims.
- A visible note explaining simplifications and uncertainty.
- Responsive, accessible layout that works on a small screen.
- A repeatable checklist that evaluates whether a learner can explain the key idea before and after using the experience.

The prototype should be small enough to complete and test in a hackathon context. Confirm the actual event rules, deadline, judging criteria, required deployment, and available tools before tailoring the submission.

## 7. AI role

AI may help interpret a question, search or rank relevant material, create a first-draft explanation, propose visual forms, and suggest follow-up questions. Where practical, the system should use retrieved source material and structured content rather than invent details from memory.

AI output is a draft until evidence and model behaviour have been checked. Keep generated text separate from verified claims. Do not claim an AI discovered a result unless the attribution and research record support it.

## 8. Initial non-goals

- User accounts, authentication, and authorization.
- Billing, paid plans, ads, or monetization.
- Full coverage of all scientific fields or every published paper.
- Automatically generating a unique scientifically validated simulation for any imaginable prompt.
- Rehosting complete proprietary papers, textbooks, datasets, or visual assets.
- Replacing teachers, textbooks, research databases, scientific peer review, or specialist tools.
- A multi-agent orchestration platform as a product feature.
- Premature decisions about frontend framework, database, vector store, hosting, or model vendor.

## 9. Success criteria for the first prototype

A first milestone is successful when:
- A new user can state the main idea in their own words after using the experience.
- The visualization encodes the scientific relationship accurately within its declared assumptions.
- Important factual claims can be traced to cited sources.
- The explanation distinguishes an analogy from the underlying mechanism.
- The interface behaves on mobile and has keyboard/screen-reader considerations documented.
- The implementation can be changed without reconstructing the research notes.
- The agent can resume from STATE.md without restarting work.

## 10. Open decisions

The following decisions need evidence before commitment:
- First scientific topic and proof-of-learning test.
- Hackathon-specific constraints and judging rubric.
- Chosen implementation stack and hosting, based on the available environment and the simplest useful model.
- AI provider and budget, if AI is needed at all in the first demo.
- Which visualizations should be original, linked, embedded, or adapted under a confirmed license.
- Initial content review process and responsibility.
