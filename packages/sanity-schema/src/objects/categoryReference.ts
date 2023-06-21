import { categorySchema } from "../documents";
import { defineType } from "@sanity-typed/types";

export const categoryReferenceSchema = defineType({
	name: "categories",
	title: "Categories",
	type: "object",
	fields: [
		{
			name: "category",
			type: "reference",
			to: [categorySchema]
		}
	]
});
