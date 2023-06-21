import { InferSchemaValues, defineConfig, defineField, defineType } from "@sanity-typed/types";
import { titleField } from "../objects";
import { baseConfig } from "../helpers/baseConfig";

export const productCategorySchema = defineType({
	name: "productCategory",
	type: "document",
	title: "Product Category",
	fields: [
		titleField,
		defineField({
			name: "description",
			type: "text",
			title: "Description"
		})
	]
});

const tempConfig = defineConfig({
	...baseConfig,
	schema: {
		types: [productCategorySchema]
	}
});
type Values = InferSchemaValues<typeof tempConfig>;
export type ProductCategory = Extract<Values, { _type: "productCategory" }>;
