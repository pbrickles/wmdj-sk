import {
	InferSchemaValues,
	defineArrayMember,
	defineConfig,
	defineField,
	defineType
} from "@sanity-typed/types";
import { titleField } from "../objects/titleField";
import { slugField } from "../objects/slugField";
import { publishedAtField } from "../objects/publishedAtField";
import { link } from "../objects/link";
import { baseConfig } from "../helpers/baseConfig";

export const linksLandingPageSchema = defineType({
	name: "linksLandingPage",
	title: "Links Landing Page",
	type: "document",
	fields: [
		titleField,
		slugField,
		publishedAtField,
		defineField({
			name: "links",
			type: "array",
			of: [defineArrayMember(link)],
			title: "Links"
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

const tempConfig = defineConfig({
	...baseConfig,
	schema: {
		types: [linksLandingPageSchema]
	}
});
type Values = InferSchemaValues<typeof tempConfig>;
export type LinksLandingPage = Extract<Values, { _type: "linksLandingPage" }>;
