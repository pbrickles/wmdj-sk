import { fetchPosts } from "$lib/data/helpers/fetchPosts";

export async function load() {
	const posts = await fetchPosts();
	return {
		status: 200,
		body: {
			posts
		}
	};
}
