/**
 * JSON-LD builders per the Schema & GEO Optimization plan: LocalBusiness
 * (home + contact), FAQPage (any page rendering the faq block),
 * BreadcrumbList (interior pages), WebSite (home), Article (blog posts).
 * Layout.astro renders whatever a page passes in its `schemas` prop.
 */

const SITE_URL = 'https://contour-digital.com';

// Structured form of the locked location line: "Located in Travelers Rest,
// SC. Serving the Greenville Area, Upstate South Carolina, Western North
// Carolina — and anywhere your business is located." Contour is a
// service-area business — locality only, no street address.
const BUSINESS = {
  name: 'Contour',
  locality: 'Travelers Rest',
  region: 'SC',
  areaServed: [
    { '@type': 'City', name: 'Travelers Rest' },
    { '@type': 'City', name: 'Greenville' },
    { '@type': 'AdministrativeArea', name: 'Upstate South Carolina' },
    { '@type': 'AdministrativeArea', name: 'Western North Carolina' },
  ],
};

type SiteSettings = {
  businessName?: string | null;
  tagline?: string | null;
  defaultSeoDescription?: string | null;
} | null | undefined;

export function localBusinessSchema(settings: SiteSettings) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: settings?.businessName ?? BUSINESS.name,
    description: settings?.tagline ?? settings?.defaultSeoDescription ?? '',
    url: SITE_URL,
    address: {
      '@type': 'PostalAddress',
      addressLocality: BUSINESS.locality,
      addressRegion: BUSINESS.region,
      addressCountry: 'US',
    },
    areaServed: BUSINESS.areaServed,
    knowsAbout: ['Web design', 'Website development', 'WordPress migration', 'Local SEO'],
  };
}

export function webSiteSchema(settings: SiteSettings) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: settings?.businessName ?? BUSINESS.name,
    url: SITE_URL,
  };
}

// FAQ answers are stored as markdown strings on disk, but Tina's GraphQL
// layer returns rich-text fields as a parsed AST object. JSON-LD wants
// plain text, so handle both shapes.
function richTextToPlainText(value: unknown): string {
  if (typeof value === 'string') {
    return value
      .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
      .replace(/[*_`#>]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }
  if (value && typeof value === 'object') {
    const node = value as { text?: string; children?: unknown[] };
    if (typeof node.text === 'string') return node.text;
    if (Array.isArray(node.children)) {
      return node.children.map(richTextToPlainText).join(' ').replace(/\s+/g, ' ').trim();
    }
  }
  return '';
}

type Faq = { question?: string | null; answer?: unknown };

export function faqPageSchema(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs
      .map((f) => ({ question: f.question, answer: richTextToPlainText(f.answer) }))
      .filter((f) => f.question && f.answer)
      .map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

type Post = {
  title?: string | null;
  slug?: string | null;
  date?: string | null;
  excerpt?: string | null;
} | null | undefined;

export function articleSchema(post: Post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post?.title ?? '',
    description: post?.excerpt ?? '',
    url: `${SITE_URL}/blog/${post?.slug ?? ''}`,
    ...(post?.date ? { datePublished: post.date } : {}),
    author: { '@type': 'Organization', name: BUSINESS.name, url: SITE_URL },
    publisher: { '@type': 'Organization', name: BUSINESS.name, url: SITE_URL },
  };
}
