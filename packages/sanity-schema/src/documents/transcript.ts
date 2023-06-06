import { s } from "@sanity-typed/schema-builder";
import { featuredEpisodeSchema } from "../objects/featuredEpisode";
import { bodyPortableTextSchema } from "../objects/bodyPortableText";

export const transcriptSchema = s.document({
	name: "transcript",
	title: "Transcript",
	fields: [
		{
			name: "title",
			type: s.string(),
			title: "Title",
			description: "Season and episode number would probably work well"
		},
		{
			name: "assemblyAiId",
			type: s.string(),
			title: "Assembly AI id"
		},
		{
			name: "episode",
			type: featuredEpisodeSchema,
			title: "Linked Episode"
		},
		{
			name: "body",
			type: bodyPortableTextSchema,
			title: "Body"
		},
		{ name: "createTranscriptPage", type: s.boolean(), default: false }
	]
});
