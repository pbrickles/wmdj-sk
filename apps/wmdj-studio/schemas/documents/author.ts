import { s } from "@sanity-typed/schema-builder";
import { mainImageSchema } from "../objects/mainImage";
import { createSlugSchema } from "../objects/createSlugSchema";

export const authorSchema = s.document({
	name: "author",
	title: "Author",
	fields: [
		{
			name: "name",
			type: s.string()
		},
		{ ...createSlugSchema(56) },
		{
			name: "mainImage",
			type: mainImageSchema.ref()
		},
		{
			name: "bio",
			type: s.array({ of: [s.block()] }),
			title: "Biography"
		},
		{
			name: "cta",
			type: s.url(),
			title: "Find out more link",
			description: "Adds a 'Find out more about me' button"
		},
		{
			name: "twitterHandle",
			type: s.string(),
			title: "Twitter handle"
		}
	],
	preview: {
		select: {
			title: "name",
			subtitle: "slug.current",
			media: "image"
		}
	}
});
