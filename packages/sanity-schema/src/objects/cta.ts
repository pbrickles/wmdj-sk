import { defineField } from "@sanity-typed/types";

export const cta = (title: string, description: string) =>
	defineField({
		name: "cta",
		type: "url",
		title,
		description
	});
