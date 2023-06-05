import { fetchNavigation } from "$lib/data/helpers/fetchNavigation";
import { fetchPageBySlug } from "$lib/data/helpers/fetchPages";

export async function load({ params }) {
	const mainNav = await fetchNavigation("main");
	const footerNav = await fetchNavigation("footer");
	const page = await fetchPageBySlug(params.slug);

	return {
		status: 200,
		body: {
			mainNav,
			footerNav,
			page
		}
	};
}
