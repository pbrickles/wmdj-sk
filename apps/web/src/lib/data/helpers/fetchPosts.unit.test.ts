import { client } from "../sanity";
import { fetchPosts } from "./fetchPosts";

describe("fetchPosts", () => {
	describe("GIVEN a valid client", () => {
		it("SHOULD call sanity with the correct query", async () => {
			// Arrange
			const expected = '*[_type == "post"]';

			const fetch = vitest.spyOn(client, "fetch");

			// Act
			await fetchPosts();

			// Assert
			expect(fetch).toHaveBeenCalledWith(expected);
		});
	});
});
