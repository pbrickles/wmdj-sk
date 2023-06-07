import { client } from "../sanity";
import type { Transcript } from "sanity-schema";

export async function fetchTranscripts() {
	const transcripts = await client.fetch<Transcript[]>('*[_type == "transcript"]');
	return transcripts;
}

export const getTranscript = (episodeTitle: string, transcripts: Array<Transcript>) => {
	return transcripts.find((t) => t.episode?.episode === episodeTitle && t.createTranscriptPage);
};
