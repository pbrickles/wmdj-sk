import { defineType, defineField } from "@sanity-typed/types";

export const authorReferenceSchema = defineType({
	name: "authorReference",
	title: "Author reference",
	type: "object",
	fields: [
		defineField({
			name: "author",
			type: "reference",
			to: [
				{
					type: "author"
				}
			]
		})
	],
	preview: {
		select: {
			title: "author.name",
			media: "author.image.asset"
		}
	}
});
