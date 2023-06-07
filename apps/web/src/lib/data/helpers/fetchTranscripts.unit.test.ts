import { client } from "../sanity";
import { fetchTranscripts } from "./fetchTranscripts";

describe("fetchPosts", () => {
	describe("GIVEN a valid client", () => {
		it("SHOULD call sanity with the correct query", async () => {
			// Arrange
			const expected = '*[_type == "transcript"]';

			const fetch = vitest.spyOn(client, "fetch");

			// Act
			await fetchTranscripts();

			// Assert
			expect(fetch).toHaveBeenCalledWith(expected);
		});
	});
});
