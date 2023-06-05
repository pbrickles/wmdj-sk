import EpisodeList from "$lib/components/EpisodeList/EpisodeList.svelte";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ data }) => {
	return {
		...data,
		EpisodeListComponent: EpisodeList
	};
};
