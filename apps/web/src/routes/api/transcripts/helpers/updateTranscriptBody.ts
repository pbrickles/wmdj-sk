import { client } from "$lib/data/sanity";
import type { AssemblyTranscriptionData } from "$lib/types";
import type { TranscriptBody } from "sanity-schema";

async function updateTranscriptBody(id: string, data: AssemblyTranscriptionData) {
	const body: Omit<TranscriptBody, "_key"> = [];
	data.utterances.forEach((u) => {
		body.push(
			{
				_key: `${u.confidence}-${u.start}_key`,
				_type: "block",
				children: [
					{
						_type: "span",
						text: u.speaker === "A" ? "Helen" : u.speaker,
						marks: ["strong"],
						_key: `${u.confidence}-${u.start}_child`
					}
				],
				style: "normal",
				markDefs: []
			},
			{
				_key: `${u.confidence}-${u.end}_key`,
				_type: "block",
				children: [
					{
						_type: "span",
						text: u.text,
						marks: [],
						_key: `${u.confidence}-${u.end}_child`
					}
				],
				style: "normal",
				markDefs: []
			}
		);
	});
	await client.patch(id).set({ body }).commit({ autoGenerateArrayKeys: true });
}

export { updateTranscriptBody };
