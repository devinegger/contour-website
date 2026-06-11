// Single dynamic endpoint that handles every island refetch the bridge
// sends. The URL path (`/tina-island/page`, `/tina-island/nav`, …) selects
// an entry from the registry in `src/lib/islands.ts`. This is the only
// non-prerendered route in the site — it only runs during editing sessions.
import type { APIRoute } from 'astro';
import { experimental_createIslandRoute } from '@tinacms/astro/experimental';
import { islands } from '../../lib/islands';

export const prerender = false;
export const ALL: APIRoute = experimental_createIslandRoute(islands);
