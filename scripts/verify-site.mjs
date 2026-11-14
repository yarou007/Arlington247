import http from "node:http";
import https from "node:https";
import assert from "node:assert/strict";
import {
  DOMAIN,
  CALL_HREF,
  CALL_NUMBER_TEL,
  CALL_NUMBER_DISPLAY,
  WHATSAPP_NUMBER,
  VERIFIED_OPENING_HOURS,
} from "../src/lib/business.ts";
import {
  SERVICE_LINKS,
  AREA_LINKS,
  ARTICLE_LINKS,
} from "../src/lib/navigation.ts";
const base = process.argv[2] || "http://127.0.0.1:3001";
const decode = (str) =>
  str
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
const attr = (tag, key) =>
  decode(tag.match(new RegExp(`\\b${key}=["']([^"']*)["']`, "i"))?.[1] || "");
const expected = [
  "/",
  ...SERVICE_LINKS.map((p) => `/services/${p.slug}`),
  ...AREA_LINKS.map((p) => `/areas/${p.slug}`),
  "/advice",
  ...ARTICLE_LINKS.map((p) => `/advice/${p.slug}`),
  "/privacy-policy",
  "/terms-of-service",
];
const errors = [];
const titles = new Set();
const descriptions = new Set();
const outgoing = new Map();
const results = [];
function check(condition, message) {
  if (!condition) errors.push(message);
}
const robots = await fetch(base + "/robots.txt");
const robotText = await robots.text();
assert.equal(robots.status, 200);
assert.match(robotText, /Allow: \//);
assert.ok(robotText.includes(DOMAIN + "/sitemap.xml"));
const sitemap = await fetch(base + "/sitemap.xml");
assert.equal(sitemap.status, 200);
const sitemapText = await sitemap.text();
const urls = [...sitemapText.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) =>
  decode(m[1]),
);
assert.deepEqual(
  urls.map((url) => new URL(url).pathname).sort(),
  [...expected].sort(),
);
for (const path of expected) {
  const response = await fetch(base + path);
  const html = await response.text();
  check(response.status === 200, `${path}: HTTP ${response.status}`);
  const metas = [...html.matchAll(/<meta\b[^>]*>/g)].map((m) => m[0]);
  const meta = (name) =>
    attr(
      metas.find(
        (tag) => attr(tag, "name") === name || attr(tag, "property") === name,
      ) || "",
      "content",
    );
  const title = decode(html.match(/<title>(.*?)<\/title>/s)?.[1] || "");
  const description = meta("description");
  check(!titles.has(title), `${path}: duplicate title`);
  titles.add(title);
  check(!descriptions.has(description), `${path}: duplicate description`);
  descriptions.add(description);
  check(title.length <= 60, `${path}: title ${title.length} characters`);
  check(
    description.length <= 155,
    `${path}: description ${description.length} characters`,
  );
  check(
    title.includes("Arlington, VA") && title.includes(CALL_NUMBER_DISPLAY),
    `${path}: missing title locality/phone`,
  );
  check(
    description.includes("Arlington, VA") &&
      description.includes(CALL_NUMBER_DISPLAY),
    `${path}: missing description locality/phone`,
  );
  check(
    !metas.some(
      (tag) =>
        attr(tag, "name") === "robots" && /noindex/.test(attr(tag, "content")),
    ),
    `${path}: noindex`,
  );
  check(
    !/noindex/i.test(response.headers.get("x-robots-tag") || ""),
    `${path}: noindex header`,
  );
  const canonicalTag = [...html.matchAll(/<link\b[^>]*>/g)]
    .map((m) => m[0])
    .filter((t) => attr(t, "rel") === "canonical");
  check(
    canonicalTag.length === 1 &&
      attr(canonicalTag[0], "href") === DOMAIN + (path === "/" ? "" : path),
    `${path}: canonical mismatch`,
  );
  const mainHtml = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1] || "";
  const mainText = decode(
    mainHtml
      .replace(/<script\b[\s\S]*?<\/script>/g, "")
      .replace(/<[^>]*>/g, " "),
  )
    .replace(/\s+/g, " ")
    .trim();
  const words = mainText.split(/\s+/).length;
  if (
    path === "/" ||
    [
      "/services/emergency-locksmith-arlington-va",
      "/services/car-lockout-arlington",
      "/services/commercial-storefront-lockout",
    ].includes(path)
  )
    check(words >= 600, `${path}: too little rendered content (${words})`);
  if (path.startsWith("/areas/"))
    check(words >= 400, `${path}: too little rendered content (${words})`);
  const h1 = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/g)];
  check(
    h1.length === 1 && h1[0][1].includes("Arlington"),
    `${path}: heading structure/locality`,
  );
  check(
    !/<form\b|mailto:|Social \(Coming Soon\)|\[ADD:/i.test(html),
    `${path}: form/email/placeholder`,
  );
  const links = [...html.matchAll(/<a\b[^>]*>/g)].map((m) => m[0]);
  const internals = [];
  let tel = 0,
    wa = 0;
  for (const tag of links) {
    const href = attr(tag, "href");
    check(href !== "#", `${path}: placeholder link`);
    if (href.startsWith("tel:")) {
      tel++;
      check(href === CALL_HREF, `${path}: wrong call destination`);
    }
    if (href.startsWith("https://wa.me/")) {
      wa++;
      const url = new URL(href);
      check(
        url.pathname === `/${WHATSAPP_NUMBER}` &&
          !!url.searchParams.get("text"),
        `${path}: WhatsApp routing/message`,
      );
    }
    if (href.startsWith("/")) internals.push(href.split("#")[0] || "/");
  }
  check(tel >= 2 && wa >= 2, `${path}: contact options missing`);
  outgoing.set(path, internals);
  const schemas = [
    ...html.matchAll(
      /<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
    ),
  ].map((m) => JSON.parse(m[1]));
  const business = schemas.filter((s) => s["@type"] === "Locksmith");
  check(
    business.length === 1 && business[0].telephone === CALL_NUMBER_TEL,
    `${path}: business identity/telephone`,
  );
  if (!VERIFIED_OPENING_HOURS.length)
    check(
      !business[0]?.openingHours && !business[0]?.openingHoursSpecification,
      `${path}: unconfirmed hours`,
    );
  check(
    !schemas.some((s) => s.aggregateRating || s.review),
    `${path}: unverified review schema`,
  );
  const faq = schemas.filter((s) => s["@type"] === "FAQPage");
  const needsFaq =
    path === "/" ||
    path.startsWith("/services/") ||
    path.startsWith("/areas/") ||
    path.startsWith("/advice/");
  check(faq.length === (needsFaq ? 1 : 0), `${path}: FAQ count`);
  for (const node of faq)
    for (const item of node.mainEntity)
      check(
        mainText.includes(item.name) &&
          mainText.includes(item.acceptedAnswer.text),
        `${path}: FAQ schema does not match rendered content`,
      );
  if (path !== "/")
    check(
      schemas.some((s) => s["@type"] === "BreadcrumbList"),
      `${path}: breadcrumbs missing`,
    );
  if (path.startsWith("/services/") || path.startsWith("/areas/"))
    check(
      schemas.some((s) => s["@type"] === "Service"),
      `${path}: service schema missing`,
    );
  if (path.startsWith("/advice/"))
    check(
      schemas.some((s) => s["@type"] === "Article"),
      `${path}: article schema missing`,
    );
  for (const name of ["og:description", "twitter:description"])
    check(meta(name) === description, `${path}: ${name} mismatch`);
  results.push({
    path,
    status: response.status,
    titleLength: title.length,
    descriptionLength: description.length,
    tel,
    wa,
  });
}
for (const [path, links] of outgoing)
  for (const dest of links)
    check(expected.includes(dest), `${path}: link to unknown ${dest}`);
