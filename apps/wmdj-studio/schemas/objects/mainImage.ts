import { s } from "@sanity-typed/schema-builder";

export const mainImageSchema = s.objectNamed({
	name: "mainImage",
	title: "Image",
	fields: [
		{
			name: "asset",
			type: s.image({
				fields: [
					{
						name: "caption",
						type: s.string(),
						optional: true
					},
					{
						name: "alt",
						type: s.string(),
						title: "Alternative text",
						description: "Important for SEO and accessibility."
					}
				],
				options: {
					hotspot: true
				}
			})
		}
	],
	preview: {
		select: {
			imageUrl: "asset.url",
			title: "caption"
		}
	}
});
