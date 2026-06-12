// Island registry — single source of truth for every editable region the
// Tina bridge can refresh during a visual-editing session. Each entry maps
// a URL slug under `/tina-island/...` to a fetcher + component + wrapper.
// Adding a new editable region = adding one entry here; the dynamic
// `[name].ts` route picks it up automatically.
import type { IslandRegistry } from '@tinacms/astro/experimental';
import type { QueryResult } from '@tinacms/astro/data';
import type { PagesQuery, SiteSettingsQuery } from '../../tina/__generated__/types';
import Blocks from '../components/blocks/Blocks.astro';
import Nav from '../components/layout/Nav.astro';
import Footer from '../components/layout/Footer.astro';
import { getPage, getSiteSettings } from './data';

export const islands: IslandRegistry = {
  page: {
    fetch: (_request, params) => getPage(params.get('slug') ?? 'home'),
    component: Blocks,
    wrapper: { tag: 'div', className: 'tina-island-contents' },
    propsFromData: (data) => ({
      page: (data as QueryResult<PagesQuery>).data?.pages,
    }),
  },
  nav: {
    fetch: () => getSiteSettings(),
    component: Nav,
    wrapper: { tag: 'div', className: 'tina-island-contents' },
    propsFromData: (data) => ({
      settings: (data as QueryResult<SiteSettingsQuery>).data?.siteSettings,
    }),
  },
  footer: {
    fetch: () => getSiteSettings(),
    component: Footer,
    wrapper: { tag: 'div', className: 'tina-island-contents' },
    propsFromData: (data) => ({
      settings: (data as QueryResult<SiteSettingsQuery>).data?.siteSettings,
    }),
  },
};
