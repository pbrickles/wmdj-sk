// import { format } from "date-fns";

import { defineType, defineField, defineConfig, InferSchemaValues } from "@sanity-typed/types";

import { bodySchema, mainImage, publishedAtField, slugField, titleField } from "../objects";
import { baseConfig } from "../helpers/baseConfig";

export const pageSchema = defineType({
	name: "page",
	title: "Page",
	type: "document",
	fields: [
		titleField,
		slugField,
		defineField(mainImage),
		publishedAtField,
		defineField(bodySchema),
		defineField({
			name: "buyMeACoffee",
			type: "boolean",
			title: "Include Buy Me A Coffee button?"
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
		types: [pageSchema]
	}
});
type Values = InferSchemaValues<typeof tempConfig>;
export type Page = Extract<Values, { _type: "page" }>;
