import { fetchNavigation } from "$lib/data/helpers/fetchNavigation";
import { fetchPageBySlug } from "$lib/data/helpers/fetchPages";
import type { TransistorEpisode, TransistorEpisodesResults } from "$lib/types";

export async function load({ params, fetch }) {
	const mainNav = await fetchNavigation("main");
	const footerNav = await fetchNavigation("footer");
	const page = await fetchPageBySlug(params.slug);
	const episodesResponse = await fetch("/api/episodes");
	const episodes: TransistorEpisode[] = [];
	if (episodesResponse.ok) {
		const { data }: { data: TransistorEpisodesResults } = await episodesResponse.json();
		data.data.forEach((episode) => {
			if (episode.attributes.status === "published") {
				episodes.push(episode);
			}
		});
	}
	return {
		status: 200,
		body: {
			mainNav,
			footerNav,
			page,
			episodes
		}
	};
}
