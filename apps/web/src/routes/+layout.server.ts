import { fetchNavigation } from "$lib/server/helpers/fetchNavigation";

export async function load() {
	const mainNav = await fetchNavigation("main");
	const footerNav = await fetchNavigation("footer");

	return {
		status: 200,
		body: {
			mainNav,
			footerNav
		}
	};
}
