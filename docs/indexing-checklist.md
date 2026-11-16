# Deployment, indexing and KPI checklist

These are manual post-deployment actions. Local checks do not submit a URL to Google or establish its actual indexing state.

## Publish and confirm the public version

1. Deploy the reviewed Next.js build with the intended production domain. Keep every existing service and area path. The app canonicalizes `www` with a 301 and Next.js normalizes trailing slashes; configure HTTP-to-HTTPS at the hosting edge without a redirect loop.
2. Confirm the live homepage, all 12 services, all 10 neighborhoods, advice index and all eight guides return 200 with their content in rendered HTML. Confirm unknown routes return 404 with noindex. Remove any staging-wide authentication/noindex restrictions from the intended public production deployment.
3. Check `/robots.txt` and `/sitemap.xml`. The sitemap should contain exactly the 35 HTML URLs listed below; assets, 404 pages, robots and `llms.txt` are not indexed-page entries. Last-modified values are deliberately omitted rather than invented at build time.
4. Confirm one self-referencing HTTPS canonical per page, the new call number, valid structured data and the same public business identity on the Google Business Profile. Do not add a fabricated street address for this service-area business.

## Search Console actions

1. Open the verified property for the domain and submit `https://arlington247lockrepair.com/sitemap.xml` in Sitemaps.
2. Start URL Inspection with the homepage, emergency lockout, car lockout and commercial storefront pages. Use Test Live URL, inspect rendered HTML and verify the expected H1/content, allowed crawling and canonical. Request indexing after a successful live check.
3. Inspect the ten neighborhood URLs next. Their previous 404 condition was repaired in code; verify that the deployed version and Google’s last crawl reflect the repair. Request indexing once the live result is successful.
4. Inspect remaining services and advice guides in manageable batches. Use the Pages report to distinguish indexed pages, discovered/crawled but not indexed pages, redirects, duplicates and errors. The sitemap is discovery support, not an indexing guarantee. The two legal pages are listed for completeness and need not consume priority request slots.
5. Record request dates, reported status, last crawl, user-declared canonical and Google-selected canonical. Recheck after Google recrawls; repeat a request only after a meaningful change or diagnosis. A page with no impressions is not necessarily unindexed.

## Complete URL list

### Homepage

- https://arlington247lockrepair.com

### Priority services

- https://arlington247lockrepair.com/services/emergency-locksmith-arlington-va
- https://arlington247lockrepair.com/services/car-lockout-arlington
- https://arlington247lockrepair.com/services/commercial-storefront-lockout

### Other services

- https://arlington247lockrepair.com/services/storefront-lock-repair-arlington-va
- https://arlington247lockrepair.com/services/panic-bar-repair-arlington-va
- https://arlington247lockrepair.com/services/emergency-exit-doors
- https://arlington247lockrepair.com/services/residential-locksmith-arlington
- https://arlington247lockrepair.com/services/lock-rekeying-arlington-va
- https://arlington247lockrepair.com/services/deadbolt-replacement-arlington-va
- https://arlington247lockrepair.com/services/broken-key-removal-arlington-va
- https://arlington247lockrepair.com/services/key-extraction-lock-repair
- https://arlington247lockrepair.com/services/door-hardware-replacement

### Neighborhood pages

- https://arlington247lockrepair.com/areas

- https://arlington247lockrepair.com/areas/ballston-locksmith
- https://arlington247lockrepair.com/areas/clarendon-locksmith
- https://arlington247lockrepair.com/areas/rosslyn-locksmith
- https://arlington247lockrepair.com/areas/crystal-city-locksmith
- https://arlington247lockrepair.com/areas/pentagon-city-locksmith
- https://arlington247lockrepair.com/areas/courthouse-locksmith
- https://arlington247lockrepair.com/areas/shirlington-locksmith
- https://arlington247lockrepair.com/areas/columbia-pike-locksmith
- https://arlington247lockrepair.com/areas/westover-locksmith
- https://arlington247lockrepair.com/areas/arlington-ridge-locksmith

### Advice

- https://arlington247lockrepair.com/advice
- https://arlington247lockrepair.com/advice/locked-out-of-car-arlington
- https://arlington247lockrepair.com/advice/locksmith-cost-factors-arlington
- https://arlington247lockrepair.com/advice/broken-key-in-lock
- https://arlington247lockrepair.com/advice/panic-bar-not-latching
- https://arlington247lockrepair.com/advice/apartment-condo-lockout-arlington
- https://arlington247lockrepair.com/advice/choose-trustworthy-locksmith
- https://arlington247lockrepair.com/advice/rekey-or-replace-locks
- https://arlington247lockrepair.com/advice/storefront-door-wont-lock

### Legal pages

- https://arlington247lockrepair.com/privacy-policy
- https://arlington247lockrepair.com/terms-of-service

## Measurement

| KPI                               | Source and useful breakdown                                                           | Cadence                                   |
| --------------------------------- | ------------------------------------------------------------------------------------- | ----------------------------------------- |
| Impressions, clicks and CTR       | Search Console; mobile/desktop, page and query                                        | Weekly, compare consistent 28-day periods |
| Average position                  | Target query group and landing page, not only site average                            | Weekly                                    |
| Indexed pages                     | Search Console Pages and URL Inspection; track the 35 intended HTML URLs separately   | After deployment and subsequent crawls    |
| Phone-link clicks                 | GA4 `tel_click`, by page, button location and campaign                                | Weekly after real tag activation          |
| WhatsApp-link clicks              | GA4 `whatsapp_click`, by page, button location and campaign                           | Weekly after real tag activation          |
| Calls from the business profile   | Google Business Profile performance                                                   | Monthly                                   |
| Connected calls and real messages | Business/provider records; distinguish from browser clicks                            | Review alongside click counts             |
| Mobile performance                | CrUX/Search Console Core Web Vitals when available, plus repeatable Lighthouse checks | After releases                            |

Track these query themes: emergency locksmith Arlington VA; lockout services Arlington; 24 hour locksmith Arlington; car lockout Arlington; locksmith near me Arlington; emergency door repair Arlington; storefront lock repair Arlington; panic bar repair Arlington; broken key removal Arlington; rekey Arlington. Preserve “VA”/“Virginia” in page targeting and review queries for Washington-state or Darlington confusion.

The earlier six-month baseline was 334 impressions and 2 clicks. The newer export for August 15–November 14, 2026 contains 55 impressions, 0 clicks and 0% CTR; only the homepage appears in the performance page breakdown. These periods overlap and differ in length, so they are not a controlled before/after comparison. See `docs/search-performance-analysis.md` for the current findings. Clicks do not establish calls connected, jobs booked or messages sent.

## Facts and account settings still needed from the owner

Real GA4/Ads IDs and conversion labels are needed for live reporting. Verified profile/review URLs enable the corresponding links. Compare the supplied name and phone against the actual profile. Hours and any professional, insurance or warranty claims need their own evidence before publication. Genuine photos and sourced reviews can be added when available. None of these missing details has been replaced with a visible placeholder or invented proof.
