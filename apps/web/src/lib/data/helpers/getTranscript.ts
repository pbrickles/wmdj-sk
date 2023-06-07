import type { Transcript } from "sanity-schema";

export const getTranscript = (episodeTitle: string, transcripts: Array<Transcript>) => {
	return transcripts.find((t) => t.episode?.episode === episodeTitle && t.createTranscriptPage);
};
