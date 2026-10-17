# VSE Design Inspiration Research Register

**Status:** Initial desk research; inspiration shortlist only, not a chosen design or approved implementation.
**Reviewed:** 2026-10-17
**Purpose:** Find visual patterns worth studying for Visual Science Explorer (VSE), whose north star is **“make knowledge visible, in the world.”** This is a first-pass review of discovery pages and selected listings, not a claim that every item or template has been opened, tested, or licensed.

## How to use this register

Use the references to learn from layout, hierarchy, interaction, information architecture, and visual explanation. Do not copy another product's identity or treat a screenshot as a specification. Record the exact page, creator, review date, relevant pattern, adaptation idea, implementation effort, accessibility risks, and asset/code license before anything is adopted. Marketplace templates are often designed to sell courses or capture leads; VSE is a question-first learning environment, so its learning workspace and visual model matter more than a marketing homepage.

## First-pass source register

| ID | Source / candidate | Why it is worth reviewing | Initial observations / possible VSE use | Status / cautions |
|---|---|---|---|---|
| D-01 | [Framer Education templates](https://www.framer.com/marketplace/templates/categories/education/) | Browse education-specific templates with previews, page structures, and responsive marketing patterns. | Study how learning options, topics, pathways, and content are organized. Don't inherit a course-sales structure by default. | Listing page inspected. Individual template screens and license details must be checked before reuse. |
| D-02 | [Framer — EduOn](https://www.framer.com/marketplace/templates/eduon/) | Education / online-learning template with course and resource organization. | Review the information hierarchy and responsive page structure as a reference for topic discovery and lesson navigation. | Listing says US$29 and single-use license as of review; verify current price/terms before any purchase or reuse. Not selected. |
| D-03 | [Framer — Online Course](https://www.framer.com/marketplace/templates/online-course/) | Listed as a free education template with course catalog, lesson player, filters, and CMS-based pages. | Inspect whether its catalog/lesson navigation patterns can inform VSE's learning journey, without copying its sketch-to-photo treatment or course-selling flows. | Listing inspected; confirm current availability, license, and limitations before use. Not selected. |
| D-04 | [Framer — Edukate](https://www.framer.com/marketplace/templates/edukate/) | Free-remix listing for a multi-page education template. | Review page coverage, navigation, and how complex content is divided into sections. | Listing describes a 14-page education site and includes a Figma file; verify current terms and the actual file contents. Not selected. |
| D-05 | [Webflow Education templates](https://webflow.com/education-websites) | Broad education template discovery, filters for style/type/price, and previewable examples. | Compare page hierarchy, responsive layouts, search/filter patterns, and content systems. | Marketplace listing inspected; each template has its own terms. Do not assume Webflow cloning rights transfer to a separately coded VSE app. |
| D-06 | [Webflow e-learning search](https://webflow.com/templates/search/e-learning) | Education-specific template search with free and paid examples. | Review examples for clear navigation and lesson/topic grouping. | Search page inspected. Verify the exact template and usage rights individually. |
| D-07 | [Webflow — Elearna](https://webflow.com/templates/html/elearna-education-website-template) | Template listing describes learner dashboards and course-oriented pages. | Look for useful progress, learning-path, and navigation patterns; avoid adding accounts/progress features unless VSE's scope justifies them. | Listing inspected; license and asset rights require individual review. Not selected. |
| D-08 | [Webflow — EduraFlow](https://webflow.com/templates/html/eduraflow-website-template) | Education/e-learning listing with course and event structures. | Study the organization of multiple learning content types and section hierarchy. | Listing inspected; template's marketing structure may not fit a question-first workspace. Not selected. |
| D-09 | [21st.dev component registry](https://21st.dev/?tab=home) | Community catalog of React components, templates, and themes with previews and AI-oriented prompts. | Later, once implementation choices are made, search for components such as command/search input, tabs, panels, resizable split layouts, sliders, tooltips, accessible dialogs, and responsive navigation. | Discovery source, not a design direction. Component code, dependencies, and license must be checked one by one; don't choose a framework because of a component marketplace. |
| D-10 | [21st.dev chart components](https://21st.dev/community/components/explore/charts-for-react) | Focused collection of React charting options. | Potential reference for plots and data panels where a chart genuinely teaches a concept. VSE may need custom diagrams or simulations rather than a generic chart. | Listing inspected. Check source library, accessibility, data behavior, dependencies, and license before adoption. |
| D-11 | [Dribbble — education platform dashboards](https://dribbble.com/search/education-platform-dashboard) | Visual discovery for learning dashboard layouts and visual hierarchy. | Use screenshots to compare density, navigation, topic cards, and learning-state indicators. | Inspiration only. A visual mockup is not evidence that the interaction works or that its assets/code can be reused. |
| D-12 | [Dribbble — education app dashboards](https://dribbble.com/search/education-app-dashboard) | More product-style UI exploration. | Look for clear desktop/mobile adaptations and avoid overloading VSE with gamified metrics that do not improve understanding. | Inspiration only; inspect original creator page and rights before reuse. |
| D-13 | [Pinterest — science education app UI](https://in.pinterest.com/pin/642255596836619358/) | A visual reference tagged for science education UI. | Use as a visual lead, then trace to the original designer/source where possible. | Pin metadata is not enough to confirm original authorship, source file, or rights. Do not reuse the image directly without permission. |
| D-14 | [Pinterest — education app UI collection](https://in.pinterest.com/pin/40-stunning-education-app-ui-design-for-inspiration--226024475037008146/) | Collection-style visual exploration of education app interfaces. | Compare visual hierarchy, color use, and how learning actions are surfaced. | Secondary discovery only; trace each design back to its creator before any implementation or asset reuse. |
| D-15 | [Pinterest — learning platform dashboard](https://in.pinterest.com/pin/dashboard-learning-platform-ui-widgets--856809897899577985/) | Dashboard/widget reference. | Study small information blocks and how they might support evidence, controls, or learning progress without distracting from the main visual. | Secondary discovery only; not a verified reusable asset. |

## Patterns to investigate in actual previews

These are research questions, not decisions:

1. **Question entry:** Is the learner's question the clearest starting point? Does the interface support vague, everyday language without requiring a subject taxonomy first?
2. **Explanation + visual relationship:** Can prose and a meaningful visual be understood together? Does the visual change when the learner changes a variable?
3. **Depth control:** Can a learner move from intuitive explanation to mechanisms, terms, equations, and evidence without losing context?
4. **Next-step discovery:** Are prerequisites, related ideas, and applications discoverable without breaking the learning flow?
5. **Evidence and uncertainty:** Can sources, assumptions, units, data dates, and limitations be shown clearly without turning the page into a wall of citations?
6. **Responsive behavior:** Does the main visual remain usable on a narrow screen? What happens to controls and explanatory text on mobile?
7. **Accessibility:** Keyboard support, focus order, contrast, readable type, reduced motion, semantic labels, non-color cues, and alternatives to visual-only information.
8. **Loading and failure:** How should the page behave when a source, dataset, generated explanation, or interactive visual is unavailable?
9. **Visual identity:** Can VSE feel like an exploration instrument rather than a generic school LMS, AI chat clone, or SaaS admin dashboard?

## Early direction to test

A promising direction to test is a **calm scientific workspace**: a clear question bar; a readable, progressive explanation; a large concept-specific visual or model; compact controls that directly change the model; a deeper-learning/evidence area; and visible pathways to connected concepts. The layout should adapt to the subject instead of forcing every concept into one diagram or dashboard template. This is a hypothesis to validate with user journeys and reference comparisons, not an approved design.

## What not to do

- Do not copy a whole template, Figma file, screenshot, illustration, or component without checking the applicable rights and terms.
- Do not assume free-to-view means free-to-copy, or that a template license covers separate assets, resale, or code reuse in a different product.
- Do not use Dribbble/Pinterest popularity as evidence of usability or learning effectiveness.
- Do not select React, Tailwind, Framer, Webflow, or another stack from inspiration alone.
- Do not begin implementation while `docs/BUILD_READINESS.md` says **HOLD**.
- Do not spend money on a template before confirming that it supports VSE's product requirements and that the budget/rights make sense.

## Next research batch

1. Create a shortlist of 8–12 actual page references, including at least two desktop lesson/workspace examples and two mobile views.
2. For each, record page title, creator, URL, access date, observed layout, interaction evidence, responsive behavior, accessibility observations, license/terms, and the one pattern VSE could adapt.
3. Build a comparative matrix against VSE's learner journey, not against marketing-page aesthetics alone.
4. Convert the best findings into an original VSE page map and low-fidelity wireframe specification before any code is generated.
5. Keep visual inspiration, licensed reusable assets, and implemented/validated UI as three separate status categories.

## Research log

- 2026-10-17: First-pass desk review across Framer, Webflow, 21st.dev, Dribbble, and Pinterest search/listing pages. No templates were purchased or copied; no assets or code were imported. Individual page previews and full license terms remain to be verified for the final shortlist.
