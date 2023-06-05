import FooterNav from "$lib/components/FooterNav.svelte";
import HeaderNav from "$lib/components/HeaderNav.svelte";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ data }) => {
	return {
		...data,
		HeaderNavComponent: HeaderNav,
		FooterNavComponent: FooterNav
	};
};
