import { fetchPageBySlug, fetchPages } from "./fetchPages";
import { client } from "../sanity";

describe("fetchPages", () => {
	describe("GIVEN a valid client", () => {
		it("SHOULD call sanity with the correct query", async () => {
			// Arrange
			const expected = '*[_type in ["page", "linksPage"]]';

			const fetch = vitest.spyOn(client, "fetch");

			// Act
			await fetchPages();

			// Assert
			expect(fetch).toHaveBeenCalledWith(expected);
		});
	});
});

describe("fetchPageBySlug", () => {
	describe("GIVEN a valid slug", () => {
		it("SHOULD call sanity with the correct query", async () => {
			// Arrange
			const expected = [
				'*[_type in ["page", "linksPage"] && slug.current == $slug][0]',
				{ slug: "test" }
			];

			const fetch = vitest.spyOn(client, "fetch");

			// Act
			await fetchPageBySlug("test");

			// Assert
			expect(fetch).toHaveBeenCalledWith(...expected);
		});
	});
	describe("GIVEN a no slug", () => {
		it("SHOULD return undefined", async () => {
			// Arrange

			// Act
			const result = await fetchPageBySlug();

			// Assert
			expect(result).toBeUndefined();
		});
	});
});
