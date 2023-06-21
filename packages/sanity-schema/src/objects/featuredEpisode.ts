// import EpisodeInput from "../../src/components/episodeInput"

import { defineField, defineType } from "@sanity-typed/types";

export const featuredEpisodeSchema = defineType({
	type: "object",
	name: "featuredEpisode",
	title: "Featured Episode",
	fields: [
		defineField({
			name: "episode",
			title: "Episode",
			type: "string",
			description: "Select a featured episode",
			components: {
				// input: EpisodeInput
			}
		})
	]
});
