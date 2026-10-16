# Scientific Source and Visualization Catalogue

Last reviewed for this initial pass: 2026-10-15. This is a research inventory, not a claim that all sources, publications, discoveries, or licenses have been exhaustively checked.

## How to read statuses

- **PARTIALLY VERIFIED**: the page was opened and its core purpose or selected details were inspected. Individual items and rights may still need checking.
- **CANDIDATE**: relevant starting point; detailed access, coverage, quality, and rights review remains.
- **NOT STARTED**: named as a future research lead but not examined in this pass.
- **BLOCKED**: a clear access or permission obstacle has been encountered and recorded.

A landing page can be confirmed without confirming every claim or asset inside it. Never copy a full research corpus just because it is accessible.

## A. OpenAI and AI-generated scientific work

| ID | Resource | Why it matters | Status and next check |
|---|---|---|---|
| AI-001 | [OpenAI Mathematics repository](https://github.com/openai/math) | Research manuscripts and supporting formal proof artifacts produced by an OpenAI internal model. | PARTIALLY VERIFIED — README and CONTENTS were fetched; 719 manuscripts/372 families reported 2026-10-15; history records three withdrawals and 300/719 top-line results formalized. Full family-by-family verification remains open; see OPENAI_MATH_RELEASE.md. |
| AI-002 | [OpenAI math README](https://github.com/openai/math/blob/main/README.md) | Describes the current manuscript catalogue and its verification limits. | PARTIALLY VERIFIED — page reviewed 2026-10-15; counts in search snapshots differ from the live README. |
| AI-003 | [OpenAI math CONTENTS.md](https://github.com/openai/math/blob/main/CONTENTS.md) | Index/map of individual manuscript families and results. | CANDIDATE — systematically parse all entries and map them to topic metadata. |
| AI-004 | [OpenAI math overview.pdf](https://github.com/openai/math/blob/main/overview.pdf) and [overview.tex](https://github.com/openai/math/blob/main/overview.tex) | Overview of result families and classification. | PARTIALLY VERIFIED — overview.tex was fetched and lists 17 subject headings with 719/372 metadata; the PDF viewer could not be screenshot as a PDF, so page-by-page visual review remains pending. |
| AI-005 | [OpenAI math Lean directory](https://github.com/openai/math/tree/main/lean) | Formalization support, Lean library, formalization catalogue, and checks. | PARTIALLY VERIFIED — Lean README, formalization.yaml excerpt, Comparator README, and result 003 scope note were inspected. Upstream warns this is a large single library and recommends compiling small portions; full tree/build audit remains open. |
| AI-006 | [OpenAI math preprints](https://github.com/openai/math/tree/main/preprints) | Manuscript PDFs/source files, citations, and manuscript-specific build instructions. | CANDIDATE — index metadata and link records; do not bulk-copy manuscript content. |
| AI-007 | [OpenAI reasoning traces directory](https://github.com/openai/math/tree/main/reasoning_traces) | Abridged released reasoning summaries for selected results. | CANDIDATE — map only explicitly released items; do not infer full internal reasoning from summaries. |
| AI-008 | [OpenAI scientific research overview](https://openai.com/science/) | Official entry point for AI-assisted work in mathematics, physics, chemistry, biology, and research workflows. | PARTIALLY VERIFIED — landing page reviewed 2026-10-15; open each individual case study and its primary paper next. |
| AI-009 | [OpenAI announcement: sharing AI progress in mathematics](https://openai.com/index/sharing-ai-progress-in-mathematics/) | Official release context, description of the manuscript collection, and OpenAI's stated review/revision process. | PARTIALLY VERIFIED — official page dated October 6, 2026 was opened. It describes the release and its process; it is an organizational announcement, not independent acceptance of each mathematical claim. |
| AI-013 | [Advisory Group on Mathematics and AI (AGMAI)](https://agmai.org/) | Independent advisory group context around responsible release and community evaluation of AI-generated mathematics. | PARTIALLY VERIFIED — site says its advisory role should not be read as endorsement of the collection; community assessment is still needed. Read its statements in full before describing its role. |
| AI-014 | [AGMAI: Responsible Release of AI-Generated Mathematics](https://agmai.org/general-sep29/) | Recommendations for clear exposition, citation, version history, disclosure of model/use where feasible, formalization where feasible, and community-led understanding. | PARTIALLY VERIFIED — guidance dated September 29, 2026 opened. These are recommendations, not a substitute for reviewing individual claims or the current source corpus. |
| AI-010 | [Heyprof: 32 interactive AI-math visualizations](https://www.heyprof.app/en/demo/fach/ki-forschungsmathematik) | Interactive visual explorations associated with selected OpenAI math families. Helpful precedent for a visual layer. | PARTIALLY VERIFIED — page reviewed; it presents selected examples, not a complete interface for all math manuscripts. Inspect each demo and its assumptions before citing an individual result. |
| AI-011 | [Independent OpenAI math verification project](https://m0-ar.github.io/openai-math-verify-2026/preview.html) and [source repository](https://github.com/m0-ar/openai-math-verify-2026) | Independent project with browser-based demonstrations, experiments, caveats, and machine-checking discussions. | PARTIALLY VERIFIED — preview reviewed; it explicitly distinguishes narrower checked claims from unsolved broader claims. It is not an official OpenAI source and its assertions require individual review. |
| AI-012 | [AlgeBench](https://github.com/ibenian/algebench) | Example of interactive 3D mathematics connected with an AI narrator and stepwise explanations. | CANDIDATE — useful product/implementation reference; review source, status, licence, performance, and scope before drawing conclusions. |

## B. Interactive simulations, diagrams, and visual explanations

| ID | Resource | Why it matters | Status and next check |
|---|---|---|---|
| VIS-001 | [NASA Scientific Visualization Studio](https://svs.gsfc.nasa.gov/) | NASA-produced, data-backed visualizations, animations, images, graphics, and interactive content in Earth and space science. Supports search by topic, type, keyword, person, or dataset. | PARTIALLY VERIFIED — mission and browse paths reviewed; inspect individual asset credits/rights, data, and methodology before reuse. |
| VIS-002 | [NASA games and interactives](https://www.nasa.gov/interactives/) | Interactive experiences for space, climate, astronomy, missions, and public science learning. | PARTIALLY VERIFIED — page reviewed; individual projects vary and need separate technical and rights checks. |
| VIS-003 | [PhET Interactive Simulations](https://phet.colorado.edu/) | Research-informed interactive learning simulations in science and mathematics. | PARTIALLY VERIFIED — current licensing page says regular HTML simulation files are CC BY-NC 4.0, while older resources and code may have different terms. Check the exact simulation/licence; do not assume all assets share one licence. |
| VIS-004 | [PhET licensing information](https://phet.colorado.edu/nb/licensing) | Official current licensing note and attribution rules. | PARTIALLY VERIFIED — reviewed 2026-10-15. Commercial use has restrictions and may require a separate licence. |
| VIS-005 | [Wolfram Demonstrations Project](https://demonstrations.wolfram.com/) | Large set of interactive computational notebooks across math, physics, life sciences, engineering, economics, and more; site advertises 13,000+ demos. | PARTIALLY VERIFIED — catalogue reviewed; do not assume open reuse. Check each demonstration's licence, author notebook, prerequisites, and embed terms. |
| VIS-006 | [Explorable Explanations site](https://explorabl.es/) and [site repository](https://github.com/explorableexplanations/explorableexplanations.github.io) | Patterns and examples of interactive explanatory writing. | CANDIDATE — the site repository notes CC0 for that website, not blanket permission for every linked third-party explainer. Review individual authors and assets. |
| VIS-007 | [Awesome Explorables list](https://github.com/blob42/awesome-explorables) | Curated index of explorable explanations across math, science, algorithms, and systems. Useful for discovery and competitive research. | PARTIALLY VERIFIED — repository listing discovered; audit links, activity, and source rights in batches. |
| VIS-008 | [GeoGebra](https://www.geogebra.org/) | Interactive geometry, graphing, algebra, calculus, and classroom mathematics. | CANDIDATE — investigate public materials, embed options, attribution, and per-resource reuse terms. |
| VIS-009 | [Desmos](https://www.desmos.com/) | Interactive graphing and math activities that may inform learner interaction design. | CANDIDATE — check current terms, embedding/API options, and what content may be reused. |
| VIS-010 | [3Blue1Brown](https://www.3blue1brown.com/) | Visual-first mathematics explanations; useful for pedagogical research, not a free asset corpus. | CANDIDATE — study explanation techniques and link to original videos; do not reproduce full scripts or videos. |
| VIS-011 | [Manim Community](https://www.manim.community/) and [GitHub](https://github.com/ManimCommunity/manim) | Programmatic mathematical animation framework for creating original explanatory animations. | CANDIDATE — review installation needs, licence, render workflow, and suitability to available development environment. |
| VIS-012 | [Three.js](https://threejs.org/) | Web-based 3D rendering for original spatial models. | CANDIDATE — evaluate only if the first learning objective genuinely benefits from 3D. |
| VIS-013 | [Observable](https://observablehq.com/) and [Observable Plot](https://observablehq.com/plot/) | Interactive data exploration and visualization patterns. | CANDIDATE — review toolchain, sharing/deployment, accessibility, cost, and licences. |
| VIS-014 | [Plotly.js](https://plotly.com/javascript/) | Interactive charts suitable for scientific and numeric data. | CANDIDATE — verify licence and whether chart type meets the first concept needs. |
| VIS-015 | [p5.js](https://p5js.org/) | Creative coding for interactive visuals and simple simulations. | CANDIDATE — consider for light, self-contained interactions if it reduces complexity. |

## C. Biological, molecular, and chemical research resources

| ID | Resource | Why it matters | Status and next check |
|---|---|---|---|
| BIO-001 | [AlphaFold Protein Structure Database](https://alphafold.ebi.ac.uk/) | Search and explore predicted protein structures in 3D. The current site describes open access to over 200 million predictions. | PARTIALLY VERIFIED — page and FAQ reviewed. Site states data is CC BY 4.0, but cite relevant papers and check third-party dataset rights where present. A predicted structure is not the same as a laboratory-confirmed structure or proof of function. |
| BIO-002 | [AlphaFold FAQ](https://alphafold.ebi.ac.uk/faq) | Explains prediction scope, interpretation, licensing, and attribution. | PARTIALLY VERIFIED — review context for each use and identify prediction confidence/limitations. |
| BIO-003 | [RCSB Protein Data Bank](https://www.rcsb.org/) and [data APIs](https://data.rcsb.org/) | Structure data, experimental records, and molecular visualization. Useful counterpoint to purely predicted structures. | CANDIDATE — review data formats, provenance, methods, access patterns, and per-record citations. |
| BIO-004 | [UniProt](https://www.uniprot.org/) | Protein sequence and functional annotation resource. | CANDIDATE — review API, licence, and source database distinctions. |
| BIO-005 | [PubChem](https://pubchem.ncbi.nlm.nih.gov/) and [PUG REST API](https://pubchem.ncbi.nlm.nih.gov/docs/pug-rest) | Chemical substance, compound, structure, and bioactivity information with a documented API. | PARTIALLY VERIFIED — API documentation discovered; test useful endpoints and verify records/caveats before modelling. |
| BIO-006 | [Europe PMC](https://europepmc.org/) and [REST API](https://europepmc.org/RestfulWebService) | Biomedical literature search and access to selected full-text/open-access records. | CANDIDATE — distinguish metadata, abstract, and full text rights. |
| BIO-007 | [PubMed](https://pubmed.ncbi.nlm.nih.gov/) and [NCBI APIs](https://www.ncbi.nlm.nih.gov/home/develop/api/) | Biomedical citation/abstract discovery and NCBI data services. | CANDIDATE — review API policy and separate citation metadata from full article rights. |
| BIO-008 | [PubMed Central Open Access Subset](https://pmc.ncbi.nlm.nih.gov/tools/openftlist/) | Identifies articles made available in open-access subsets with item-specific reuse terms. | CANDIDATE — verify licence for every downloaded article and supplementary figure. |

## D. Scholarly literature and discovery metadata

| ID | Resource | Why it matters | Status and next check |
|---|---|---|---|
| LIT-001 | [arXiv](https://arxiv.org/) and [API documentation](https://info.arxiv.org/help/api/index.html) | Preprints in mathematics, physics, computer science, quantitative biology, statistics, and related fields. | CANDIDATE — review API usage, source versions, identifiers, and article-level licence/reuse. A preprint is not necessarily peer reviewed. |
| LIT-002 | [Crossref REST API](https://www.crossref.org/documentation/retrieve-metadata/rest-api/) | DOI-linked scholarly metadata, publication records, funders, licence fields, and post-publication updates. | PARTIALLY VERIFIED — documentation reviewed; metadata is freely accessible, but abstracts and full text may remain copyrighted. |
| LIT-003 | [OpenAlex](https://openalex.org/) and [API docs](https://docs.openalex.org/) | Open scholarly graph of works, authors, institutions, venues, and topics. | CANDIDATE — review current API policy, coverage, attribution, rate limits, and caching. |
| LIT-004 | [Semantic Scholar](https://www.semanticscholar.org/) and [API docs](https://api.semanticscholar.org/api-docs/) | Research discovery, paper metadata, citations, and relationships. | CANDIDATE — check API key/rate-limit policy and field rights. |
| LIT-005 | [DataCite](https://datacite.org/) and [REST API](https://support.datacite.org/docs/api) | Metadata for research datasets and other scholarly outputs. | CANDIDATE — explore data and software records, DOI links, and reuse metadata. |
| LIT-006 | [Zenodo](https://zenodo.org/) | Research data, code, papers, and other records with versioning and persistent identifiers. | CANDIDATE — each deposit has its own licence and quality; do not equate public deposit with proof of correctness. |
| LIT-007 | [Figshare](https://figshare.com/) | Research outputs, figures, datasets, and supplementary files. | CANDIDATE — inspect the exact record licence and API terms. |
| LIT-008 | [NASA ADS](https://ui.adsabs.harvard.edu/) | Literature search for astronomy and physics publications. | CANDIDATE — review API access and metadata/source records. |
| LIT-009 | [INSPIRE-HEP](https://inspirehep.net/) | High-energy physics papers, authors, citations, and related metadata. | CANDIDATE — review its API and record provenance. |

## E. Earth, space, climate, and geoscience data

| ID | Resource | Why it matters | Status and next check |
|---|---|---|---|
| EARTH-001 | [NASA Earthdata](https://www.earthdata.nasa.gov/) | Earth observation data, satellite products, tools, and documentation. | CANDIDATE — check account/access requirements per dataset, product metadata, units, temporal/spatial coverage, and reuse terms. |
| EARTH-002 | [NASA climate resources](https://science.nasa.gov/climate-change/) | Research explanations, datasets, and evidence on climate change. | CANDIDATE — follow claims to the underlying studies/data and capture dates and uncertainty. |
| EARTH-003 | [NOAA](https://www.noaa.gov/) and [Climate Data Online](https://www.ncei.noaa.gov/cdo-web/webservices/v2) | Weather, climate, ocean, and environmental observations. | CANDIDATE — verify current API access and individual dataset units, update cadence, and limitations. |
| EARTH-004 | [USGS](https://www.usgs.gov/) and [data services](https://www.usgs.gov/products/data-and-tools) | Geology, water, hazards, ecosystems, maps, and Earth science data. | CANDIDATE — choose a specific documented source and check record-level terms. |
| EARTH-005 | [Copernicus Data Space Ecosystem](https://dataspace.copernicus.eu/) | Earth-observation data from European programmes. | CANDIDATE — review access, download/processing needs, and product licences. |
| EARTH-006 | [NASA Scientific Visualization Studio](https://svs.gsfc.nasa.gov/) | Connects NASA data and science to visualizations that can guide VSE's presentation model. | PARTIALLY VERIFIED — see VIS-001; each media item needs an asset-level citation and rights review. |

## F. Global indicators, health, and public datasets

| ID | Resource | Why it matters | Status and next check |
|---|---|---|---|
| DATA-001 | [Our World in Data](https://ourworldindata.org/) and [About/licensing notes](https://ourworldindata.org/about) | Research explanations, data and more than 14,000 interactive charts across global topics. | PARTIALLY VERIFIED — about page reviewed. Articles/charts are CC BY unless stated; much underlying data comes from third parties and retains provider-specific terms. |
| DATA-002 | [World Bank Data](https://data.worldbank.org/) and [API](https://datahelpdesk.worldbank.org/knowledgebase/articles/889392-about-the-indicators-api-documentation) | International development, population, economics, energy, health, and other country indicators. | CANDIDATE — inspect indicator definitions, source agencies, revisions, country comparability, and terms. |
| DATA-003 | [WHO data](https://data.who.int/) | Global health data and indicator definitions. | CANDIDATE — high-stakes health claims require special care; validate definitions, updates, uncertainty, and source publications. |
| DATA-004 | [UNESCO Institute for Statistics](https://uis.unesco.org/) | Education, science, culture, and related international statistics. | CANDIDATE — record comparability, missing data, and measurement methodology. |
| DATA-005 | [Our World in Data Grapher source code](https://github.com/owid/owid-grapher) | Reference for interactive chart architecture and source metadata. | CANDIDATE — the project is not automatically a reusable drop-in service; inspect its code licence and third-party assets. |
| DATA-006 | [Google Dataset Search](https://datasetsearch.research.google.com/) | Discovery path for additional datasets. | CANDIDATE — use for discovery only; trace each candidate to its original provider before relying on it. |

## G. Scientific disciplines that need targeted source maps

These are source-finding queues, not yet an endorsed bibliography.

- **Physics:** CERN Open Data (https://opendata.cern.ch/), Particle Data Group (https://pdg.lbl.gov/), relevant journal/paper pages, and INSPIRE-HEP.
- **Astronomy:** NASA ADS, NASA mission data, NASA SVS, ESA science pages (https://www.esa.int/Science_Exploration), and mission-specific archives.
- **Mathematics:** OpenAI math, arXiv, institutional preprints, proof-assistant libraries, Lean community resources (https://leanprover-community.github.io/), and educational tools such as GeoGebra.
- **Computer science and AI:** original papers/repos, arXiv, Papers with Code (https://paperswithcode.com/), official documentation, and benchmark/data statements.
- **Biology:** AlphaFold, RCSB PDB, UniProt, NCBI, Europe PMC, organism-specific databases, and original experimental papers.
- **Chemistry/materials:** PubChem, PubMed, RCSB PDB where appropriate, Materials Project (https://materialsproject.org/), and the originating journal/data deposit.
- **Earth/climate:** NASA Earthdata, NASA SVS, NOAA, USGS, Copernicus, and source reports behind indicators.
- **Engineering/technology:** standards organizations, documented engineering datasets, institutional labs, and original research with checked safety limits.
- **Economics/social science:** Our World in Data, World Bank, OECD Data (https://data.oecd.org/), UN data, official national statistics, and original methods papers.

## H. Additional source discovery

- [Open educational resources search via OER Commons](https://www.oercommons.org/) — CANDIDATE; investigate item-level licences.
- [Khan Academy](https://www.khanacademy.org/) — CANDIDATE for pedagogy and external learning links; not blanket permission to copy lessons.
- [CK-12](https://www.ck12.org/) — CANDIDATE; review terms and source attributions.
- [PLOS](https://plos.org/) — CANDIDATE; many articles are open access but check each article licence.
- [DOAJ](https://doaj.org/) — CANDIDATE for journal discovery, not a guarantee that every article is reusable.
- [Internet Archive](https://archive.org/) — CANDIDATE only for discovery of public materials; verify the rights status of each item.

## Source-selection checklist

Before a source becomes primary support for a VSE topic, answer:
1. Who produced it and what expertise/role do they have?
2. Is it primary research, a review, official data, commentary, or a learning resource?
3. What precise claim or model does it support?
4. Can the source be accessed and cited reliably?
5. What date/version is being used?
6. Does it state assumptions, uncertainty, methodology, and limitations?
7. What are the reuse rights for data, text, images, embedded demos, and code separately?
8. Is independent corroboration available and appropriate?
9. Does the source change frequently, and what should trigger another review?
10. What will VSE link to versus recreate in an original visualization?

## Next catalogue maintenance action

Turn promising source records into a structured table with date checked, exact items reviewed, source owner, rights state, API/embed method, supported topics, and next task. Work in bounded subject batches. Do not call this catalogue exhaustive.


## First-prototype source addendum — orbital motion (checked 2026-10-16)

| ID | Resource | Specific contribution checked | Status and remaining work |
|---|---|---|---|
| ORB-001 | [NASA Science — Chapter 3: Gravity & Mechanics](https://science.nasa.gov/learn/basics-of-space-flight/chapter3-4/) | The “How Orbits Work” and “Key to Space Flight” sections explain the Newton cannonball analogy, continuous falling around Earth, and changes to orbit from energy changes. The page explicitly notes the simplifying assumptions behind the diagrams. | PARTIALLY CHECKED — page opened and relevant sections read. Strong primary institutional learning source for the intended conceptual explanation; not an independent check of VSE code or equations. |
| ORB-002 | [NASA — What Is an Orbit? (Grades 5–8)](https://www.nasa.gov/solar-system/what-is-an-orbit-grades-5-8/) | Beginner-level description of straight-line motion without gravity, inward gravitational pull, sideways motion, and the effects of too little or too much speed. | PARTIALLY CHECKED — page opened. Use for beginner explanation with its educational scope; check a technical reference before relying on quantitative statements beyond this prototype. |
| ORB-003 | [NASA JPL Education — Modeling the Orbits of Planets](https://www.jpl.nasa.gov/edu/resources/lesson-plan/modeling-the-orbits-of-planets/) | Learning activity describing gravity, mass, and planetary motion for grades 6–12. | PARTIALLY CHECKED — lesson page opened. Reference for learning objectives; VSE does not reuse its classroom activity or media. |
| ORB-004 | [PhET — Licensing Information](https://phet.colorado.edu/en/licensing) | Official statement that regular HTML simulation files use CC BY-NC 4.0, with additional commercial-use, attribution, and brand guidance. | PARTIALLY CHECKED — page reviewed as a rights constraint only. VSE's initial orbital diagram is original; PhET simulation assets/code are not embedded or copied. |
| ORB-005 | [NASA GSFC archive — Kepler's Third Law / orbital velocity](https://pwg.gsfc.nasa.gov/stargaze/Skepl3rd.htm) | Derives circular-orbit speed and escape velocity and relates the escape threshold to sqrt(2) times circular speed at the same radius. | PARTIALLY CHECKED — relevant HTML sections opened 2026-10-16. The page says it is archival and no longer maintained (last updated 2008). Its Earth-radius values differ in adjacent text (6,317,000 vs 6,371,000 m), so VSE uses only the symbolic relationship and does not reuse the numerical example. Not a substitute for current technical review. |

These sources support the concept-level explanation but do not certify the numerical simulation, validate the implementation, or represent independent expert review. See [the first prototype research packet](FIRST_PROTOTYPE_ORBIT.md) for the claim map and caveats.
