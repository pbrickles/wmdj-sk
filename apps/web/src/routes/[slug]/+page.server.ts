import { fetchPageBySlug } from "$lib/data/helpers/fetchPages";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
	console.log(params);
	try {
		const page = await fetchPageBySlug(params.slug);
		if (!page) {
			throw error(404, "Page not found");
		}
		return {
			status: 200,
			body: {
				page
			}
		};
	} catch (e) {
		console.error(e);
		throw error(500, "Server error");
	}
}
