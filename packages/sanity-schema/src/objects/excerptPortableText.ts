import { defineArrayMember, defineType } from "@sanity-typed/types";

export const excerptPortableTextSchema = defineType({
	name: "excerptPortableText",
	title: "Excerpt",
	type: "array",
	description:
		"This ends up on summary pages, on Google, when people share your post in social media.",
	of: [
		defineArrayMember({
			name: "block",
			title: "Block",
			type: "block",
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
		})
	]
});

export const excerptSchema = defineType({ ...excerptPortableTextSchema, name: "excerpt" });
