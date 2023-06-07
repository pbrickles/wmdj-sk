import { getPublishedEpisodeBySlug } from "$lib/data/helpers/fetchEpisodes.js";
import { fetchTranscripts, getTranscript } from "$lib/data/helpers/fetchTranscripts.js";
import { error } from "@sveltejs/kit";
export async function load({ params, parent }) {
	const parentData = await parent();
	const episode = getPublishedEpisodeBySlug(parentData.body.episodes, params.slug);
	if (!episode) {
		throw error(404, {
			message: "Episode not found"
		});
	}
	const transcripts = await fetchTranscripts();
	const episodeTranscript = getTranscript(episode.attributes.title, transcripts);

	return {
		status: 200,
		body: {
			episode,
			episodeTranscript
		}
	};
}
