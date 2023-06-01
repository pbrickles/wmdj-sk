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

export const excerptPortableTextSchema = s.objectNamed({
	name: "excerptPortableText",
	title: "Excerpt",
	fields: [
		{
			name: "blocks",
			type: s.array({
				of: [excerptBlockSchema]
			})
		}
	]
});
