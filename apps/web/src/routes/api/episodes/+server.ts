import { TRANSISTOR_SHOW_ID, TRANSISTOR_API_KEY } from "$env/static/private";
import type { TransistorEpisodesResults } from "$lib/types/transistor.js";

export async function GET({ url }) {
	const perPage = url.searchParams.get("perPage");

	const API_ENDPOINT = `https://api.transistor.fm/v1/episodes?show_id=${TRANSISTOR_SHOW_ID}&pagination[per]=${
		perPage ?? 1000
	}`;
	try {
		const response = await fetch(API_ENDPOINT, {
			headers: {
				Accept: "application/json",
				"x-api-key": TRANSISTOR_API_KEY
			}
		});
		const data = (await response.json()) as TransistorEpisodesResults;
		return new Response(JSON.stringify({ data }), {
			status: response.status,
			headers: { contentType: "application/json" }
		});
	} catch (error) {
		if (error instanceof Error) {
			return new Response(JSON.stringify({ error: error.message }), { status: 500 });
		}
		return new Response(JSON.stringify({ error }), { status: 500 });
	}
}
