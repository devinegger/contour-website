// Server-side proxy for the Google PageSpeed Insights API. Keyless PSI
// calls are rate-limited to uselessness (429), and a key in client JS is
// quota theft waiting to happen — so the key lives here as a Worker secret
// (PAGESPEED_API_KEY; `wrangler secret put` in prod, .env locally) and
// results are edge-cached per target URL.
import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const prerender = false;

const PSI_ENDPOINT = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';
const CATEGORIES = ['PERFORMANCE', 'ACCESSIBILITY', 'BEST_PRACTICES', 'SEO'];
const SCORE_KEYS = ['performance', 'accessibility', 'best-practices', 'seo'];

function json(body: unknown, status = 200, headers: Record<string, string> = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...headers },
  });
}

export const GET: APIRoute = async ({ url }) => {
  let target: URL;
  try {
    target = new URL(url.searchParams.get('url') ?? '');
    if (target.protocol !== 'https:' && target.protocol !== 'http:') throw new Error();
  } catch {
    return json({ error: 'Invalid URL.' }, 400);
  }

  const key =
    (env as Record<string, string | undefined>).PAGESPEED_API_KEY ??
    import.meta.env.PAGESPEED_API_KEY;
  if (!key) {
    return json({ error: 'The PageSpeed checker is not configured yet.' }, 503);
  }

  // Repeat checks of the same site within an hour come from the edge cache
  // instead of burning PSI quota (and 30s of analysis time).
  const cacheKey = new Request(`${url.origin}/api/pagespeed?url=${encodeURIComponent(target.href)}`);
  const cache = typeof caches !== 'undefined' ? (caches as unknown as { default: Cache }).default : undefined;
  if (cache) {
    const hit = await cache.match(cacheKey);
    if (hit) return hit;
  }

  const psi = new URL(PSI_ENDPOINT);
  psi.searchParams.set('url', target.href);
  psi.searchParams.set('strategy', 'mobile');
  psi.searchParams.set('key', key);
  for (const c of CATEGORIES) psi.searchParams.append('category', c);

  const res = await fetch(psi);
  if (!res.ok) {
    if (res.status === 400 || res.status === 404) {
      return json({ error: "Google couldn't analyze that URL — is the site reachable?" }, 400);
    }
    return json({ error: 'PageSpeed is busy right now — try again in a minute.' }, 502);
  }

  const data = (await res.json()) as {
    lighthouseResult?: { categories?: Record<string, { score?: number }> };
  };
  const categories = data?.lighthouseResult?.categories ?? {};
  const scores: Record<string, number> = {};
  for (const k of SCORE_KEYS) {
    scores[k] = Math.round((categories?.[k]?.score ?? 0) * 100);
  }

  const out = json({ url: target.href, scores }, 200, { 'Cache-Control': 'public, max-age=3600' });
  if (cache) await cache.put(cacheKey, out.clone());
  return out;
};
