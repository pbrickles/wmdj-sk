import { updateTranscriptBody } from "./updateTranscriptBody";
import type { AssemblyTranscriptionData } from "$lib/types";
import { client } from "../sanity";
import type { Transcript } from "sanity-schema";

export const updateTranscript = async (
	transcript: AssemblyTranscriptionData
): Promise<{ statusCode: 200 | 400 | 500; message: string }> => {
	const query = `*[_type == "transcript" && assemblyAiId == $transcriptionId][0]{
    id,
    _id
  }`;
	const result = await client.fetch(query, { transcriptionId: transcript.id }).catch((err) => {
		return { status: 500, message: `Sanity query error: ${err}` };
	});
	if (!result) {
		return {
			statusCode: 400,
			message: `No sanity transcript found for ${transcript.id}`
		};
	}
	const { _id } = result as Transcript;
	if (!_id) {
		return {
			statusCode: 400,
			message: `No sanity id found for ${transcript.id}`
		};
	}
	console.log("Sanity transcript found", _id);
	await updateTranscriptBody(_id, transcript);
	return { statusCode: 200, message: "Success" };
};
