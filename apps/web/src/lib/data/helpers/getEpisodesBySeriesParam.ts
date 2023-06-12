import type { TransistorEpisode } from "$lib/types";

const matcher = /series-\d+/;

export const getEpisodesBySeriesParam = (episodes: TransistorEpisode[], seriesParam: string) => {
	if (!seriesParam.match(matcher)) {
		return [];
	}
	const series = parseInt(seriesParam.replace("series-", ""));
	return episodes.filter((episode) => episode.attributes.season === series);
};
