// import { format } from "date-fns";

import { baseConfig } from "../helpers/baseConfig";
import {
	titleField,
	slugField,
	publishedAtField,
	authorReferenceSchema,
	excerptPortableTextSchema,
	featuredEpisodeSchema,
	mainImage,
	bodySchema,
	categoryReferenceSchema
} from "../objects";
import {
	InferSchemaValues,
	defineArrayMember,
	defineConfig,
	defineField,
	defineType
} from "@sanity-typed/types";

export const postSchema = defineType({
	name: "post",
	title: "Blog Post",
	type: "document",
	fields: [
		titleField,
		slugField,
		publishedAtField,
		defineField({ ...featuredEpisodeSchema, name: "featuredEpisode" }),
		defineField(mainImage),
		defineField(excerptPortableTextSchema),
		defineField(bodySchema),
		defineField({
			name: "authors",
			title: "Authors",
			type: "array",
			of: [defineArrayMember(authorReferenceSchema)]
		}),
		defineField({
			name: "categories",
			title: "Categories",
			type: "array",
			of: [defineArrayMember(categoryReferenceSchema)]
		})
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

const tempConfig = defineConfig({
	...baseConfig,
	schema: {
		types: [postSchema]
	}
});
type Values = InferSchemaValues<typeof tempConfig>;
export type Post = Extract<Values, { _type: "post" }>;
export type PostBody = Post["body"];
