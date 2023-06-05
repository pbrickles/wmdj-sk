import { client } from "../sanity";
import type { Post } from "sanity-schema";

export async function fetchPosts() {
	const posts = await client.fetch<Post[]>('*[_type == "post"]');
	return posts;
}

export async function fetchPostBySlug(slug: string) {
	const post = await client.fetch<Post>(`*[_type == "post" && slug.current == $slug][0]`, { slug });
	return post;
}
