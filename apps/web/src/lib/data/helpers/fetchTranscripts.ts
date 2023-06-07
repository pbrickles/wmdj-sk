import { client } from "../sanity";
import type { Transcript } from "sanity-schema";

export async function fetchTranscripts() {
	const transcripts = await client.fetch<Transcript[]>('*[_type == "transcript"]');
	return transcripts;
}
