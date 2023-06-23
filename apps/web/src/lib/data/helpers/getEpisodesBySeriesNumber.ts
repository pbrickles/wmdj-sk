import type { TransistorEpisode } from "$lib/types";

export const getEpisodesBySeriesNumber = (episodes: TransistorEpisode[], series: number) => {
	return episodes.filter((episode) => episode.attributes.season === series);
};
