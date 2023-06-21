import { s } from "@sanity-typed/schema-builder";
// import YouTubePreview from "../../src/previews/youtube/youTubeEmbed";

export const youtubeEmbedSchema = s.objectNamed({
	name: "youTubeEmbed",
	fields: [
		{
			name: "url",
			type: s.url(),
			title: "Url",
			description: "Paste the url of the YouTube video from your browser"
		},
		{
			name: "width",
			type: s.number({
				initialValue: 640
			}),
			description: "Optional width value",
			optional: true
		},
		{
			name: "height",
			type: s.number({
				initialValue: 390
			}),
			optional: true,
			description: "Optional height value"
		}
	]
	// component: YouTubePreview
});

export type YouTubeEmbed = s.infer<typeof youtubeEmbedSchema>;
