import type { TransistorEpisode } from "$lib/types";

export const getSeries = (episodes: TransistorEpisode[]) => {
	const obj: Record<number, TransistorEpisode[]> = {};
	episodes.forEach((episode) => {
		const season = episode.attributes.season;
		if (!season) {
			obj[0] ? obj[0].push(episode) : (obj[0] = [episode]);
		} else {
			obj[season] ? obj[season].push(episode) : (obj[season] = [episode]);
		}
	});
	return obj;
};
