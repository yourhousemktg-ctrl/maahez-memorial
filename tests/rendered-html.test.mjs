import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the complete Maahez memorial", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>MAAHEZ — In Memory of Mauro Menendez<\/title>/i);
  assert.match(html, /Artist\. Producer\. Friend\. Legend\./);
  assert.match(html, /Burn Memorial Group Chat/);
  assert.match(html, /Shared Dropbox/);
  assert.doesNotMatch(html, /Instagram archive/);
  assert.doesNotMatch(html, /night-out\.jpg/);
  assert.match(html, /The story, in his own words\./);
  assert.match(html, /Meet MAAHEZ, the House Producer Shaping HUGEL/);
  assert.match(html, /Rising Music Stars Dirty Audio and MAAHEZ/);
  assert.match(html, /Come together for Maahez\./);
  assert.match(html, /<strong>16<\/strong>[\s\S]*?<h3>Los Angeles<\/h3>/);
  assert.match(html, /<strong>23<\/strong>[\s\S]*?<h3>Miami<\/h3>/);
  assert.doesNotMatch(html, /<strong>TBD<\/strong>/);
  assert.match(html, /MAAHEZ Burn Memorial Group Chat/);
  assert.match(html, /View all official merchandise/);
  assert.match(html, /Alchemy/);
  assert.match(html, /Where's The Afters/);
  assert.doesNotMatch(html, /No Shazam Zone/);
  assert.doesNotMatch(html, /Aliens Are Real/);
  assert.doesNotMatch(html, /I Don(?:&(?:#x27|apos);|')t Have Drugs/);
  assert.doesNotMatch(html, /Perreo Connoisseur/);

  const musicIndex = html.indexOf('class="music-section"');
  const eventsIndex = html.indexOf('class="events-section"');
  const photosIndex = html.indexOf('class="photo-pair"');
  const memoriesIndex = html.indexOf('class="memories-section"');
  const pressIndex = html.indexOf('class="press-section"');
  const merchIndex = html.indexOf('class="merch-section"');
  assert.ok(
    musicIndex >= 0 &&
      eventsIndex > musicIndex &&
      photosIndex > eventsIndex &&
      memoriesIndex > photosIndex &&
      pressIndex > memoriesIndex &&
      merchIndex > pressIndex,
  );
});

test("ships local merchandise assets and motion safeguards", async () => {
  const [page, parallax, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/parallax-media.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(page, /const merch = \[/);
  assert.match(page, /<ParallaxMedia/);
  assert.match(parallax, /prefers-reduced-motion: reduce/);
  assert.match(parallax, /requestAnimationFrame/);
  assert.match(css, /\.parallax-media/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);

  for (const asset of [
    "alchemy-joggers.webp",
    "cant-make-this-shit-up-tank.webp",
    "mami-crop-top.webp",
    "wheres-the-afters-crop-top.webp",
  ]) {
    await access(new URL(`../public/merch/${asset}`, import.meta.url));
  }
});
