import { defineType, defineField } from "@sanity-typed/types";

export const categoryReferenceSchema = defineType({
	name: "categories",
	title: "Categories",
	type: "object",
	fields: [
		defineField({
			name: "category",
			type: "reference",
			to: [
				{
					type: "category"
				}
			]
		})
	]
});
