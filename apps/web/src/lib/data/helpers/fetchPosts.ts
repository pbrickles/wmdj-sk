import { client } from "../sanity";
import type { Post } from "sanity-schema";

export async function fetchPosts() {
	const posts = await client.fetch<Post[]>('*[_type == "post"]');
	return posts;
}
