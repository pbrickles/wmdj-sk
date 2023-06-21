import type { AssemblyTranscriptionData } from "$lib/types";
import type { BodyPortableText } from "sanity-schema";
import { client } from "../sanity";

async function updateTranscriptBody(id: string, data: AssemblyTranscriptionData) {
	const body: BodyPortableText[] = [];
	data.utterances.forEach((u) => {
		body.push(
			{
				_type: "block",
				children: [
					{
						_type: "span",
						text: u.speaker === "A" ? "Helen" : u.speaker,
						marks: ["strong"],
						_key: `${u.confidence}-${u.start}`
					}
				],
				style: "normal",
				markDefs: []
			},
			{
				_type: "block",
				children: [
					{
						_type: "span",
						text: u.text,
						marks: [],
						_key: `${u.confidence}-${u.end}`
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
