import type { TransistorEpisode } from "$lib/types";

export const getEpisodeById = (episodeId: string, episodes: TransistorEpisode[]) => {
	const episode = episodes.find((episode) => episode.id === episodeId);
	return episode ?? null;
};
