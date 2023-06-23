import { createEpisodeMock } from "$lib/test-utils/mocks";
import { getAvailableEpisodeSeries } from "./getAvaliableEpsisodeSeries";

describe("getAvailableEpisodeSeries", () => {
	describe("GIVEN an empty array of episodes", () => {
		it("SHOULD return an empty array", () => {
			const result = getAvailableEpisodeSeries([]);
			expect(result).toEqual([]);
		});
	});
	describe("GIVEN an array of episodes", () => {
		describe("AND there is only one season", () => {
			it("SHOULD return an array with one item", () => {
				const result = getAvailableEpisodeSeries([
					createEpisodeMock({ id: "123", attributes: { season: 1 } }),
					createEpisodeMock({ id: "456", attributes: { season: 1 } })
				]);
				expect(result).toEqual([1]);
			});
		});
		describe("AND there are multiple seasons", () => {
			it("SHOULD return an array of the available seasons", () => {
				const result = getAvailableEpisodeSeries([
					createEpisodeMock({ id: "123", attributes: { season: 1 } }),
					createEpisodeMock({ id: "456", attributes: { season: 2 } }),
					createEpisodeMock({ id: "789", attributes: { season: 1 } }),
					createEpisodeMock({ id: "234", attributes: { season: 3 } })
				]);
				expect(result).toEqual([1, 2, 3]);
			});
			describe("AND they are not in ascending order", () => {
				it("SHOULD return an array of the available seasons in ascending order", () => {
					const result = getAvailableEpisodeSeries([
						createEpisodeMock({ id: "123", attributes: { season: 1 } }),
						createEpisodeMock({ id: "456", attributes: { season: 3 } }),
						createEpisodeMock({ id: "789", attributes: { season: 2 } }),
						createEpisodeMock({ id: "234", attributes: { season: 4 } })
					]);
					expect(result).toEqual([1, 2, 3, 4]);
				});
			});
		});
	});
});
