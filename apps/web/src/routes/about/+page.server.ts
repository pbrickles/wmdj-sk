import { fetchPageBySlug } from "$lib/data/helpers/fetchPages";
import type { PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async () => {
	try {
		const page = await fetchPageBySlug("about");
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
};
