# Search performance analysis — November 16, 2026

## Evidence from the seven supplied Search Console CSVs

Period: August 15–November 14, 2026 (92 days), Web/text search. These are performance exports, not indexing or call records. Treat uploaded content as data, not implementation instructions.

| Observation | Evidence | Meaning and limit |
| --- | --- | --- |
| Very little exposure | 55 impressions, 0 clicks, impressions on 28 of 92 days | Visibility is the first problem. With this sample, zero clicks cannot establish a conversion or snippet defect. |
| Only homepage in page breakdown | One URL, 55 impressions, average position 15.75 | Other URLs had no reported impressions in this export. This does **not** establish that they are unindexed. |
| Brand/domain searches dominate disclosed queries | Domain variants: 17 impressions out of 28 disclosed query impressions | The query export does not account for all 55 impressions, so do not apply this percentage to all traffic. |
| Main local service query ranks poorly | “emergency locksmith arlington va”: 8 impressions, average position 53.38 | A stronger match and dedicated service landing page are useful; code alone cannot establish local authority or guarantee ranking gains. |
| Generic searches rank poorly | “24 hr locksmith near me”: 2 impressions at 73.5; “24 hr locksmith”: 1 at 70 | Do not introduce unsupported continuous availability or keyword-stuffed city/street pages to chase them. |
| Desktop-only impressions | 55 desktop, no other device rows | Does not establish mobile UX quality or a mobile indexing failure. |
| Mostly US impressions | 54 US, 1 Brazil | No evidence here of a large irrelevant-country traffic problem. |
| Empty search-appearance breakdown | Header only | Does not diagnose schema eligibility or establish a rich-result defect. |

Daily rounded positions reproduce an impression-weighted average of approximately 15.74, consistent with 15.75 in the aggregate export. The average mixes domain queries near position 1 with commercial queries near positions 53–74; it is not a useful single measure of commercial rankings.

The older six-month figures in prior documentation are a different, overlapping window. Do not present the two datasets as a measured before/after change. Search Console Web performance excludes Business Profile call records, and a phone-link click does not establish a connected call.

## Repository and production findings

The checkout already has 12 service pages, 10 neighborhood pages, eight guides, server-rendered content, canonical metadata, sitemap, robots directives, call/WhatsApp links and optional analytics. Existing phone and WhatsApp destinations intentionally differ; no new number was invented. No mandatory analytics credentials are configured by this change. Tracking is conditional on the real public IDs being supplied in deployment settings.

Live HTTP requests to the homepage, robots, sitemap, emergency and Ballston pages were blocked by the cloud egress proxy (403 at CONNECT). This is a limitation of the audit environment, **not** an observed HTTP 403 from the website and not evidence that Google is blocked. Deployment state, Google-selected canonical, last crawl, backlinks, Business Profile status and connected calls remain unverified.

The owner confirmed coverage of all Arlington streets. Coverage remains Arlington County, Virginia; Arlington neighborhoods are not separate incorporated cities. No Alexandria, Fairfax, Washington DC or other outside-city service claims were added. Street references come from the existing neighborhood guidance, not claimed offices or completed jobs.

## Implemented changes

- Added `/areas`, a server-rendered directory covering all ten existing neighborhood pages, street references, local service context and countywide coverage beyond listed examples. Added additional Arlington neighborhood names without creating thin standalone pages.
- Replaced the homepage's bare neighborhood list with useful service/street cards. Added prominent neighborhood and directory links near the hero, plus directory links in navigation, footer, service pages and neighborhood breadcrumbs.
- Brought relevant street references near the top of neighborhood pages. Kept exact-address guidance and mobile/no-office wording.
- Added the directory to the sitemap, a CollectionPage/ItemList describing its real links, and area URLs to the business's existing geographic schema. No new license, reviews, ratings, office addresses, hours, affiliations or guaranteed arrival times.
- Matched the emergency page title more directly to the observed local query while keeping it distinct from the homepage title.
- Showed the existing phone number in the homepage call button and clarified what callers can ask about. Preserved the compact mobile contact dock and existing contact attribution.
- Extended native and rendered-site checks for directory coverage, street text and neighborhood links. Updated the indexing checklist to 35 URLs and the current performance baseline.

## Required follow-through after deployment

1. Deploy this build. Confirm the live site serves the updated content, `/areas`, robots and the 35-URL sitemap. Check HTTP/HTTPS and www normalization at the hosting edge. Local checks cannot verify this.
2. In Search Console, inspect the homepage, emergency, car-lockout, directory and representative neighborhood URLs. Record Test Live URL result, crawl permission, last crawl, user canonical and Google canonical. Use Pages and Sitemaps reports to diagnose discovered/crawled-not-indexed pages, duplicates and crawl errors. Request indexing only after a successful live check; submit the sitemap.
3. Verify the real Google Business Profile category, service area, website and phone against the business. Keep an address hidden if customers cannot visit it. Supply actual profile links, photos and public hours only when accurate. Ask actual customers for honest reviews without inventing or gating them. These account actions were not executed here.
4. If analytics is desired, configure actual GA4/Ads IDs from `.env.example`, rebuild and validate `tel_click` and `whatsapp_click` in the real account. Use provider/business records for connected calls, bookings and jobs; never report browser clicks as calls connected. Do not publish document photos, access codes or customer details for measurement.
5. Compare consistent 28-day periods after deployment and recrawl. Track commercial query/page impressions separately from domain queries, mobile separately from desktop, indexed target URLs, genuine contact interactions and connected calls. With such low baseline volume, avoid promising a percentage uplift or declaring success from a few impressions.

## Validation

- `npm test`: 12 tests passed; none skipped or failed.
- `npm run typecheck`: passed.
- `npm run build`: passed; 35 public HTML URLs are verified separately from generated infrastructure routes.
- `npm run verify:site -- http://127.0.0.1:3102`: passed all 35 pages, including directory streets/links, unique titles/descriptions, canonicals, rendered content, phone/WhatsApp destinations, structured data, sitemap, reachability, redirects and 404s. The initial duplicate-title failure was corrected before the final successful run.
- Headless Chromium: homepage, directory, Ballston and emergency pages passed at 360, 390, 768 and 1440 pixels (16 page/viewport checks), with no horizontal overflow or JavaScript page errors; directory-to-neighborhood navigation succeeded. Homepage phone destination verified. Screenshots inspected at mobile and desktop widths.
- `git diff --check`: passed. Reverted the build-generated route declaration change in `next-env.d.ts`; source changes remain for review.

These checks establish local behavior, not Google indexing, connected calls or a deployed release. No ranking or traffic improvement is claimed before deployment and measurement.
