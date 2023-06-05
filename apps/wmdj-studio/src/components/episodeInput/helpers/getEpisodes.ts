import { TransistorEpisodeInterface } from "../types/transistorEpisodes";

export const getEpisodes = async () => {
	if (!process.env.SANITY_STUDIO_FUNCTION_URL)
		throw new Error("SANITY_STUDIO_FUNCTION_URL is not defined");
	if (!process.env.SANITY_STUDIO_TRANSISTOR_FM_SHOW_ID)
		throw new Error("SANITY_STUDIO_TRANSISTOR_FM_SHOW_ID is not defined");
	if (!process.env.SANITY_STUDIO_TRANSISTOR_FM_API_KEY)
		throw new Error("SANITY_STUDIO_TRANSISTOR_FM_API_KEY is not defined");
	const response = await fetch(
		`${process.env.SANITY_STUDIO_FUNCTION_URL}/.netlify/functions/get-episodes`,
		{
			body: JSON.stringify({
				showId: process.env.SANITY_STUDIO_TRANSISTOR_FM_SHOW_ID,
				apiKey: process.env.SANITY_STUDIO_TRANSISTOR_FM_API_KEY
			}),
			method: "POST"
		}
	);
	const { data }: { data: TransistorEpisodeInterface[] } = await response.json();
	return data;
};
