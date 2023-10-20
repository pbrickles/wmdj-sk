import type { Post } from "sanity-schema";

export type FetchedPost = {
	mainImageUrl: string;
	body: Post["body"];
} & Post;
