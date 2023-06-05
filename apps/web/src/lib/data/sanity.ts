import { createClient } from "@sanity/client";
import { SANITY_PROJECT_ID, SANITY_DATASET_NAME, SANITY_READ_TOKEN } from "$env/static/private";

export const client = createClient({
	projectId: SANITY_PROJECT_ID,
	dataset: SANITY_DATASET_NAME,
	token: SANITY_READ_TOKEN,
	useCdn: true,
	apiVersion: "2023-05-03" // use current date (YYYY-MM-DD) to target the latest API version
});
