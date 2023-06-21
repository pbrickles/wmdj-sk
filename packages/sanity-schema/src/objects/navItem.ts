import { s } from "@sanity-typed/schema-builder";

export const navItemSchema = s.objectNamed({
	title: "Nav Item",
	name: "navItem",
	fields: [
		{
			name: "path",
			type: s.string(),
			description:
				"Please only enter the path (not the domain) and make sure you preface with a slash ('/')",
			title: "Path"
		},
		{
			name: "label",
			type: s.string(),
			title: "Label",
			description: "This will be displayed in the nav"
		}
	]
});

export type NavItem = s.infer<typeof navItemSchema>;
