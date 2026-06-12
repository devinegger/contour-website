import { createClient } from "tinacms/dist/client";
import { queries } from "./types.js";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'f00a57d645e2993bf3f3f6e2948a078236722a06', queries,  });
export default client;
  