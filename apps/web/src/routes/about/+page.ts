import Page from "$lib/components/Page/Page.svelte";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ data }) => {
	return {
		...data,
		Component: Page
	};
};
