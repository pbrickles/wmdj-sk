import type { TransistorEpisode } from "$lib/types";

export const getAvailableEpisodeSeries = (episodes: TransistorEpisode[]): number[] => {
	const seasons = episodes.map((episode) => episode.attributes.season);
	const uniqueSeasons = [...new Set(seasons)];
	return uniqueSeasons.sort((a, b) => a - b);
};
