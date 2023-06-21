import { s } from "@sanity-typed/schema-builder";

export const mainImageSchema = s.image({
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
});

export type MainImage = s.infer<typeof mainImageSchema>;
