import { client } from "../sanity";

export async function getPosts() {
	const posts = await client.fetch('*[_type == "post"]');
	return posts;
}
