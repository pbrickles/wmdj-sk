import { s } from "@sanity-typed/schema-builder";

export const createSlugSchema = (maxLength: number) => {
	return {
		name: "slug",
		type: s.slug(),
		title: "Slug",
		description: "Some frontends will require a slug to be set",
		options: {
			source: "name",
			maxLength
		}
	};
};
