import { TRANSISTOR_API_KEY, TRANSISTOR_SHOW_ID } from "$env/static/private";
import { fetchEpisodes } from "./fetchEpisodes";

describe("fetchEpisodes", () => {
	describe("GIVEN a fetch parameter", () => {
		it("SHOULD call fetch with a GET request to the Transistor API", () => {
			// Arrange
			const fetch = vitest.fn();
			const expected = [
				`https://api.transistor.fm/v1/episodes?show_id=${TRANSISTOR_SHOW_ID}&pagination[per]=1000`,
				{
					method: "GET",
					headers: {
						"x-api-key": TRANSISTOR_API_KEY
					}
				}
			];

			// Act
			fetchEpisodes(fetch);

			// Assert
			expect(fetch).toHaveBeenCalledWith(...expected);
		});
	});
});
