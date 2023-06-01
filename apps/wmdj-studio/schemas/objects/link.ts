import { s } from "@sanity-typed/schema-builder";

export const linkSchema = s.objectNamed({
	title: "Link",
	name: "link",
	fields: [
		{
			name: "linkUrl",
			type: s.url(),
			title: "Link Url"
		},
		{
			name: "description",
			type: s.string(),
			title: "Short Description"
		}
	]
});
