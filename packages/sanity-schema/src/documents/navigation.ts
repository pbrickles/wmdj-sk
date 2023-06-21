import { navItemSchema } from "../objects/navItem";
import { InferSchemaValues, defineConfig, defineField, defineType } from "@sanity-typed/types";
import { titleField } from "../objects/titleField";
import { baseConfig } from "../helpers/baseConfig";

export const navigationSchema = defineType({
	name: "navigation",
	title: "Navigation",
	type: "document",
	fields: [
		titleField,
		defineField({
			name: "items",
			type: "array",
			of: [navItemSchema],
			title: "Nav Items",
			description: "Add nav items",
			options: {
				layout: "tags"
			}
		})
	]
});

const tempConfig = defineConfig({
	...baseConfig,
	schema: {
		types: [navigationSchema]
	}
});
type Values = InferSchemaValues<typeof tempConfig>;
export type Navigation = Extract<Values, { _type: "navigation" }>;
