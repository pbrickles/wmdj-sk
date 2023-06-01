import { s } from "@sanity-typed/schema-builder";
import { mainImageSchema } from "./mainImage";
import { authorReferenceSchema } from "./authorReference";

export const bodyTextBlockSchema = s.block({
	styles: [
		{ title: "Normal", value: "normal" },
		{ title: "H1", value: "h1" },
		{ title: "H2", value: "h2" },
		{ title: "H3", value: "h3" },
		{ title: "H4", value: "h4" },
		{ title: "Quote", value: "blockquote" }
	],
	lists: [
		{ title: "Bullet", value: "bullet" },
		{ title: "Number", value: "number" }
	],
	marks: {
		// Decorators usually describe a single property - e.g. a typographic
		// preference or highlighting by editors.
		decorators: [
			{ title: "Strong", value: "strong" },
			{ title: "Emphasis", value: "em" }
		]
		// Annotations can be any object structure - e.g. a link or a footnote.
		// annotations: [
		// 	{
		// 		name: "link",
		// 		type: "object",
		// 		title: "URL",
		// 		fields: [
		// 			{
		// 				title: "URL",
		// 				name: "href",
		// 				type: "url"
		// 			}
		// 		]
		// 	}
		// ]
	}
});

export const bodyPortableTextSchema = s.objectNamed({
	name: "bodyPortableText",
	title: "Body",
	fields: [
		{
			name: "blocks",
			type: s.array({
				of: [
					bodyTextBlockSchema,
					mainImageSchema,
					authorReferenceSchema
					// { type: "youTubeEmbed" }
				]
			})
		}
	]
});
