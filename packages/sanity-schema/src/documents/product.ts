import { format } from "date-fns";
import { mainImage } from "../objects/mainImage";
import {
	InferSchemaValues,
	defineField,
	defineType,
	defineConfig,
	defineArrayMember
} from "@sanity-typed/types";
import { bodySchema, link, publishedAtField, slugField, titleField } from "../objects";
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
			of: [defineArrayMember(productCategorySchema)]
		}),
		defineField({
			name: "relatedProducts",
			title: "Related Products",
			type: "array",
			of: [
				defineArrayMember({
					name: "relatedProduct",
					type: "reference",
					to: [
						{
							type: "product"
						}
					]
				})
			]
		}),
		defineField({
			name: "price",
			type: "number",
			title: "Price",
			description: "Price of the product in GBP"
		}),
		link
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
		},
		prepare({ title = "No title", publishedAt, slug = {}, media }) {
			const dateSegment = format(publishedAt, "YYYY/MM");
			const path = `/${dateSegment}/${slug.current}/`;
			return {
				title,
				media,
				subtitle: publishedAt ? path : "Missing publishing date"
			};
		}
	}
});

const tempConfig = defineConfig({
	...baseConfig,
	schema: {
		types: [productSchema]
	}
});

type Values = InferSchemaValues<typeof tempConfig>;
export type Product = Extract<Values, { _type: "product" }>;
