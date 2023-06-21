import { link } from "../objects/link";
import { mainImage } from "../objects";
import {
	defineField,
	defineType,
	defineArrayMember,
	InferSchemaValues,
	defineConfig
} from "@sanity-typed/types";
import { baseConfig } from "../helpers/baseConfig";

export const bannerSchema = defineType({
	name: "banner",
	title: "Banner",
	type: "document",
	fields: [
		defineField({
			name: "mainText",
			type: "string",
			title: "Main text"
		}),
		defineField({
			name: "text",
			type: "string",
			title: "Text",
			description: "The short piece of text to display in the banner"
		}),
		defineField({
			name: "slug",
			type: "slug",
			title: "Slug",
			options: {
				source: "mainText",
				maxLength: 96
			}
		}),
		mainImage,
		defineField({
			name: "ctas",
			type: "array",
			of: [defineArrayMember(link)],
			title: "CTAs",
			description: "Add CTAs",
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: "dismissedTab",
			type: "string",
			title: "Dismissed Tab",
			description: "If the banner is dismissed, this can allow the user to view it again"
		})
	]
});

const tempConfig = defineConfig({
	...baseConfig,
	schema: {
		types: [bannerSchema]
	}
});
type Values = InferSchemaValues<typeof tempConfig>;
export type Banner = Extract<Values, { _type: "banner" }>;
