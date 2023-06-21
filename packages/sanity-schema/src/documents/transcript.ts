import { InferSchemaValues, defineConfig, defineField, defineType } from "@sanity-typed/types";
import { bodySchema, featuredEpisodeSchema } from "../objects";
import { baseConfig } from "../helpers/baseConfig";

export const transcriptSchema = defineType({
	type: "document",
	name: "transcript",
	title: "Transcript",
	fields: [
		defineField({
			name: "title",
			type: "string",
			title: "Title",
			description: "Season and episode number would probably work well"
		}),
		defineField({
			name: "assemblyAiId",
			type: "string",
			title: "Assembly AI id"
		}),
		defineField({ ...featuredEpisodeSchema, name: "episode" }),
		defineField(bodySchema),
		defineField({ name: "createTranscriptPage", type: "boolean" })
	]
});

const tempConfig = defineConfig({
	...baseConfig,
	schema: {
		types: [transcriptSchema]
	}
});
type Values = InferSchemaValues<typeof tempConfig>;
export type Transcript = Extract<Values, { _type: "transcript" }>;
