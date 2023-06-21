import { defineType, defineField, defineConfig, InferSchemaValues } from "@sanity-typed/types";
import { titleField } from "../objects/titleField";
import { baseConfig } from "../helpers/baseConfig";

export const categorySchema = defineType({
	name: "category",
	title: "Category",
	type: "document",
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
		types: [categorySchema]
	}
});
type Values = InferSchemaValues<typeof tempConfig>;
export type Category = Extract<Values, { _type: "category" }>;
