// import { format } from "date-fns";

import { s } from "@sanity-typed/schema-builder";
import { createSlugSchema } from "../objects/createSlugSchema";
import { mainImageSchema } from "../objects/mainImage";
import { bodyPortableTextSchema } from "../objects/bodyPortableText";
import { linkSectionSchema } from "../objects/linksSection";

export const linksPageSchema = s.document({
	name: "linksPage",
	title: "Links Page",
	fields: [
		{
			name: "title",
			type: s.string(),
			title: "Title",
			description: "Titles should be catchy, descriptive, and not too long"
		},
		{
			...createSlugSchema(96)
		},
		{
			name: "image",
			type: mainImageSchema
		},
		{
			name: "publishedAt",
			type: s.datetime(),
			title: "Published at",
			description: "This can be used to schedule post for publishing"
		},
		{
			name: "body",
			type: bodyPortableTextSchema,
			title: "Body"
		},
		{
			name: "links",
			title: "Links",
			type: s.array({
				of: [linkSectionSchema]
			})
		}
	],
	orderings: [
		{
			name: "publishingDateAsc",
			title: "Publishing date new->old",
			by: [
				{
					field: "publishedAt",
					direction: "asc"
				},
				{
					field: "title",
					direction: "asc"
				}
			]
		},
		{
			name: "publishingDateDesc",
			title: "Publishing date old->new",
			by: [
				{
					field: "publishedAt",
					direction: "desc"
				},
				{
					field: "title",
					direction: "asc"
				}
			]
		}
	]
});
