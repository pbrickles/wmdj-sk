// import { format } from "date-fns";

import { s } from "@sanity-typed/schema-builder";
import { createSlugSchema } from "../objects/createSlugSchema";
import { featuredEpisodeSchema } from "../objects/featuredEpisode";
import { mainImageSchema } from "../objects/mainImage";
import { excerptPortableTextSchema } from "../objects/excerptPortableText";
import { authorReferenceSchema } from "../objects/authorReference";
import { categorySchema } from "./category";
import { bodyPortableTextSchema } from "../objects/bodyPortableText";

export const postSchema = s.document({
	name: "post",
	title: "Blog Post",
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
			name: "publishedAt",
			type: s.datetime(),
			title: "Published at",
			description: "This can be used to schedule post for publishing"
		},
		{
			name: "episode",
			type: featuredEpisodeSchema.ref(),
			title: "Linked Episode",
			optional: true
		},
		{
			name: "mainImage",
			type: mainImageSchema.ref(),
			title: "Main image"
		},
		{
			name: "excerpt",
			type: excerptPortableTextSchema.ref(),
			title: "Excerpt",
			optional: true,
			description:
				"This ends up on summary pages, on Google, when people share your post in social media."
		},
		{
			name: "authors",
			title: "Authors",
			optional: true,
			type: s.array({ of: [authorReferenceSchema.ref()] })
		},
		{
			name: "categories",
			title: "Categories",
			optional: true,
			type: s.array({
				of: [s.reference({ to: [categorySchema] })]
			})
		},
		{
			name: "body",
			type: bodyPortableTextSchema.ref()
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
