import { getEpisodesBySeriesParam } from "$lib/data/helpers/getEpisodesBySeriesParam";
import { error } from "@sveltejs/kit";

export async function load({ params, parent }) {
	const parentData = await parent();
	const seriesEpisodes = getEpisodesBySeriesParam(parentData.body.episodes, params.series);
	if (!seriesEpisodes.length) {
		throw error(404, {
			message: "Series not found"
		});
	}

	return {
		status: 200,
		body: {
			seriesEpisodes,
			seriesNumber: parseInt(params.series.replace("series-", ""))
		}
	};
}
