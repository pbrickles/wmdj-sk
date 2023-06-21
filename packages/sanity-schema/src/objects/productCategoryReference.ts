import { defineType } from "@sanity-typed/types";
import { productCategorySchema } from "../documents/productCategory";

export const categoryReferenceSchema = defineType({
	name: "productCategories",
	title: "Product Categories",
	type: "object",
	fields: [
		{
			name: "category",
			type: "reference",
			to: [productCategorySchema]
		}
	]
});
