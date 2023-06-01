import { s } from "@sanity-typed/schema-builder";
import { navItemSchema } from "../objects/navItem";

export const navigationSchema = s.document({
	name: "navigation",
	title: "Navigation",
	fields: [
		{
			name: "title",
			type: s.string(),
			title: "Title"
		},
		{
			name: "items",
			type: s.array({
				of: [navItemSchema]
			}),
			title: "Nav Items",
			description: "Add nav items",
			options: {
				layout: "tags"
			}
		}
	]
});
