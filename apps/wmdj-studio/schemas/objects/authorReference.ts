import { s } from "@sanity-typed/schema-builder";
import { authorSchema } from "../documents/author";

export const authorReferenceSchema = s.objectNamed({
	name: "authorReference",
	title: "Author reference",
	fields: [
		{
			name: "author",
			type: s.reference({
				to: [authorSchema]
			})
		}
	],
	preview: {
		select: {
			title: "author.name",
			media: "author.image.asset"
		}
	}
});
