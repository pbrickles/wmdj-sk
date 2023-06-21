import { s } from "@sanity-typed/schema-builder";

export const excerptBlockSchema = s.block({
	styles: [{ title: "Normal", value: "normal" }],
	lists: [],
	marks: {
		decorators: [
			{ title: "Strong", value: "strong" },
			{ title: "Emphasis", value: "em" },
			{ title: "Code", value: "code" }
		],
		annotations: []
	}
});

export const excerptPortableTextSchema = s.array({
	of: [excerptBlockSchema]
});

export type ExcerptPortableText = s.infer<typeof excerptPortableTextSchema>;
