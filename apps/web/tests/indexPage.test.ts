import { expect, test } from "@playwright/test";

test.describe("index page", () => {
	test("index page has expected h1", async ({ page }) => {
		await page.goto("/");
		await expect(page.getByRole("heading", { name: "WMDJ" })).toBeVisible();
	});
});
