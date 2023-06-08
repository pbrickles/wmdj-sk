import mergeMock from "./mergeMock";
import type { DeepPartial, TransistorEpisode } from "$lib/types";
type MockFunction = (data?: DeepPartial<TransistorEpisode>) => TransistorEpisode;

export const createEpisodeMock: MockFunction = (data) => {
	const episode: TransistorEpisode = {
		id: "123",
		type: "episode",
		attributes: {
			title: "Test Episode",
			description: "Test description",
			slug: "test-episode",
			summary: "Test Summary",
			season: 1,
			published_at: "2021-01-01T00:00:00.000Z",
			duration: 1200,
			media_url: "https://example.com/test.mp3",
			image_url: "https://example.com/test.jpg",
			audio_processing: false,
			alternate_url: null,
			transcript_url: null,
			author: "Test Author",
			created_at: "2021-01-01T00:00:00.000Z",
			email_notifications: "",
			explicit: false,
			duration_in_mmss: "todo",
			embed_html_dark: "todo",
			embed_html: "todo",
			formatted_description: "<p>Test description</p>",
			formatted_pubished_at: "<p>1st Jan 2021</p>",
			formatted_summary: "<p>Test Summary</p>",
			keywords: "test, episode",
			number: 0,
			share_url: "https://example.com/test-episode",
			status: "published",
			updated_at: "2021-01-01T00:00:00.000Z",
			type: "full",
			video_url: null
		},
		relationships: {
			show: {
				data: {
					id: 123,
					type: "show"
				}
			}
		}
	};

	return mergeMock(episode, data);
};
