import test from "node:test";
import assert from "node:assert/strict";
import {
  readCampaign,
  captureAttribution,
  contactChannel,
  ATTRIBUTION_KEY,
  googleCommandQueue,
} from "../src/lib/attribution.ts";
import {
  CALL_HREF,
  CALL_NUMBER_TEL,
  WHATSAPP_NUMBER,
  getWhatsAppUrl,
} from "../src/lib/business.ts";
import {
  SERVICE_LINKS,
  AREA_LINKS,
  ARTICLE_LINKS,
  getContactMessage,
} from "../src/lib/navigation.ts";
import { SERVICE_PAGES } from "../src/lib/services.ts";
import { AREA_PAGES } from "../src/lib/areas.ts";
import { ARTICLES } from "../src/lib/articles.ts";
import { LOCAL_COVERAGE } from "../src/lib/local-coverage.ts";
const wordCount = (page) =>
  [
    page.intro,
    ...page.sections.flatMap((s) => s.paragraphs),
    ...page.faq.flatMap((f) => [f.question, f.answer]),
  ]
    .join(" ")
    .match(/\b\w+(?:['’]\w+)?\b/g)?.length || 0;

test("street directory covers existing neighborhoods without inventing service locations", () => {
  assert.deepEqual(LOCAL_COVERAGE.map((a) => a.slug).sort(), AREA_LINKS.map((a) => a.slug).sort());
  for (const area of LOCAL_COVERAGE) {
    const page = AREA_PAGES.find((p) => p.slug === area.slug);
    const copy = page.sections.flatMap((section) => section.paragraphs).join(" ");
    assert.ok(area.streets.length >= 2);
    for (const street of area.streets) assert.ok(copy.includes(street), `${area.slug}: ${street}`);
  }
});
function storage(initial = {}) {
  const data = { ...initial };
  return {
    getItem: (key) => data[key] || null,
    setItem: (key, value) => {
      data[key] = value;
    },
  };
}

test("only allowed campaign fields are retained, bounded and decoded", () => {
  const result = readCampaign(
    "?utm_source=search&utm_campaign=door%20repair&gclid=one&email=private&unknown=skip&utm_term=" +
      "a".repeat(400),
  );
  assert.equal(result.utm_campaign, "door repair");
  assert.equal(result.utm_term.length, 256);
  assert.deepEqual(Object.keys(result).sort(), [
    "gclid",
    "utm_campaign",
    "utm_source",
    "utm_term",
  ]);
});
test("first campaign attribution survives navigation and a later campaign", () => {
  const session = storage();
  const first = captureAttribution(
    "?utm_source=google&gclid=click-one",
    session,
  );
  assert.deepEqual(captureAttribution("", session), first);
  assert.deepEqual(
    captureAttribution("?utm_source=later&gclid=click-two", session),
    first,
  );
});
test("denied storage and malformed persisted values do not break contact attribution", () => {
  const denied = {
    getItem() {
      throw Error("denied");
    },
    setItem() {
      throw Error("denied");
    },
  };
  assert.deepEqual(captureAttribution("?utm_source=search", denied), {
    utm_source: "search",
  });
  for (const bad of [
    "{broken",
    "null",
    "[]",
    '{"unknown":"skip","utm_source":42}',
  ])
    assert.deepEqual(
      captureAttribution("?gclid=fresh", storage({ [ATTRIBUTION_KEY]: bad })),
      { gclid: "fresh" },
    );
});
test("persisted attribution is filtered rather than blindly merged", () => {
  assert.deepEqual(
    captureAttribution(
      "",
      storage({
        [ATTRIBUTION_KEY]: JSON.stringify({
          utm_source: "saved",
          private: "discard",
        }),
      }),
    ),
    { utm_source: "saved" },
  );
});
test("contact events recognize exact WhatsApp destinations and reject lookalikes", () => {
  assert.equal(contactChannel(CALL_HREF), "tel_click");
  assert.equal(contactChannel(getWhatsAppUrl("Hello")), "whatsapp_click");
  for (const invalid of [
    "https://wa.me.evil.example/123",
    "http://wa.me/123",
    "https://wa.me/name",
    "mailto:someone",
    "/services/car-lockout-arlington",
    "#faq",
  ])
    assert.equal(contactChannel(invalid), null);
});
test("call and WhatsApp routing stay distinct and messages round-trip", () => {
  assert.equal(CALL_HREF, `tel:${CALL_NUMBER_TEL}`);
  assert.notEqual(CALL_NUMBER_TEL.replace("+", ""), WHATSAPP_NUMBER);
  const message = "Hi, I'm in Arlington, VA. Door & lock photo to follow.";
  const url = new URL(getWhatsAppUrl(message));
  assert.equal(url.hostname, "wa.me");
  assert.equal(url.pathname, `/${WHATSAPP_NUMBER}`);
  assert.equal(url.searchParams.get("text"), message);
});
test("every existing route has content and a contextual WhatsApp message", () => {
  for (const [links, pages, prefix] of [
    [SERVICE_LINKS, SERVICE_PAGES, "services"],
    [AREA_LINKS, AREA_PAGES, "areas"],
    [ARTICLE_LINKS, ARTICLES, "advice"],
  ]) {
    assert.deepEqual(
      links.map((p) => p.slug).sort(),
      pages.map((p) => p.slug).sort(),
    );
    const messages = links.map((p) =>
      getContactMessage(`/${prefix}/${p.slug}`),
    );
    assert.equal(new Set(messages).size, links.length);
    for (const msg of messages) {
      assert.match(msg, /Arlington/);
      assert.doesNotMatch(msg, /\[|\]/);
    }
  }
  for (const area of AREA_LINKS)
    assert.ok(getContactMessage(`/areas/${area.slug}`).includes(area.name));
});
test("the three priority services contain at least 600 specific words", () => {
  for (const slug of [
    "emergency-locksmith-arlington-va",
    "car-lockout-arlington",
    "commercial-storefront-lockout",
  ]) {
    const count = wordCount(SERVICE_PAGES.find((p) => p.slug === slug));
    assert.ok(count >= 600, `${slug}: ${count}`);
  }
});
test("each neighborhood has over 400 specific words and valid nearby/service links", () => {
  for (const area of AREA_PAGES) {
    assert.ok(wordCount(area) >= 400, `${area.slug}: ${wordCount(area)}`);
    assert.ok(area.nearby.length >= 2);
    for (const slug of area.nearby) {
      assert.ok(AREA_PAGES.some((p) => p.slug === slug));
      assert.notEqual(slug, area.slug);
    }
    for (const slug of area.services)
      assert.ok(SERVICE_PAGES.some((p) => p.slug === slug));
  }
  assert.equal(
    new Set(AREA_PAGES.map((p) => JSON.stringify(p.sections))).size,
    10,
  );
});
test("eight substantive advice guides link to real service pages", () => {
  assert.equal(ARTICLES.length, 8);
  for (const article of ARTICLES) {
    assert.ok(
      wordCount(article) >= 350,
      `${article.slug}: ${wordCount(article)}`,
    );
    for (const slug of article.services)
      assert.ok(SERVICE_PAGES.some((p) => p.slug === slug));
  }
});

test("Google tag commands remain queued in the bootstrap format until the tag loads", () => {
  const layer = [];
  const gtag = googleCommandQueue(layer);
  const params = {
    page_path: "/services/car-lockout-arlington",
    button_location: "service-hero-call",
  };
  gtag("config", "measurement-id", { send_page_view: false });
  gtag("event", "tel_click", params);
  assert.equal(layer.length, 2);
  assert.equal(Object.prototype.toString.call(layer[0]), "[object Arguments]");
  assert.deepEqual(Array.from(layer[1]), ["event", "tel_click", params]);
});
