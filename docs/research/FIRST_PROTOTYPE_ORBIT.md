# First Prototype Research Packet — Satellite Orbits

**Prepared:** 2026-10-16  
**Status:** Provisional concept selected; initial model/control checks passed in a stub-DOM V8 harness on 2026-10-16. Not a confirmed hackathon submission or independent physics review.  
**Concept question:** Why does a satellite stay in orbit instead of falling straight back to Earth?

## Why this is the current best first slice

This concept is narrow enough to build and review, yet it demonstrates VSE's core promise: intuition, a meaningful interactive visual, a deeper equation, visible assumptions, and source links. Official NASA learning materials describe orbital motion in terms of inward gravitational acceleration and sideways motion. A custom, dimensionless model can demonstrate the relationship without calling a paid service or copying a third-party simulation.

The choice is provisional and reversible. It was chosen because of source quality, visual clarity, low implementation cost, and a testable learner outcome—not because all other topics have been researched. It does not imply that the unresolved event rules permit pre-existing code.

## Shortlist comparison

| Candidate | Evidence available | Visual potential | Implementation / evidence risk | Decision |
|---|---|---|---|---|
| Why satellites stay in orbit | NASA Science, NASA Space Place, NASA JPL education materials directly explain orbital motion | High: manipulate initial sideways speed and observe path | Manageable with a declared Newtonian two-body model; numerical model still requires testing | **Choose provisionally** |
| Explore SPHEREx sky observations | NASA mission and data pages are strong candidate sources | Very high: real observations, filters, comparison | Higher: mission data schema, retrieval, calibration and visualization design need dedicated investigation | Keep for a later data-explorer slice |
| Explain a selected AI/LLM concept | Potentially strong papers and official technical reports | High for selected mechanisms | Risk of oversimplifying learned internal representations or implying diagrams are literal internal traces | Defer until one claim and primary-source set are selected |

This is not a complete comparison of VSE topics. It is a shortlist for the first demonstrable vertical slice.

## Learner objective and evaluation

After using the experience, a beginner should be able to explain in their own words that (1) gravity still acts in orbit, (2) the satellite has sideways motion while gravity continuously bends its path, and (3) changing the initial speed can change the path into an impact, a closed orbit, or an escape trajectory in the idealized two-body case.

Evaluation should be lightweight and honest: ask the learner the same concept question before and after the demo, then ask them to explain why the model's paths change. A correct multiple-choice response alone is not strong evidence that learning occurred.

## Claim map

| Claim ID | Intended statement | Supporting source | Scope / caveat | VSE status |
|---|---|---|---|---|
| ORB-CL-001 | Gravity remains active during an orbit; orbital motion can be described as continuous falling around the planet. | NASA Science, “Gravity & Mechanics”; NASA “What Is an Orbit?” | Beginner explanation; real spacecraft may perform engine burns and are affected by perturbations. | CLAIM CHECKED against the cited NASA explanations; no independent scientific review |
| ORB-CL-002 | Sideways motion plus inward gravitational acceleration can produce a closed orbit; changing speed changes the trajectory. | NASA Science, “Gravity & Mechanics”; NASA JPL “Modeling the Orbits of Planets” | A specific orbit depends on initial position and velocity as well as gravitational parameters. Too little speed from this chosen start can intersect the planet; escape requires meeting the energy/speed condition. | CLAIM CHECKED at the conceptual level; the VSE implementation has not had a scientific model review |
| ORB-CL-003 | Circular-orbit speed in an ideal Newtonian two-body model is (v=\sqrt{\mu/r}\), with (\mu=GM\). | The equation follows from equating Newtonian gravitational acceleration (\mu/r^2\) to circular centripetal acceleration (v^2/r\); NASA's mechanics page supplies orbital-mechanics context. | Explicit idealized derivation; not a complete real mission model. Add a specialist source and test calculation cases before labeling the quantitative implementation verified. | Equation derivation documented; basic trajectory behavior tested in a harness; numerical reference cases and independent review remain open |
| ORB-CL-004 | A satellite can escape rather than follow a closed orbit if its speed reaches the escape threshold at the chosen radius in the idealized two-body model. | NASA orbital-mechanics learning context; further primary/technical source audit recommended. | The threshold depends on the central body's gravitational parameter and starting radius. This UI uses dimensionless scaled values. | Conceptual threshold is consistent with ideal two-body mechanics; one escape case tested; a technical source audit and independent review remain open |

## Sources reviewed on 2026-10-16

1. **NASA Science — Chapter 3: Gravity & Mechanics**, especially “How Orbits Work” and “The Key to Space Flight”: https://science.nasa.gov/learn/basics-of-space-flight/chapter3-4/  
   Official institutional learning resource. The page explicitly marks its cannonball diagrams as simplifications, explains the no-atmosphere scope, and describes an orbit as falling around Earth. The specific lesson content was opened and read; no separate NASA-authored numerical dataset was used.

2. **NASA — What Is an Orbit? (Grades 5–8)**: https://www.nasa.gov/solar-system/what-is-an-orbit-grades-5-8/  
   Beginner-friendly account of straight-line motion without gravity, inward gravitational pull, sideways speed, and how too much or too little speed affects the path. Page opened; specific facts should still be paired with technical references before being used beyond the educational scope.

3. **NASA JPL Education — Modeling the Orbits of Planets**: https://www.jpl.nasa.gov/edu/resources/lesson-plan/modeling-the-orbits-of-planets/  
   Lesson plan about the relationship between mass, gravity, and orbital motion. Page opened; the lesson's physical activities are reference material, not assets copied into VSE.

4. **PhET — Licensing Information**: https://phet.colorado.edu/en/licensing  
   Reviewed as a rights warning, not as a simulation to embed. Regular HTML simulation files are described as CC BY-NC 4.0; PhET separately addresses commercial use and brand/logo requirements. VSE should not reuse its simulation code/assets for this prototype.

## Visual model specification

- Use an original, self-contained SVG/canvas presentation and the two-body Newtonian acceleration law.
- Treat the planet as a spherical, non-rotating body; ignore air resistance, the Moon/Sun, uneven mass distribution, relativity, and engine burns.
- Use normalized distance and time for the picture. State that its size and speed are not mission-grade measurements.
- Let the user adjust initial tangential speed as a multiple of circular-orbit speed at the same starting radius.
- Distinguish path outcome from scientific confidence. Include a fallback text explanation, keyboard-operable controls, reduced-motion handling, and a visible caveat list.
- Basic harness checks passed: the 1.00x path stayed between radii 1.7998769 and 1.8001231 (starting radius 1.8); 0.70x reached radius about 0.9981 and was classified as impact; 1.50x reached radius about 4.0023 and was classified as escape. Coordinates were finite. Preset, reset, and knowledge-check feedback also passed in a stub-DOM harness.
- This does not validate real-browser behavior, all numerical cases, conservation error across arbitrary trajectories, or underlying physics independently. The committed Node regression script is `tests/orbit-model.test.mjs` and still needs to be run in a local checkout.

## Decisions and unresolved work

- Do not use a database, backend, model API, or third-party embed for the initial page. Static, version-controlled content plus in-browser calculation is enough.
- The hackathon identity and terms remain unresolved. This prototype must not be represented as eligible for an unidentified event; check rules before submitting or assuming that pre-existing code is allowed.
- No qualified external reviewer has reviewed the numerical model; no browser, screen-reader, real-device, or learner study has been completed yet.
- Next action: run `tests/orbit-model.test.mjs` in a local checkout, check real-browser/mobile/accessibility behavior, extend numerical reference tests, and then ask a beginner to try the explanation.
