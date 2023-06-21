import { defineField } from "@sanity-typed/types";

export const publishedAtField = defineField({
	name: "publishedAt",
	type: "datetime",
	title: "Published at",
	description: "This can be used to schedule this document/post for publishing"
});
