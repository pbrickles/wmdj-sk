import { bannerSchema } from "../documents/banner";
import { defineType } from "@sanity-typed/types";

export const bannerReferenceSchema = defineType({
	name: "bannerReference",
	title: "Banner reference",
	type: "object",
	fields: [
		{
			name: "author",
			type: "reference",
			to: [bannerSchema]
		}
	]
});
