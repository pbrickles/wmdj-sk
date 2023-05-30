import { fetchEpisodes } from "$lib/server/helpers/fetchEpisodes.js";
import type { TransistorEpisodesResults } from "$lib/types/transistor.js";
import { error } from "@sveltejs/kit";

export async function load({ fetch, params }) {
	const res = await fetchEpisodes(fetch);
	if (res.ok) {
		const { data }: TransistorEpisodesResults = await res.json();
		const episode = data.find((episode) => episode.attributes.slug === params.slug);
		if (episode) {
			return {
				status: 200,
				body: {
					episode
				}
			};
		}
	}
	if (res.status >= 500) {
		throw error(res.status, {
			message: "Server error"
		});
	}

	throw error(404, {
		message: "Episode not found"
	});
}
