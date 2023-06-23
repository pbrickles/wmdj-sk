import { client } from "../sanity";
import type { Post } from "sanity-schema";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { urlFor } from "./urlFor";

export async function fetchPosts() {
	const sanityPosts = await client.fetch<Post[]>('*[_type == "post"]');
	const posts = sanityPosts.map((post) => {
		return {
			...post,
			mainImageUrl: urlFor(post.mainImage.asset as SanityImageSource),
			body: post.body.map((block) => {
				if (block._type === "mainImage" && "asset" in block) {
					return {
						...block,
						url: urlFor(block.asset as SanityImageSource)
					};
				}
				return block;
			})
		};
	});
	console.log(posts);
	return posts;
}
