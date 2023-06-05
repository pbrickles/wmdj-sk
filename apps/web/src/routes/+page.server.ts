import { fetchEpisodes } from "$lib/data/helpers/fetchEpisodes.js";
import type { TransistorEpisodesResults } from "$lib/types";
import { error } from "@sveltejs/kit";

export async function load({ fetch }) {
	const res = await fetchEpisodes(fetch);

	if (res.ok) {
		const { data }: TransistorEpisodesResults = await res.json();
		if (data) {
			const episodes = data.filter((episode) => episode.attributes.status === "published");
			return {
				status: 200,
				body: {
					episodes
				}
			};
		}
	}
	if (res.status >= 500) {
		throw error(res.status, {
			message: "Server error"
		});
	}

	throw error(404, "Episodes not found");
}
