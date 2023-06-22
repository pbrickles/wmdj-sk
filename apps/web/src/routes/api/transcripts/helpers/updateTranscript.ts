import { updateTranscriptBody } from "./updateTranscriptBody";
import { client } from "$lib/data/sanity";
import type { AssemblyTranscriptionData } from "$lib/types";
import type { Transcript } from "sanity-schema";

export const updateTranscript = async (
	transcript: AssemblyTranscriptionData
): Promise<{ status: 200 | 400 | 500; message: string }> => {
	const query = `*[_type == "transcript" && assemblyAiId == $transcriptionId][0]{
    id,
    _id
  }`;
	const result = await client.fetch(query, { transcriptionId: transcript.id }).catch((err) => {
		return { status: 500, message: `Sanity query error: ${err}` };
	});
	if (!result) {
		return {
			status: 400,
			message: `No sanity transcript found for ${transcript.id}`
		};
	}
	const { _id } = result as Transcript;
	if (!_id) {
		return {
			status: 400,
			message: `No sanity id found for ${transcript.id}`
		};
	}
	console.log("Sanity transcript found", _id);
	await updateTranscriptBody(_id, transcript);
	return { status: 200, message: "Success" };
};
