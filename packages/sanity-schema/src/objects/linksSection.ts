import { s } from "@sanity-typed/schema-builder";
import { bodyPortableTextSchema } from "./bodyPortableText";
import { linkSchema } from "./link";

export const linkSectionSchema = s.objectNamed({
	title: "Links Section",
	name: "linksSection",
	fields: [
		{
			name: "linkSectionTitle",
			type: s.string(),
			title: "Section Title"
		},
		{
			name: "linkSectionDescription",
			type: bodyPortableTextSchema,
			description: "Add a short description of this section if you like"
		},
		{
			name: "links",
			title: "Links",
			type: s.array({
				of: [linkSchema]
			})
		}
	]
});
