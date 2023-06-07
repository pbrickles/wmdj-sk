import { fetchEpisodes, getPublishedEpisodeBySlug } from "$lib/data/helpers/fetchEpisodes";
import { fetchTranscripts, getTranscript } from "$lib/data/helpers/fetchTranscripts";
import type { TransistorEpisodesResults, TransistorEpisode } from "$lib/types/transistor";
import { error } from "@sveltejs/kit";

export async function load({ params, fetch }) {
	const episodesResponse = await fetchEpisodes(fetch);
	const episodes: TransistorEpisode[] = [];
	if (episodesResponse.ok) {
		const { data }: TransistorEpisodesResults = await episodesResponse.json();
		data.forEach((episode) => {
			episodes.push(episode);
		});
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
				transcript: episodeTranscript,
				episodes
			}
		};
	}
	throw error(500, {
		message: "Server error"
	});
}
