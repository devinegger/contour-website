import { createClient } from "tinacms/dist/client";
import { queries } from "./types.js";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'c96c8649560e2c2f3f54cbc4fecbcb2da94849f5', queries,  });
export default client;
  