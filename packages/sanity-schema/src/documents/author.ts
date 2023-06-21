import { InferSchemaValues, defineField, defineType, defineConfig } from "@sanity-typed/types";
import { bioPortableTextSchema, cta, nameField, mainImage } from "../objects";
import { baseConfig } from "../helpers/baseConfig";

export const authorSchema = defineType({
	name: "author",
	title: "Author",
	type: "document",
	fields: [
		nameField,
		defineField({
			name: "slug",
			type: "slug",
			title: "Slug",
			options: {
				source: "name",
				maxLength: 96
			}
		}),
		defineField({ ...mainImage, title: "Image", name: "image" }),
		defineField({ ...bioPortableTextSchema, name: "bio" }),
		cta("Find out more link", "Adds a 'Find out more about me' button"),
		defineField({
			name: "twitterHandle",
			type: "string",
			title: "Twitter handle"
		})
	],
	preview: {
		select: {
			title: "name",
			subtitle: "slug.current",
			media: "image"
		}
	}
});

const tempConfig = defineConfig({
	...baseConfig,
	schema: {
		types: [authorSchema]
	}
});

type Values = InferSchemaValues<typeof tempConfig>;
export type Author = Extract<Values, { _type: "author" }>;
