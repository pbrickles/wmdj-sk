import { defineField, defineType } from "@sanity-typed/types";

export const navItemSchema = defineType({
	title: "Nav Item",
	name: "navItem",
	type: "object",
	fields: [
		defineField({
			name: "path",
			type: "string",
			description:
				"Please only enter the path (not the domain) and make sure you preface with a slash ('/')",
			title: "Path"
		}),
		defineField({
			name: "label",
			type: "string",
			title: "Label",
			description: "This will be displayed in the nav"
		})
	]
});
