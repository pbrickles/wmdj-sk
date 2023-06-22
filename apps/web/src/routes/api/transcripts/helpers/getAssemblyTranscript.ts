import type { AssemblyTranscriptionData } from "$lib/types";

export const getAssemblyTranscript = async (id: string, apiKey: string) => {
	const params = {
		headers: {
			authorization: apiKey,
			Accept: "application/json"
		},
		method: "GET"
	};
	const apiUrl = `https://api.assemblyai.com/v2/transcript/${id}`;
	const response = await fetch(apiUrl, params);
	const data = await response.json();

	return data as AssemblyTranscriptionData;
};
