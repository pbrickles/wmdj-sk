import { s } from "@sanity-typed/schema-builder";

export const bioBlockSchema = s.block({
	styles: [{ title: "Normal", value: "normal" }],
	lists: [],
	marks: {
		decorators: [
			{ title: "Strong", value: "strong" },
			{ title: "Emphasis", value: "em" },
			{ title: "Code", value: "code" }
		]
	}
});

export const bioPortableTextSchema = s.objectNamed({
	name: "bioPortableText",
	title: "Excerpt",
	fields: [
		{
			name: "blocks",
			type: s.array({
				of: [bioBlockSchema]
			})
		}
	]
});