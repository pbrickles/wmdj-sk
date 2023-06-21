import { InferSchemaValues, defineConfig, defineField, defineType } from "@sanity-typed/types";
import { titleField } from "../objects";
import { baseConfig } from "../helpers/baseConfig";

export const productBrandSchema = defineType({
	name: "productBrand",
	type: "document",
	title: "Product Brand",
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
		types: [productBrandSchema]
	}
});
type Values = InferSchemaValues<typeof tempConfig>;
export type ProductBrand = Extract<Values, { _type: "productBrand" }>;
