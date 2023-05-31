import { createClient } from "@sanity/client";
import { SANITY_PROJECT_ID, SANITY_DATASET_NAME } from "$env/static/private";

export const client = createClient({
	projectId: SANITY_PROJECT_ID,
	dataset: SANITY_DATASET_NAME,
	useCdn: true,
	apiVersion: "2023-05-03" // use current date (YYYY-MM-DD) to target the latest API version
});

export async function getPosts() {
	const posts = await client.fetch('*[_type == "post"]');
	return posts;
}
