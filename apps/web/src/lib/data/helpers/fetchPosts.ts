import { client } from "../sanity";
import type { Post } from "sanity-schema";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export async function fetchPosts() {
	const builder = imageUrlBuilder(client);
	const urlFor = (source: SanityImageSource) => builder.image(source);
	const rawPosts = await client.fetch<Post[]>('*[_type == "post"]');
	const posts = rawPosts.map((post) => {
		return {
			...post,
			mainImageUrl: urlFor(post.mainImage.asset as SanityImageSource).url()
		};
	});
	return posts;
}
