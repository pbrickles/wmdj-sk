import { error } from '@sveltejs/kit';
import type { TransistorEpisodesResults } from '$lib/types/transistor';
import { TRANSISTOR_SHOW_ID, TRANSISTOR_API_KEY } from '$env/static/private';

export async function load({ fetch, params }) {
	const headers = {
		'x-api-key': TRANSISTOR_API_KEY
	};
	const res = await fetch(
		`https://api.transistor.fm/v1/episodes?show_id=${TRANSISTOR_SHOW_ID}&pagination[per]=1000`,
		{ method: 'GET', headers }
	);
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
			message: 'Server error'
		});
	}

	throw error(404, {
		message: 'Episode not found'
	});
}
