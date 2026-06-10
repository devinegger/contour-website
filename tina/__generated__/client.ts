import { createClient } from "tinacms/dist/client";
import { queries } from "./types.js";
export const client = createClient({ cacheDir: '/Users/devinegger/Sites/contour/tina/__generated__/.cache/1781061439436', url: 'http://localhost:4001/graphql', token: '', queries,  });
export default client;
  