import { createEpisodeMock } from "$lib/test-utils/mocks/createEpisodeMock";
import { getPublishedEpisodeBySlug } from "./getPublishedEpisodeBySlug";

describe("getPublishedEpisodeBySlug", () => {
	describe("GIVEN a list of episodes", () => {
		const slug = "test-episode";
		const publishedEpisode = createEpisodeMock({ attributes: { slug } });
		describe("AND the slug matches", () => {
			describe("AND the episode is published", () => {
				it("SHOULD return the episode", () => {
					const episodes = [
						publishedEpisode,
						createEpisodeMock({ attributes: { slug: "test-episode-2" } })
					];
					expect(getPublishedEpisodeBySlug(episodes, slug)).toEqual(publishedEpisode);
				});
			});
			describe("AND the episode is NOT published", () => {
				it("SHOULD NOT return the episode", () => {
					const unpublishedEpisode = createEpisodeMock({ attributes: { slug, status: "draft" } });
					const episodes = [
						unpublishedEpisode,
						createEpisodeMock({ attributes: { slug: "test-episode-2" } })
					];
					expect(getPublishedEpisodeBySlug(episodes, slug)).toBeUndefined();
				});
			});
		});
		describe("AND the slug does NOT match", () => {
			const slug = "not-matching-slug";
			it("SHOULD NOT return the episode", () => {
				const episodes = [
					publishedEpisode,
					createEpisodeMock({ attributes: { slug: "test-episode-2" } })
				];
				expect(getPublishedEpisodeBySlug(episodes, slug)).toBeUndefined();
			});
		});
	});
});
