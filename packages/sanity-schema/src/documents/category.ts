import { s } from "@sanity-typed/schema-builder";

export const categorySchema = s.document({
	name: "category",
	title: "Category",
	fields: [
		{
			name: "title",
			type: s.string(),
			title: "Title"
		},
		{
			name: "description",
			type: s.text(),
			title: "Description"
		}
	]
});

export type Category = s.infer<typeof categorySchema>;
