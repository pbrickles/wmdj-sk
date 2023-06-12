import { createEpisodeMock } from "$lib/test-utils/mocks";
import { getSeries } from "./getSeries";

describe("getSeries", () => {
	describe("GIVEN an array of episodes", () => {
		const series1Episode = createEpisodeMock({ attributes: { season: 1 } });
		const series2Episode = createEpisodeMock({ attributes: { season: 2 } });
		const series3Episode = createEpisodeMock({ attributes: { season: 3 } });
		const episodes = [series1Episode, series2Episode, series3Episode];
		it("SHOULD return  an object with series number as a key", () => {
			// Arrange

			// Act
			const results = getSeries(episodes);
			// Assert

			expect(results).toEqual({
				1: [series1Episode],
				2: [series2Episode],
				3: [series3Episode]
			});
		});

		describe("AND an episode has no season", () => {
			it("SHOULD return an object with a key of 0 for that episode", () => {
				const episodeNoSeason = createEpisodeMock();
				// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
				episodeNoSeason.attributes.season = undefined!;
				const episodesPlusNoSeason = [...episodes, episodeNoSeason];
				const results = getSeries(episodesPlusNoSeason);
				expect(results[0]).toEqual([episodeNoSeason]);
			});
		});
	});
});
