import { defineField } from "@sanity-typed/types";

export const titleField = defineField({
	name: "title",
	type: "string",
	title: "Title",
	description: "Titles should be catchy, descriptive, and not too long",
	validation: (Rule) => Rule.required()
});
