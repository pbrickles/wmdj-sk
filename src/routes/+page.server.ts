import { fetchEpisodes } from '$lib/server/helpers/fetchEpisodes.js';
import type { TransistorEpisodesResults } from '$lib/types/transistor.js';
import { error } from '@sveltejs/kit';

export async function load({ fetch }) {
	const res = await fetchEpisodes(fetch);
	if (res.ok) {
		const { data }: TransistorEpisodesResults = await res.json();
		if (data) {
			return {
				status: 200,
				body: {
					episodes: data
				}
			};
		}
	}
	if (res.status >= 500) {
		throw error(res.status, {
			message: 'Server error'
		});
	}

	throw error(404, 'Episodes not found');
}
