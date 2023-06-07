import { error } from "@sveltejs/kit";
import { fetchEpisodes, getPublishedEpisodeBySlug } from "$lib/data/helpers/fetchEpisodes.js";
import type { TransistorEpisodesResults } from "$lib/types/transistor.js";
import { fetchTranscripts, getTranscript } from "$lib/data/helpers/fetchTranscripts.js";
export async function load({ fetch, params }) {
	const episodesResponse = await fetchEpisodes(fetch);
	if (episodesResponse.ok) {
		const { data }: TransistorEpisodesResults = await episodesResponse.json();
		const episode = getPublishedEpisodeBySlug(data, params.slug);
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
	throw error(episodesResponse.status, {
		message: "Server error"
	});
}
