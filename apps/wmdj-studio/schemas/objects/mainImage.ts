import { s } from "@sanity-typed/schema-builder";

export const mainImageSchema = s.objectNamed({
	name: "mainImage",
	title: "Image",
	fields: [
		{
			name: "image",
			type: s.image(),
			title: "Image Asset"
		},
		{
			name: "caption",
			type: s.string(),
			title: "Caption"
		},
		{
			name: "alt",
			type: s.string(),
			title: "Alternative text",
			description: "Important for SEO and accessibility."
		}
	],
	preview: {
		select: {
			imageUrl: "asset.url",
			title: "caption"
		}
	}
});
