// import { format } from "date-fns";
import {
	InferSchemaValues,
	defineArrayMember,
	defineConfig,
	defineField,
	defineType
} from "@sanity-typed/types";
import {
	mainImage,
	titleField,
	slugField,
	publishedAtField,
	bodySchema,
	linkSectionSchema
} from "../objects";
import { baseConfig } from "../helpers/baseConfig";

export const linksPageSchema = defineType({
	name: "linksPage",
	type: "document",
	title: "Links Page",
	fields: [
		titleField,
		slugField,
		defineField(mainImage),
		publishedAtField,
		defineField(bodySchema),
		defineField({
			name: "links",
			type: "array",
			of: [defineArrayMember(linkSectionSchema)],
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
	]
});

const tempConfig = defineConfig({
	...baseConfig,
	schema: {
		types: [linksPageSchema]
	}
});
type Values = InferSchemaValues<typeof tempConfig>;
export type LinksPage = Extract<Values, { _type: "linksPage" }>;
