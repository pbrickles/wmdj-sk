import { s } from "@sanity-typed/schema-builder";
import { mainImageSchema } from "./mainImage";
import { authorReferenceSchema } from "./authorReference";
import { youtubeEmbedSchema } from "./youTubeEmbed";

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
		],
		// Annotations can be any object structure - e.g. a link or a footnote.
		annotations: [
			{
				name: "link",
				type: "object",
				title: "URL",
				fields: [
					{
						title: "URL",
						name: "href",
						type: "url"
					}
				]
			}
		]
	}
});

// const bodyMainImageSchema = s.objectNamed({
// 	name: "mainImage",
// 	fields: [

// 		alt: s.string(),
// 		asset: {
// 			_ref: "image-4f3aef9945705e4c674f57df07bd4d7bad225c08-1199x1200-png",
// 			_type: "reference"
// 		},
// 		caption: "Photo by Xenia Bogarova on Unsplash"
// 	],
// });

export const bodyPortableTextSchema = s.array({
	of: [bodyTextBlockSchema, mainImageSchema, authorReferenceSchema, youtubeEmbedSchema]
});

export type BodyPortableText = s.infer<typeof bodyPortableTextSchema>;
