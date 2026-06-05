import type { IslandRegistry } from '@tinacms/astro/experimental';
import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
import { getPage } from './data';

// Dynamic imports of Astro component factories for island re-rendering.
// The bridge calls these routes to re-render page sections on edit.
const HeroIsland = (await import('../components/islands/HeroIsland.astro')).default as AstroComponentFactory;
const RichTextIsland = (await import('../components/islands/RichTextIsland.astro')).default as AstroComponentFactory;

export const islands: IslandRegistry = {
  hero: {
    fetch: (_request: Request, params: URLSearchParams) =>
      getPage(params.get('slug') ?? 'home'),
    component: HeroIsland,
    wrapper: { tag: 'div' },
    propsFromData: (data: unknown) => ({ data }),
  },
  richtext: {
    fetch: (_request: Request, params: URLSearchParams) =>
      getPage(params.get('slug') ?? 'home'),
    component: RichTextIsland,
    wrapper: { tag: 'div' },
    propsFromData: (data: unknown) => ({ data }),
  },
};
