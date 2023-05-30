import type { PageServerLoadEvent } from "../../../routes/$types";
import { TRANSISTOR_SHOW_ID, TRANSISTOR_API_KEY } from "$env/static/private";

export const fetchEpisodes = async (fetch: PageServerLoadEvent["fetch"]) => {
	const headers = {
		"x-api-key": TRANSISTOR_API_KEY
	};
	return await fetch(
		`https://api.transistor.fm/v1/episodes?show_id=${TRANSISTOR_SHOW_ID}&pagination[per]=1000`,
		{ method: "GET", headers }
	);
};
