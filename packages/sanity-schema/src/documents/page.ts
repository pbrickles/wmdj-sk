// import { format } from "date-fns";

import { s } from "@sanity-typed/schema-builder";
import { mainImageSchema } from "../objects/mainImage";
import { bodyPortableTextSchema } from "../objects/bodyPortableText";

export const pageSchema = s.document({
	name: "page",
	title: "Page",
	fields: [
		{
			name: "title",
			type: s.string(),
			title: "Title",
			description: "Titles should be catchy, descriptive, and not too long"
		},
		{
			name: "slug",
			type: s.slug({
				options: {
					maxLength: 96
				}
			})
		},
		{
			name: "image",
			type: mainImageSchema,
			title: "Main image"
		},
		{
			name: "publishedAt",
			type: s.datetime(),
			title: "Published at",
			description: "This can be used to schedule post for publishing"
		},
		{
			name: "body",
			type: bodyPortableTextSchema
		},
		{
			name: "buyMeACoffee",
			type: s.boolean(),
			title: "Include Buy Me A Coffee button?",
			optional: true
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

export type Page = s.infer<typeof pageSchema>;
