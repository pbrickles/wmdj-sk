import { format } from "date-fns";
import { mainImage } from "../objects/mainImage";
import {
	InferSchemaValues,
	defineField,
	defineType,
	defineConfig,
	defineArrayMember
} from "@sanity-typed/types";
import {
	bodySchema,
	featuredEpisodeSchema,
	link,
	publishedAtField,
	slugField,
	titleField
} from "../objects";
import { baseConfig } from "../helpers/baseConfig";
import { productCategorySchema } from "./productCategory";

export const productSchema = defineType({
	name: "product",
	title: "Product",
	type: "document",
	fields: [
		titleField,
		slugField,
		publishedAtField,
		defineField({
			name: "brand",
			type: "reference",
			to: {
				type: "productBrand"
			},
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: "shopName",
			type: "string",
			title: "Shop Name"
		}),
		defineField({
			name: "summary",
			type: "text",
			title: "Summary"
		}),
		defineField(mainImage),
		defineField({
			name: "images",
			type: "array",
			of: [defineArrayMember(mainImage)],
			title: "Images"
		}),
		defineField(bodySchema),
		defineField({
			name: "categories",
			title: "Categories",
			type: "array",
			of: [
				defineArrayMember({
					type: "reference",
					to: [{ type: "productCategory" }]
				})
				// defineArrayMember(productCategorySchema)
			]
		}),
		defineField({
			name: "price",
			type: "number",
			title: "Price",
			description: "Price of the product in GBP"
		}),
		defineField({
			name: "link",
			type: "url",
			title: "Link",
			description: "Link to the product on the external site"
		}),
		defineField({ ...featuredEpisodeSchema, name: "featuredEpisode" })
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
		types: [productSchema]
	}
});

type Values = InferSchemaValues<typeof tempConfig>;
export type Product = Extract<Values, { _type: "product" }>;
