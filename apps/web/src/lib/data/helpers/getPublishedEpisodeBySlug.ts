import type { TransistorEpisode } from "$lib/types";

export const getPublishedEpisodeBySlug = (episodes: TransistorEpisode[], slug: string) => {
	return episodes.find(
		({ attributes }) => attributes.slug === slug && attributes.status === "published"
	);
};
