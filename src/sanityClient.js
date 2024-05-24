import sanityClient from "@sanity/client";
import { SANITY_PROJECT_ID, SANITY_DATASET, SANITY_TOKEN } from '@env';

const client = sanityClient({
    projectId: SANITY_PROJECT_ID,
    dataset: SANITY_DATASET,
    token: SANITY_TOKEN,
    useCdn: true, // Use CDN for faster response times
  });

  export default client;