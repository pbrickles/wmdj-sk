import { authorSchema } from "../documents/author";
import { defineType } from "@sanity-typed/types";

export const authorReferenceSchema = defineType({
	name: "authorReference",
	title: "Author reference",
	type: "object",
	fields: [
		{
			name: "author",
			type: "reference",
			to: [authorSchema]
		}
	],
	preview: {
		select: {
			title: "author.name",
			media: "author.image.asset"
		}
	}
});
