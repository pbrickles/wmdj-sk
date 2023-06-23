import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { urlFor } from "./urlFor";
import { SANITY_DATASET_NAME, SANITY_PROJECT_ID } from "$env/static/private";

describe("urlFor", () => {
	const imageId = "94d9a0732875e12a6db1884c";
	const asset: SanityImageSource = {
		_ref: `image-${imageId}}-1080x1080-png`,
		_type: "reference"
	};

	const url = `https://cdn.sanity.io/images/${SANITY_PROJECT_ID}}/${SANITY_DATASET_NAME}}/${imageId}/${imageId}-1080x1080.png`;

	describe("GIVEN a SanityImageSource", () => {
		it("SHOULD return a url", () => {
			const result = urlFor(asset);
			expect(result).toBe(url);
		});
	});
});
