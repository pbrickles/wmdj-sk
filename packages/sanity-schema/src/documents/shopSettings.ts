import { defineField, defineType } from "@sanity-typed/types";
import { bodyPortableTextSchema } from "../objects";

export const shopSettingsSchema = defineType({
	name: "shopSettings",
	title: "Shop Settings",
	type: "document",
	fields: [
		defineField({
			name: "shopName",
			type: "string",
			title: "Shop Name",
			initialValue: "The Shop",
			validation: (Rule) => Rule.required()
		}),
		defineField({
			...bodyPortableTextSchema,
			name: "shopPageCopy",
			title: "Shop Page Copy",
			description: "This copy will appear on the shop page"
		}),
		defineField({
			...bodyPortableTextSchema,
			name: "productDisclaimer",
			title: "Product Disclaimer",
			description: "This appears below products on every product page, so should remain generic."
		})
	]
});
