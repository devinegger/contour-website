// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: process.env.GITHUB_BRANCH ?? process.env.WORKERS_CI_BRANCH ?? // Cloudflare Workers Builds
  process.env.VERCEL_GIT_COMMIT_REF ?? "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID ?? "",
  token: process.env.TINA_TOKEN ?? "",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  content: {
    rootPath: "content"
  },
  schema: {
    collections: [
      // ─── PAGES ────────────────────────────────────────────────
      {
        name: "pages",
        label: "Pages",
        path: "content/pages",
        format: "json",
        ui: {
          // Visual editing: the admin opens the document's live page in an
          // iframe instead of the bare form. Filenames match slug fields.
          router: ({ document }) => document._sys.filename === "home" ? "/" : `/${document._sys.filename}`
        },
        fields: [
          { name: "title", label: "Page title", type: "string", required: true },
          { name: "slug", label: "Slug", type: "string", required: true },
          {
            name: "seo",
            label: "SEO",
            type: "object",
            fields: [
              { name: "metaTitle", label: "Meta title", type: "string" },
              { name: "metaDescription", label: "Meta description", type: "string" },
              { name: "ogImage", label: "OG image", type: "image" }
            ]
          },
          {
            name: "blocks",
            label: "Blocks",
            type: "object",
            list: true,
            ui: { visualSelector: true },
            templates: [
              // hero
              {
                name: "hero",
                label: "Hero",
                fields: [
                  {
                    name: "headline",
                    label: "Hero headline (LOCKED \u2014 approved copy: do not change)",
                    type: "string"
                  },
                  { name: "subheading", label: "Subheading", type: "string" },
                  { name: "primaryCtaLabel", label: "Primary CTA label", type: "string" },
                  { name: "primaryCtaUrl", label: "Primary CTA URL", type: "string" },
                  { name: "secondaryCtaLabel", label: "Secondary CTA label", type: "string" },
                  { name: "secondaryCtaUrl", label: "Secondary CTA URL", type: "string" },
                  { name: "trustAnchor", label: "Trust anchor line", type: "string" }
                ]
              },
              // services-preview
              {
                name: "services_preview",
                label: "Services Preview",
                fields: [
                  {
                    name: "_placeholder",
                    label: "No editable fields \u2014 pulls from services collection",
                    type: "string",
                    ui: { component: "hidden" }
                  }
                ]
              },
              // differentiators
              {
                name: "differentiators",
                label: "Differentiators",
                fields: [
                  {
                    name: "items",
                    label: "Items (3)",
                    type: "object",
                    list: true,
                    fields: [
                      { name: "headline", label: "Headline", type: "string" },
                      { name: "body", label: "Body", type: "string", ui: { component: "textarea" } }
                    ]
                  }
                ]
              },
              // trust-signal
              {
                name: "trust_signal",
                label: "Trust Signal",
                fields: [
                  { name: "statement", label: "Statement", type: "string", ui: { component: "textarea" } },
                  { name: "badgeSlot", label: "Badge image (optional)", type: "image" }
                ]
              },
              // cta-strip
              {
                name: "cta_strip",
                label: "CTA Strip",
                fields: [
                  { name: "headline", label: "Headline", type: "string" },
                  { name: "ctaLabel", label: "CTA label", type: "string" },
                  { name: "ctaUrl", label: "CTA URL", type: "string" },
                  {
                    name: "background",
                    label: "Background",
                    type: "string",
                    options: ["light", "dark"],
                    ui: { component: "select" }
                  }
                ]
              },
              // services-full
              {
                name: "services_full",
                label: "Services Full",
                fields: [
                  {
                    name: "_placeholder",
                    label: "No editable fields \u2014 pulls from services collection (all 5)",
                    type: "string",
                    ui: { component: "hidden" }
                  }
                ]
              },
              // cost-comparison
              {
                name: "cost_comparison",
                label: "Cost Comparison",
                fields: [
                  { name: "headline", label: "Headline", type: "string" },
                  { name: "intro", label: "Intro", type: "string", ui: { component: "textarea" } },
                  {
                    name: "rows",
                    label: "Rows",
                    type: "object",
                    list: true,
                    fields: [
                      { name: "label", label: "Item", type: "string" },
                      { name: "competitorCost", label: "Competitor cost", type: "string" },
                      { name: "contourCost", label: "Contour cost", type: "string" }
                    ]
                  }
                ]
              },
              // secondary-services
              {
                name: "secondary_services",
                label: "Secondary Services",
                fields: [
                  {
                    name: "card1",
                    label: "Card 1 (WP Migration)",
                    type: "object",
                    fields: [
                      {
                        name: "headline",
                        label: "Headline (LOCKED \u2014 do not change)",
                        type: "string"
                      },
                      { name: "description", label: "Description", type: "string", ui: { component: "textarea" } },
                      { name: "price", label: "Price", type: "string" },
                      { name: "ctaLabel", label: "CTA label", type: "string" },
                      { name: "ctaUrl", label: "CTA URL", type: "string" }
                    ]
                  },
                  {
                    name: "card2",
                    label: "Card 2 (Custom Build)",
                    type: "object",
                    fields: [
                      {
                        name: "headline",
                        label: "Headline (LOCKED \u2014 do not change)",
                        type: "string"
                      },
                      { name: "description", label: "Description", type: "string", ui: { component: "textarea" } },
                      { name: "price", label: "Price", type: "string" },
                      { name: "ctaLabel", label: "CTA label", type: "string" },
                      { name: "ctaUrl", label: "CTA URL", type: "string" }
                    ]
                  }
                ]
              },
              // faq
              {
                name: "faq",
                label: "FAQ",
                fields: [
                  {
                    name: "_placeholder",
                    label: "No editable fields \u2014 entries managed in FAQs collection",
                    type: "string",
                    ui: { component: "hidden" }
                  }
                ]
              },
              // rich-text
              {
                name: "rich_text",
                label: "Rich Text",
                fields: [
                  { name: "body", label: "Body", type: "rich-text" }
                ]
              },
              // about-story
              {
                name: "about_story",
                label: "About Story",
                fields: [
                  { name: "opening", label: "Opening", type: "string", ui: { component: "textarea" } },
                  { name: "storyBody", label: "Story body", type: "rich-text" },
                  { name: "howWeWork", label: "How we work", type: "rich-text" },
                  {
                    name: "locationLine",
                    label: "Location line (LOCKED \u2014 do not change)",
                    type: "string"
                  },
                  { name: "ctaLabel", label: "CTA label", type: "string" },
                  { name: "ctaUrl", label: "CTA URL", type: "string" }
                ]
              },
              // contact-form
              {
                name: "contact_form",
                label: "Contact Form",
                fields: [
                  { name: "pageHeader", label: "Page header", type: "string" },
                  { name: "responseTimeLine", label: "Response time line", type: "string" },
                  { name: "bookingLinkLabel", label: "Booking link label", type: "string" },
                  { name: "bookingLinkUrl", label: "Booking link URL", type: "string" },
                  {
                    name: "locationLine",
                    label: "Location line (LOCKED \u2014 do not change)",
                    type: "string"
                  }
                ]
              }
            ]
          }
        ]
      },
      // ─── POSTS ────────────────────────────────────────────────
      {
        name: "posts",
        label: "Blog posts",
        path: "content/posts",
        format: "json",
        ui: {
          router: ({ document }) => `/blog/${document._sys.filename}`
        },
        fields: [
          { name: "title", label: "Title", type: "string", required: true },
          { name: "slug", label: "Slug", type: "string", required: true },
          { name: "date", label: "Date", type: "datetime" },
          { name: "excerpt", label: "Excerpt", type: "string", ui: { component: "textarea" } },
          { name: "body", label: "Body", type: "rich-text" }
        ]
      },
      // ─── SERVICES ─────────────────────────────────────────────
      {
        name: "services",
        label: "Services",
        path: "content/services",
        format: "json",
        fields: [
          { name: "name", label: "Service name", type: "string", required: true },
          { name: "slug", label: "Slug", type: "string", required: true },
          {
            name: "tier",
            label: "Tier",
            type: "string",
            options: ["baseline", "elevated", "crest", "wp-migration", "custom-build"],
            ui: { component: "select" }
          },
          { name: "tagline", label: "Tagline", type: "string" },
          { name: "description", label: "Description", type: "rich-text" },
          { name: "price", label: "Price", type: "string" },
          { name: "setupFee", label: "Setup fee", type: "string" },
          {
            name: "inclusions",
            label: "Inclusions",
            type: "string",
            list: true
          },
          { name: "ctaLabel", label: "CTA label", type: "string" },
          { name: "ctaUrl", label: "CTA URL", type: "string" }
        ]
      },
      // ─── FAQS ────────────────────────────────────────────────
      {
        name: "faqs",
        label: "FAQs",
        path: "content/faqs",
        format: "json",
        fields: [
          { name: "question", label: "Question", type: "string", required: true },
          { name: "answer", label: "Answer", type: "rich-text" },
          { name: "order", label: "Sort order", type: "number" }
        ]
      },
      // ─── SITE SETTINGS (singleton) ────────────────────────────
      {
        name: "siteSettings",
        label: "Site settings",
        path: "content",
        format: "json",
        match: { include: "site-settings" },
        ui: { global: true },
        fields: [
          { name: "businessName", label: "Business name", type: "string" },
          { name: "tagline", label: "Tagline", type: "string" },
          {
            name: "locationLine",
            label: "Location line (LOCKED \u2014 do not change)",
            type: "string"
          },
          {
            name: "navLinks",
            label: "Nav links",
            type: "object",
            list: true,
            fields: [
              { name: "label", label: "Label", type: "string" },
              { name: "url", label: "URL", type: "string" }
            ]
          },
          {
            name: "footerLinks",
            label: "Footer links",
            type: "object",
            list: true,
            fields: [
              { name: "label", label: "Label", type: "string" },
              { name: "url", label: "URL", type: "string" }
            ]
          },
          { name: "defaultSeoTitle", label: "Default SEO title", type: "string" },
          { name: "defaultSeoDescription", label: "Default SEO description", type: "string" },
          { name: "defaultOgImage", label: "Default OG image", type: "image" }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
