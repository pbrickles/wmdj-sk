import EpisodeList from "$components/ui/EpisodeList/EpisodeList.svelte";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ data }) => {
	return {
		...data,
		EpisodeListComponent: EpisodeList
	};
};
