import { fetchPageBySlug } from "$lib/server/helpers/fetchPages.js";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
	try {
		const page = await fetchPageBySlug(params.slug);
		if (page) {
			return {
				status: 200,
				body: {
					page
				}
			};
		}
		throw new Error("Page not found");
	} catch (err) {
		if (err instanceof Error) {
			if (err.message === "Page not found") {
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
