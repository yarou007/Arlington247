# Implementation report — phases 2–7

Implemented November 14, 2026 in the existing Next.js/React/Tailwind application. All 12 existing service URLs and 10 area URLs are preserved. There are 34 public HTML pages after adding an advice index and eight guides. No runtime or development dependencies were added; the lockfile is unchanged.

## Change log

| Phase                   | Delivered behavior                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2 — Global components   | Shared header/footer, 52 px Call/WhatsApp contact dock, desktop floating controls with reserved content space, desktop-only copy button, accessible focus states, 16 px body copy, reduced-motion support and safe-area spacing. Centralized contact identity and contextual messages. Repaired async neighborhood parameters.                                                                                      |
| 2 — Schema and tracking | One Locksmith entity for the mobile business, Service entities per service/area, visible matching FAQPage content and valid BreadcrumbList paths. No invented rating, office address, price range or hours. Delegated phone/WhatsApp click tracking, session campaign capture, optional GA4/Ads loading and conversion destinations. Removed the previous Ahrefs tag; live Google reporting needs real account IDs. |
| 3 — Homepage            | Exact requested H1; concise mobile hero; three supported identity/contact points; prioritized service grid; Call/WhatsApp guide and photo/location checklist; five customer segments with three practical benefits each; price-factor and locksmith-verification guidance; area/advice links. Deleted the four unverified testimonials, fake map and empty social links.                                            |
| 4 — Priority services   | Emergency lockout, car lockout and commercial/storefront pages rewritten with specific preparation, access/authorization, hardware and quote guidance. Respectively 702, 704 and 749 words of dedicated copy, including intro/FAQ but excluding shared template/navigation.                                                                                                                                         |
| 5 — Other services      | Nine further pages rewritten, with 419–442 dedicated words each. Broken-key removal and extraction/repair now describe different scopes. No invented prices, service times, credentials or job histories.                                                                                                                                                                                                           |
| 6 — Neighborhoods       | All ten formerly broken routes return 200. Each has 449–469 dedicated words, local street/landmark orientation, specific entrance/parking guidance, two local questions, nearby-neighborhood links, related services and its own WhatsApp context. They describe a mobile service, not local branch offices.                                                                                                        |
| 7 — Advice and indexing | Eight substantive guides and an advice hub, with contact actions, related services, FAQs and Article schema. Registry-derived sitemap/robots/llms.txt, unique metadata, self-referencing canonicals, www 301 normalization, default trailing-slash normalization, real icon and useful 404 page. Complete URL list and KPI checklist supplied.                                                                      |

The business name supplied by the owner is retained. “24/7” is not used as a separate verified operating-hours promise. Operating hours, licence/insurance/warranty claims, sourced reviews and business-profile/map details remain omitted unless evidence is supplied. Optional profile/review links render only from valid configured HTTPS URLs. No visible placeholders were introduced.

The main content exceeds the requested minimums: the homepage is over 600 rendered words, the three priority services exceed 600 dedicated words each and all ten areas exceed 400 dedicated words each. Word counts above use paragraph/FAQ text separated by whitespace; shared calls to action, navigation, headings and sidebar boilerplate are excluded.

## Validation evidence

- `npm test`: 11 tests passed, none skipped. Tests cover campaign allowlisting/bounds, first-touch persistence, invalid/denied storage, contact destinations, contextual message encoding, route/content coverage, word minimums, related links and Google’s command-queue format.
- `npm run typecheck`: passed, including after development-mode route types were regenerated. Development HTTP smoke checks passed for the homepage, emergency service, Clarendon and a cost guide.
- `npm run build`: successful production build; 40 build entries including metadata/resources and generated routes.
- `npm run verify:site`: 34/34 public HTML pages passed. Checks cover HTTP status, rendered content, unique titles/descriptions, one H1, canonical and robots, matching OG/Twitter metadata, every call/WhatsApp destination, matching FAQ/schema, internal-link reachability, sitemap, unknown-route 404/noindex, www host 301 and trailing-slash behavior.
- Titles are 38–56 characters; descriptions are 92–142 characters. Each includes Arlington, VA and the configured call number. No old call-number variant remains in the site sources; the old digits are confined to the WhatsApp constant and generated WhatsApp URLs.
- Chromium: 102 page/width combinations passed, covering all 34 pages at 360, 390 and 430 px. No horizontal overflow; body copy at least 16 px; visible interactive targets at least 48 px; both dock buttons at least 52 px; footer content stays clear of the dock.
- Synthetic contact tests: each homepage phone/WhatsApp anchor produces exactly one local event; correct SVG-child click handling; context and attribution persist through client navigation/back; blocked storage does not break clicks; desktop copy uses the new number; desktop controls have space outside the content.
- No real phone call or WhatsApp message was sent. With no real analytics IDs configured, no Google/Ahrefs network requests were generated during contact-flow testing. Local events and queue behavior were verified; Google-account reception and Ads attribution require post-deployment account validation.

## Mobile Lighthouse

Lighthouse 13.6.0, Chromium, default mobile throttling, local production build, no configured third-party analytics IDs. Tests ran sequentially to avoid competition between benchmark browsers.

| Page sample               | Performance | Accessibility | Best practices | SEO |   LCP | CLS |    TBT |
| ------------------------- | ----------: | ------------: | -------------: | --: | ----: | --: | -----: |
| Homepage                  |          99 |           100 |            100 | 100 | 0.9 s |   0 | 110 ms |
| Emergency lockout service |         100 |           100 |            100 | 100 | 0.8 s |   0 |  50 ms |
| Clarendon area            |         100 |           100 |            100 | 100 | 0.8 s |   0 |  50 ms |
| Locksmith-cost advice     |         100 |           100 |            100 | 100 | 0.8 s |   0 |  60 ms |

The historical homepage baseline was performance 88, LCP 3.0 s, CLS 0 and TBT 290 ms. These are laboratory measurements, not field Core Web Vitals or a ranking/indexing guarantee. INP and real visitor percentiles remain to be measured after deployment. Real analytics tags and the hosting/network conditions can affect later results.

Detailed session evidence is in `/workspace/.arlington-final/`: `build.log`, `site-verification.log`, `browser-results.json`, `content-counts.json`, `lighthouse-final-*.json` and screenshots. Reusable tests and the HTTP validator are in the repository.

## Publication and account handoff

The code has been validated locally. It has not been deployed to the public domain, submitted in Search Console or checked against live Google Business Profile data. The public domain and official external reference checks were blocked by this environment’s egress proxy; that is not evidence of a public-site error.

Follow [indexing-checklist.md](indexing-checklist.md) for the full list of 34 URLs, deployment verification, request-indexing sequence and KPIs. Follow [README.md](../README.md) for developer commands and optional analytics configuration. The [phase 1 audit](phase-1-audit.md) is a historical baseline, not the current defect list.

Live analytics needs real GA4/Ads IDs and destination labels, followed by DebugView/Realtime and Ads diagnostics. Check the supplied business name/phone against the actual profile. Add hours, credentials, insurance, warranty, photographs and sourced reviews only when verified. Missing owner/account information is omitted from visible content; no fake proof or placeholder is published.
