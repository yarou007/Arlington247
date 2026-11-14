# Arlington 24/7 Lock Repair website

Next.js 16, React and Tailwind. Existing service/area routes are preserved. No runtime libraries were added for the redesign.

## Development and verification

Use Node 24 for the native TypeScript test/verification scripts; the cloud workspace is tested with Node 24.22.1.

```sh
npm ci
npm run dev
```

```sh
npm test
npm run typecheck
npm run build
npm run start -- --hostname 127.0.0.1 --port 3001
```

In another terminal, with the production server running:

```sh
npm run verify:site -- http://127.0.0.1:3001
```

The site check crawls every sitemap page and verifies rendered content, metadata, phone/WhatsApp destinations, canonical URLs, schema, internal reachability, 404 behavior and host/slash normalization. Native tests cover attribution, storage failures, routing and content requirements. The obsolete `next lint` command was removed; `typecheck`, `test` and `verify:site` are the supported checks. No ESLint suite is claimed.

## Business and content configuration

- `src/lib/business.ts`: all five business/contact constants, derived telephone and WhatsApp links, optional verified hours and public business-profile links.
- `src/lib/navigation.ts`: route catalog and per-page WhatsApp context.
- `src/lib/services.ts`, `areas.ts`, `articles.ts`: page-specific editorial content.
- `src/app/sitemap.ts`: all public HTML routes, derived from the catalog. No synthetic last-modified timestamps.

The supplied business name is retained. Hours, licence/insurance claims, warranties, reviews and a map are omitted until they can be substantiated. Empty optional values produce no visible placeholder. Existing lock imagery is illustrative; no fabricated technicians, vehicles or job stories were added.

## Optional analytics and verified links

Use `.env.example` as the list of supported public variables. Add real values in local/deployment environment settings and rebuild. Do not overwrite an existing `.env.local` blindly.

- `NEXT_PUBLIC_GA4_ID`: real GA4 measurement ID.
- `NEXT_PUBLIC_GOOGLE_ADS_ID`: real Ads tag ID.
- `NEXT_PUBLIC_GOOGLE_ADS_CALL_CONVERSION` and `NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_CONVERSION`: real conversion destinations, each consisting of the configured Ads ID, a slash and its conversion label.
- `NEXT_PUBLIC_GBP_URL` and `NEXT_PUBLIC_GOOGLE_REVIEW_URL`: verified HTTPS public profile/review links. Empty or invalid URLs are omitted.

With no tag IDs, no Google tag is loaded. Contact interactions still produce local `dataLayer` objects. With GA4 enabled, `tel_click` and `whatsapp_click` include `page_path`, `button_location` and supported first-session campaign fields. Ads conversions are sent only when their destination matches the configured Ads ID. A destination left empty produces no Ads conversion event.

The first supported campaign in the tab is retained in session storage across internal navigation: `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `gclid`, `gbraid`, `wbraid`. Storage denial does not prevent contact clicks. Query values are bounded; message content and photos are not included in contact-click events.

A click is an interaction, not proof of a connected call or a sent WhatsApp message. Validate real configured tags in GA4 DebugView/Realtime and Ads diagnostics after deployment. Register `button_location` as an event-scoped custom dimension in GA4 and mark the contact-click events as key events if that matches your reporting plan. Keep the server-rendered phone, schema and Google Business Profile consistent if a call-tracking provider is introduced; measure connected calls separately from link clicks.

## Release handoff

See [implementation report](docs/implementation-report.md) for the change log and evidence, and [indexing checklist](docs/indexing-checklist.md) for all submission URLs and KPIs. [Phase 1 audit](docs/phase-1-audit.md) records the historical baseline. No live deployment or Search Console submission is implied by a local build.
