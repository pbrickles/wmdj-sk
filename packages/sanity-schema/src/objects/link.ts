import { defineField } from "@sanity-typed/types";

export const link = defineField({
	name: "link",
	type: "object",
	title: "Link",
	fields: [
		defineField({
			name: "linkUrl",
			type: "url",
			title: "Link Url",
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: "description",
			type: "string",
			title: "Short Description"
		})
	]
});
