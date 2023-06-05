import { fetchPostBySlug } from "$lib/data/helpers/fetchPosts";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
	try {
		const post = await fetchPostBySlug(params.slug);
		if (post) {
			return {
				status: 200,
				body: {
					post
				}
			};
		}
		throw new Error("Post not found");
	} catch (err) {
		if (err instanceof Error) {
			if (err.message === "Post not found") {
				throw error(404, {
					message: err.message
				});
			}
			throw error(500, {
				message: err.message
			});
		}
		throw error(500, {
			message: "Server error"
		});
	}
}
