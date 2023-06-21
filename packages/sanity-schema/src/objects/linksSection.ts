import { defineType, defineField, defineArrayMember } from "@sanity-typed/types";
import { bodySchema } from "./bodyPortableText";
import { link } from "./link";

export const linkSectionSchema = defineType({
	title: "Links Section",
	name: "linksSection",
	type: "object",
	fields: [
		defineField({
			name: "linkSectionTitle",
			type: "string",
			title: "Section Title"
		}),
		defineField({
			...bodySchema,
			name: "linkSectionDescription",
			description: "Add a short description of this section if you like"
		}),
		defineField({
			name: "links",
			title: "Links",
			type: "array",
			of: [defineArrayMember(link)]
		})
	]
});
