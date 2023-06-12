import { createEpisodeMock } from "$lib/test-utils/mocks";
import { getEpisodesBySeriesParam } from "./getEpisodesBySeriesParam";

describe("getEpisodesBySeriesParam", () => {
	const episodes = [
		createEpisodeMock({ attributes: { season: 1 } }),
		createEpisodeMock({ attributes: { season: 2 } }),
		createEpisodeMock({ attributes: { season: 3 } }),
		createEpisodeMock({ attributes: { season: 4 } }),
		createEpisodeMock({ attributes: { season: 1 } })
	];
	describe("GIVEN a non-matching param", () => {
		describe("AND the param is still valid", () => {
			it("SHOULD return an empty array", () => {
				const seriesParam = "series-5";
				expect(getEpisodesBySeriesParam(episodes, seriesParam)).toEqual([]);
			});
		});
		describe("AND the param is invalid", () => {
			it("SHOULD return an empty array", () => {
				const seriesParam = "series-a";
				expect(getEpisodesBySeriesParam(episodes, seriesParam)).toEqual([]);
			});
		});
	});
	describe("GIVEN a matching param", () => {
		it("SHOULD return an array of episodes", () => {
			const seriesParam = "series-1";
			expect(getEpisodesBySeriesParam(episodes, seriesParam)).toEqual([episodes[0], episodes[4]]);
		});
	});
});
