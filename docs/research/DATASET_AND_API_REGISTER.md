# Dataset and API Evidence Register

**Last checked:** 2026-10-16 UTC  
**Purpose:** Track concrete data and metadata access candidates before any API, ingestion pipeline or database is chosen. This register is selective, not exhaustive. A candidate is not a product decision, and a documentation-page review is not proof that a sample query, licence or scientific claim has been validated.

## Status meaning

- **PARTIALLY CHECKED — service docs:** official landing or API documentation was inspected, but no representative response/file and all relevant rights/access terms have not been examined.
- **PARTIALLY CHECKED — sample:** one sample request/file was inspected and recorded, but broader coverage and edge cases remain open.
- **CANDIDATE:** identified for later review but not inspected enough to support a product claim.
- **BLOCKED:** a recorded issue prevents progress.

Do not mark a data source VERIFIED simply because it is public, downloadable or described as open data. Review access method, data product version, scientific meaning, quality flags, attribution, reuse and redistribution conditions per item.

## Current comparison table

| ID | Source / service | What it can provide | Status | Most important next check |
|---|---|---|---|---|
| ASTRO-SPX-001 | [NASA/IPAC IRSA — SPHEREx Quick Release](https://irsa.ipac.caltech.edu/data/SPHEREx/docs/overview_qr.html) | Publicly archived SPHEREx spectral-image products and documentation; QR3 release information and several access paths | PARTIALLY CHECKED — service docs | Inspect one small QR3 cutout/file and metadata; record file format, query request, quality/calibration semantics, size, browser suitability and item-specific use/attribution terms |
| ASTRO-SPX-002 | [IRSA SPHEREx archive and tools](https://irsa.ipac.caltech.edu/Missions/spherex.html) | Archive entry point, Data Explorer, source discovery, mosaics, cutouts, spectrophotometry and cloud access | PARTIALLY CHECKED — service docs | Map existing IRSA functionality first; identify a real learner problem VSE would solve beyond duplicating archive tools |
| EARTH-NASA-CMR-001 | [NASA Earthdata CMR Search API](https://cmr.earthdata.nasa.gov/search/site/docs/search/api.html) and [CMR overview](https://www.earthdata.nasa.gov/about/esdis/eosdis/cmr) | Catalogue search for Earth-science collections/granules and metadata; API and STAC routes | PARTIALLY CHECKED — service docs | Query one public collection and a small granule result; verify which links are openly downloadable versus Earthdata Login protected and inspect its licence/version/units |
| ENV-USGS-WATER-001 | [USGS Water Data APIs](https://api.waterdata.usgs.gov/) and [API documentation](https://api.waterdata.usgs.gov/docs/) | Real-time continuous values, daily summaries, monitoring locations, time-series metadata, water quality and other water-related services | PARTIALLY CHECKED — service docs | Inspect one endpoint and monitoring site, response schema, query limits and geography. These services are USGS water monitoring services; do not treat them as Ghana-wide observations |
| ENV-NOAA-NCEI-001 | [NOAA NCEI Data Service API documentation](https://www.ncei.noaa.gov/support/access-data-service-api-user-documentation) | REST-style access/subsetting for supported products, with output formats depending on the chosen dataset/service | PARTIALLY CHECKED — service docs | Choose a relevant product before further assessment; inspect current authentication, quotas, data coverage, time range, units, data product status and migration/access notices |
| EO-COPERNICUS-CDSE-001 | [Copernicus Data Space API documentation](https://documentation.dataspace.copernicus.eu/APIs.html) and [ecosystem overview](https://documentation.dataspace.copernicus.eu/Ecosystem.html) | Catalogue and data access APIs for Copernicus products, including catalogue interfaces and Earth-observation data workflows | PARTIALLY CHECKED — service docs | Identify the actual collection, service and endpoints; confirm account requirements, per-service capacity/quotas, query filters, file size, processing needs and item-level licence/attribution |
| GLOBAL-WB-INDICATORS-001 | [World Bank Indicators API documentation](https://datahelpdesk.worldbank.org/knowledgebase/articles/889392) | Time-series indicator metadata and country/year observations across many World Bank data collections | PARTIALLY CHECKED — service docs | Choose a concrete question and indicators; inspect definitions, unit fields, country coverage, years, missing values, source notes and the relevant dataset terms |
| SCHOLAR-CROSSREF-API-001 | [Crossref REST API access and authentication](https://www.crossref.org/documentation/retrieve-metadata/rest-api/access-and-authentication/) | DOI-linked scholarly metadata and discovery, not scientific verification by itself | PARTIALLY CHECKED — service docs | Confirm endpoint/query needs and respect current rate-limit headers; trace selected records to original sources and check correction/retraction/publication status |
| SCHOLAR-OPENALEX-API-001 | [OpenAlex API authentication and rate limits](https://help.openalex.org/api/authentication/) | Scholarly graph metadata, discovery, relationships and bibliographic search | PARTIALLY CHECKED — service docs | Check current key policy, quota, query limits and metadata field reliability; trace claims to primary work. API metadata is discovery evidence, not proof |
| ML-HF-DATASETS-001 | [Hugging Face dataset cards](https://huggingface.co/docs/hub/en/datasets-cards) | Metadata and documentation patterns for datasets, including license, language, size, task and usage caveats when supplied by a dataset author | PARTIALLY CHECKED — documentation | For any chosen dataset, inspect the card, files, upstream origin, split design, license, personal/sensitive data, label quality, known bias, evaluation contamination risk, size and compute need. A card is not automatic assurance that its contents or licence statement is correct |

## Details and interpretation

### ASTRO-SPX-001 / ASTRO-SPX-002 — SPHEREx

IRSA's current Quick Release overview states that SPHEREx Quick Release 3 data release began in September 2026. The overview lists QR2 and QR3 spectral images spanning 0.75–5.0 microns, and links to the SPHEREx Data Explorer, Astroquery, a Simple Image Access (SIA) program interface, browsable directories and cloud data access. The same page says QR1 was retired in February 2026 and no longer available from IRSA, and that QR2 headers were updated in April 2026 to correct a PSF extension header issue.

The QR3 data DOI specified by IRSA is 10.26131/IRSA662. If VSE uses these data, preserve the exact release/product ID and required acknowledgement/citation. Do not treat one DOI as blanket reuse permission for every related image, tool, paper or external media item.

IRSA already documents a Data Explorer plus source discovery, mosaic, cutout and spectrophotometry tools. A VSE proposal must explain what it adds for learning: for example, a guided comparison with clear filter/wavelength context, what the representation does and does not show, and evidence-aware explanations—not merely a second archive browser.

Sources:
- QR release/product access: https://irsa.ipac.caltech.edu/data/SPHEREx/docs/overview_qr.html
- Archive tools: https://irsa.ipac.caltech.edu/Missions/spherex.html
- NASA context and data-release explanation: https://science.nasa.gov/open-science/spherex-universe-map/

**Not yet checked:** representative FITS data/header values; exact contents and units of selected product extensions; PSF/calibration semantics for the chosen release; query parameters and response behavior; file-size/latency limits; direct browser/CORS suitability; item-specific reuse rights; and the proposed visualization's scientific correctness. Do not mark SPHEREx data integration ready.

### EARTH-NASA-CMR-001 — NASA Earth science discovery

NASA's Common Metadata Repository exposes search routes for Earth-science metadata, including JSON and STAC-compatible interfaces. The documentation discusses CORS and bearer-token headers for authorized access. Catalogue search, data-file download, and access to protected collections are different questions: check the particular collection/granule rather than assuming either everything requires a login or nothing does.

Sources:
- API: https://cmr.earthdata.nasa.gov/search/site/docs/search/api.html
- STAC routes: https://cmr.earthdata.nasa.gov/search/site/docs/search/stac
- CMR overview: https://www.earthdata.nasa.gov/about/esdis/eosdis/cmr

**Not yet checked:** an exact environmental collection, its fields/units, a small real response, authentication behavior for its actual data files, collection-specific terms, geographic coverage and update frequency.

### ENV-USGS-WATER-001 — USGS

The official portal describes APIs for continuous measurements such as streamflow and gage height, daily summaries, station metadata and time-series metadata, plus water-quality and flood-related services. API keys may increase rate limits for supported endpoints, but limits are service-specific.

Sources:
- Portal: https://api.waterdata.usgs.gov/
- Documentation: https://api.waterdata.usgs.gov/docs/
- API-key behavior: https://api.waterdata.usgs.gov/docs/ogcapi/keys/

This is a strong example of measurable environmental data, but it is not itself a global or Ghana-local measurement network. Use it only if a US-focused comparison or a clearly scoped example fits the learner question. Research relevant Ghanaian or global sources separately before claiming local coverage.

### ENV-NOAA-NCEI-001 — NOAA NCEI

NCEI's Access Data Service is documented as a REST API that can subset supported datasets, with output formats varying by dataset. The documentation currently carries a notice about migration that may cause temporary access delays.

Source: https://www.ncei.noaa.gov/support/access-data-service-api-user-documentation

The next step is to choose a specific dataset and confirm its current interface, access restrictions, station/location coverage, units, update behavior, attribution and rights. A broad API landing page is not enough to justify an integration.

### EO-COPERNICUS-CDSE-001 — Copernicus

The current documentation lists catalog APIs for Earth-observation products and describes an ecosystem with different open and registered data/service paths. Do not assume that every processing capability, quota, endpoint or product follows the same registration and cost rules.

Sources:
- APIs: https://documentation.dataspace.copernicus.eu/APIs.html
- Access ecosystem: https://documentation.dataspace.copernicus.eu/Ecosystem.html

Inspect one collection and exact service before comparing feasibility with SPHEREx or NASA Earthdata.

### GLOBAL-WB-INDICATORS-001 — World Bank

The current helpdesk documentation describes Indicators API v2, says API keys are not required for standard API access, and reports nearly 16,000 time-series indicators across 45+ databases. This may be a relatively low-complexity starting point for time-series questions and Ghana/global country comparisons, but each indicator still needs interpretation.

Source: https://datahelpdesk.worldbank.org/knowledgebase/articles/889392

Before charting an indicator, record its official code/name, unit, definition/source note, source organization, geographic/country coverage, time periods, missing observations and transformations. Do not imply a causal explanation from a country-level association alone.

### SCHOLAR-CROSSREF-API-001 and SCHOLAR-OPENALEX-API-001 — literature discovery

Crossref's documentation distinguishes public, polite and paid API access options and explains rate-limit/concurrency headers. OpenAlex's current authentication page describes free use, API-key behavior and usage budgets. These services can help discover identifiers, related publications or updates, but they do not replace reading a primary paper, locating its actual data/proof, or checking corrections and retractions.

Sources:
- Crossref: https://www.crossref.org/documentation/retrieve-metadata/rest-api/access-and-authentication/
- OpenAlex: https://help.openalex.org/api/authentication/

Keep requests bounded, read usage headers, back off on rate-limit responses and store only the metadata necessary for the task. Recheck limits when an integration is actually proposed rather than treating today's values as permanent.

### ML-HF-DATASETS-001 — dataset documentation

Hugging Face documents dataset cards as a place to describe dataset contents, metadata, license, language, task and usage caveats such as bias. This is a useful documentation convention if VSE later includes a dataset/benchmark route, but the card is author-supplied metadata; validate the underlying files and terms independently.

Source: https://huggingface.co/docs/hub/en/datasets-cards

No specific training dataset, benchmark, model, metric, evaluation split or leaderboard has been chosen. Do not download or train on a dataset until the task, reuse terms, evaluation design, leakage risks and compute budget are documented.

## Cross-source questions that remain open

- Which learner question and product route should be first?
- Which exact source or data product best supports that question?
- Can a small representative sample be fetched and inspected without unreasonable storage, cost, account requirements or bandwidth?
- Which fields and transformations are needed, and how will their meaning be tested?
- What is measured, derived, simulated, predicted or inferred?
- What source licenses/terms allow display, transformation, caching or redistribution of the chosen material?
- What source-data path works on ordinary mobile connectivity?
- For Ghana-facing questions, is the dataset actually representative of Ghana rather than merely hosted on a global platform?
- What will VSE teach or explain that the upstream portal or existing tool does not already do?
- How will data revisions, calibration updates, corrections and schema changes be detected?

## Update rule

When an exact sample or product is checked, update its row with date/time, query or file identifier, relevant schema/headers, exact statements verified, observed response, rights checked, limitations, and the next task. Update RESEARCH_COVERAGE.md and RESEARCH_LOG.md in the same research pass. Never mark an entire source family verified from one example.
