import { defineField } from "@sanity-typed/types";

export const slugField = defineField({
	name: "slug",
	type: "slug",
	title: "Slug",
	options: {
		source: "title",
		maxLength: 96
	},
	validation: (Rule) => Rule.required()
});
