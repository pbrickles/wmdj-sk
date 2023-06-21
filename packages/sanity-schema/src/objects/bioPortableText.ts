import { defineArrayMember, defineType } from "@sanity-typed/types";

export const bioPortableTextSchema = defineType({
	name: "bioPortableText",
	title: "Bio",
	type: "array",
	of: [
		defineArrayMember({
			name: "block",
			title: "Block",
			type: "block",
			styles: [{ title: "Normal", value: "normal" }],
			lists: [],
			marks: {
				decorators: [
					{ title: "Strong", value: "strong" },
					{ title: "Emphasis", value: "em" },
					{ title: "Code", value: "code" }
				]
			}
		})
	]
});
