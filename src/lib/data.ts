import client from '../../tina/__generated__/client';
import { requestWithMetadata } from '@tinacms/astro/data';

export const getPage = (slug: string) =>
  requestWithMetadata(
    client.queries.pages({ relativePath: `${slug}.json` }),
    { priority: 'primary' },
  );

export const getSiteSettings = () =>
  requestWithMetadata(
    client.queries.siteSettings({ relativePath: 'site-settings.json' }),
  );

export const getServices = () =>
  requestWithMetadata(
    client.queries.servicesConnection(),
  );

export const getFaqs = () =>
  requestWithMetadata(
    client.queries.faqsConnection(),
  );

export const getPosts = () =>
  requestWithMetadata(
    client.queries.postsConnection(),
  );

export const getPost = (slug: string) =>
  requestWithMetadata(
    client.queries.posts({ relativePath: `${slug}.json` }),
  );
