import { fetchNavigation, type NavType } from "./fetchNavigation";
import { client } from "../sanity";

describe("fetchNavigation", () => {
	describe.each<{ key: NavType; value: string }>([
		{ key: "main", value: "Main Nav" },
		{ key: "footer", value: "Footer Nav" }
	])("GIVEN a navType of $key", ({ key, value }) => {
		it("SHOULD call sanity with the correct query", async () => {
			// Arrange
			const expected = [
				'*[_type == "navigation" && title == $title][0]',
				{
					title: value
				}
			];
			const fetch = vitest.spyOn(client, "fetch");

			// Act
			await fetchNavigation(key);

			// Assert
			expect(fetch).toHaveBeenCalledWith(...expected);
		});
	});
});
