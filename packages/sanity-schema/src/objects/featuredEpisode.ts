// import EpisodeInput from "../../src/components/episodeInput"

import { s } from "@sanity-typed/schema-builder";

export const featuredEpisodeSchema = s.objectNamed({
	name: "featuredEpisode",
	title: "Featured Episode",
	fields: [
		{
			name: "episode",
			title: "Episode",
			type: s.string(),
			description: "Select a featured episode",
			components: {
				// input: EpisodeInput
			}
		}
	]
});

export type FeaturedEpisode = s.infer<typeof featuredEpisodeSchema>;
