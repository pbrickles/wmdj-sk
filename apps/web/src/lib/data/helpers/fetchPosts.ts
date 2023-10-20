import { client } from "../sanity";
import type { Post } from "sanity-schema";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { urlFor } from "./urlFor";
import type { FetchedPost } from "$lib/types/posts";

export async function fetchPosts(): Promise<FetchedPost[]> {
	const sanityPosts = await client.fetch<Post[]>(
		'*[_type == "post" && !(_id in path("drafts.**"))] | order(_createdAt desc)'
	);
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
	return posts;
}
