import { s } from "@sanity-typed/schema-builder";
import { mainImageSchema } from "../objects/mainImage";
import { linkSchema } from "../objects/link";
import { createSlugSchema } from "../objects/createSlugSchema";

export const bannerSchema = s.document({
	name: "banner",
	title: "Banner",
	fields: [
		{
			name: "mainText",
			type: s.string(),
			title: "Main text"
		},
		{
			name: "text",
			type: s.string(),
			title: "Text",
			description: "The short piece of text to display in the banner"
		},
		{ ...createSlugSchema(25) },
		{
			name: "bannerImage",
			type: mainImageSchema.ref(),
			title: "Image"
		},
		{
			name: "ctas",
			type: s.array({ of: [linkSchema.ref()] }),
			title: "CTAs",
			description: "Add CTAs",
			optional: true
		},
		{
			name: "dismissedTab",
			type: s.string(),
			title: "Dismissed Tab",
			description: "If the banner is dismissed, this can allow the user to view it again"
		}
	]
});