const reachable = new Set(["/"]);
let changed = true;
while (changed) {
  changed = false;
  for (const path of [...reachable])
    for (const dest of outgoing.get(path) || [])
      if (!reachable.has(dest)) {
        reachable.add(dest);
        changed = true;
      }
}
check(
  reachable.size === expected.length,
  `Only ${reachable.size}/${expected.length} pages reachable from home`,
);
for (const path of [
  "/areas/nonexistent-area",
  "/advice/nonexistent-guide",
  "/missing-page",
]) {
  const response = await fetch(base + path);
  check(response.status === 404, `${path}: expected 404`);
  check(
    /noindex/.test(await response.text()),
    `${path}: missing noindex on 404`,
  );
}
for (const asset of ["/icon.svg", "/llms.txt"]) {
  const response = await fetch(base + asset);
  check(response.status === 200, `${asset}: unavailable`);
}
// fetch may ignore a custom Host header; use the HTTP client for this host rule.
const www = await new Promise((resolve, reject) => {
  const url = new URL("/services/car-lockout-arlington", base);
  const transport = url.protocol === "https:" ? https : http;
  const req = transport.request(
    url,
    { headers: { host: `www.${new URL(DOMAIN).hostname}` } },
    (response) => {
      response.resume();
      resolve({
        status: response.statusCode,
        location: response.headers.location,
      });
    },
  );
  req.on("error", reject);
  req.end();
});
check(
  www.status === 301 &&
    www.location === DOMAIN + "/services/car-lockout-arlington",
  "www host canonical redirect failed",
);
const trailing = await fetch(base + "/services/car-lockout-arlington/", {
  redirect: "manual",
});
check(
  [301, 308].includes(trailing.status),
  `Trailing slash status ${trailing.status}`,
);
console.table(results);
if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else
  console.log(
    `PASS: ${expected.length} pages; canonical, metadata, HTML, contact routing, schema, internal links, sitemap and 404 checks.`,
  );
