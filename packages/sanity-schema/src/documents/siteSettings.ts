import { s } from "@sanity-typed/schema-builder";
import { authorSchema } from "./author";
import { bannerSchema } from "./banner";

export const siteSettingsSchema = s.document({
	name: "siteSettings",
	title: "Site Settings",
	fields: [
		{
			name: "title",
			type: s.string(),
			title: "Title"
		},
		{
			name: "siteUrl",
			type: s.url(),
			title: "Site Url"
		},
		{
			name: "description",
			type: s.text(),
			title: "Description",
			description: "Describe your blog for search engines and social media."
		},
		{
			name: "seoTitle",
			type: s.string(),
			title: "SEO Title",
			description:
				"This will be appended to the title on every page (in the browser tab) and can help with SEO"
		},
		{
			name: "keywords",
			title: "Keywords",
			description: "Add keywords that describes your blog.",
			type: s.array({
				of: [s.string()],
				options: {
					layout: "tags"
				}
			})
		},
		{
			name: "socialImage",
			type: s.image(),
			title: "Social Image",
			description: "Image to appear as default when something is shared on social media"
		},
		{
			name: "author",
			type: s.reference({ to: [authorSchema] }),
			description: "Publish an author and set a reference to them here.",
			title: "Author"
		},
		{
			name: "banner",
			type: s.reference({ to: [bannerSchema] }),
			description: "choose a banner",
			title: "Banner"
		}
	]
});

export type SiteSettings = s.infer<typeof siteSettingsSchema>;
