import { defineType, defineField } from "@sanity-typed/types";

export const categoryReferenceSchema = defineType({
	name: "productCategories",
	title: "Product Categories",
	type: "object",
	fields: [
		defineField({
			name: "category",
			type: "reference",
			to: [
				{
					type: "productCategory"
				}
			]
		})
	]
});
