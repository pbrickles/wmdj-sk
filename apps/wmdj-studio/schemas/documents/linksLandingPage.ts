import { s } from "@sanity-typed/schema-builder";
import { createSlugSchema } from "../objects/createSlugSchema";
import { linkSchema } from "../objects/link";

export const linksLandingPageSchema = s.document({
	name: "linksLandingPage",
	title: "Links Landing Page",
	fields: [
		{
			name: "title",
			type: s.string(),
			title: "Title",
			description: "Titles should be catchy, descriptive, and not too long"
		},
		{ ...createSlugSchema(96) },
		{
			name: "publishedAt",
			type: s.datetime(),
			title: "Published at",
			description: "This can be used to schedule post for publishing"
		},
		{
			name: "links",
			title: "Links",
			type: s.array({ of: [linkSchema.ref()] })
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
	],
	preview: {
		select: {
			title: "title",
			publishedAt: "publishedAt",
			slug: "slug",
			media: "mainImage"
		}
	}
});
