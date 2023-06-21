// import YouTubePreview from "../../src/previews/youtube/youTubeEmbed";
import { defineField, defineType } from "@sanity-typed/types";

export const youtubeEmbedSchema = defineType({
	name: "youTubeEmbed",
	type: "object",
	fields: [
		defineField({
			name: "url",
			type: "url",
			title: "Url",
			description: "Paste the url of the YouTube video from your browser",
			validation: (Rule) => Rule.required()
		}),
		defineField({
			name: "width",
			type: "number",
			initialValue: 640,
			description: "Optional width value"
		}),
		defineField({
			name: "height",
			type: "number",
			initialValue: 390,
			description: "Optional height value"
		})
	]
	// component: YouTubePreview
});
