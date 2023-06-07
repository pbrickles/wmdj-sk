import { TRANSISTOR_SHOW_ID, TRANSISTOR_API_KEY } from "$env/static/private";
import type { TransistorEpisode } from "$lib/types";
import type { PageServerLoadEvent } from "../../../routes/$types";

export const fetchEpisodes = async (fetch: PageServerLoadEvent["fetch"]) => {
	const headers = {
		"x-api-key": TRANSISTOR_API_KEY
	};

	const result = await fetch(
		`https://api.transistor.fm/v1/episodes?show_id=${TRANSISTOR_SHOW_ID}&pagination[per]=1000`,
		{ method: "GET", headers }
	);
	return result;
};

export const fetchEpisodesById = async (fetch: PageServerLoadEvent["fetch"], id: string) => {
	const headers = {
		"x-api-key": TRANSISTOR_API_KEY
	};

	const result = await fetch(`https://api.transistor.fm/v1/episodes/${id}`, {
		method: "GET",
		headers
	});
	return result;
};

export const getPublishedEpisodeBySlug = (episodes: TransistorEpisode[], slug: string) => {
	return episodes.find(
		({ attributes }) => attributes.slug === slug && attributes.status === "published"
	);
};
