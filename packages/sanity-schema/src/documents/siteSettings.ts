import {
	InferSchemaValues,
	defineArrayMember,
	defineConfig,
	defineField,
	defineType
} from "@sanity-typed/types";
import { authorReferenceSchema, titleField } from "../objects";
import { baseConfig } from "../helpers/baseConfig";

export const siteSettingsSchema = defineType({
	name: "siteSettings",
	title: "Site Settings",
	type: "document",
	fields: [
		titleField,
		defineField({
			name: "siteUrl",
			type: "url",
			title: "Site Url"
		}),
		defineField({
			name: "description",
			type: "text",
			title: "Description",
			description: "Describe your blog for search engines and social media."
		}),
		defineField({
			name: "seoTitle",
			type: "string",
			title: "SEO Title",
			description:
				"This will be appended to the title on every page (in the browser tab) and can help with SEO"
		}),
		defineField({
			name: "keywords",
			title: "Keywords",
			description: "Add keywords that describes your blog.",
			type: "array",
			of: [defineArrayMember({ type: "string" })],
			options: {
				layout: "tags"
			}
		}),
		defineField({
			name: "socialImage",
			type: "image",
			title: "Social Image",
			description: "Image to appear as default when something is shared on social media"
		}),
		defineField({ ...authorReferenceSchema, name: "reference" }),
		defineField({
			name: "banner",
			type: "reference",
			description: "choose a banner",
			title: "Banner",
			to: [{ type: "banner" }]
		})
	]
});

const tempConfig = defineConfig({
	...baseConfig,
	schema: {
		types: [siteSettingsSchema]
	}
});
type Values = InferSchemaValues<typeof tempConfig>;
export type SiteSettings = Extract<Values, { _type: "siteSettings" }>;
