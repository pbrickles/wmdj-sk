import { defineConfig } from "@sanity-typed/types";
import { deskTool } from "sanity/desk";
import { getSanityConfig } from "./config";
import {
	authorSchema,
	bannerSchema,
	siteSettingsSchema,
	postSchema,
	categorySchema,
	linksLandingPageSchema,
	linksPageSchema,
	navigationSchema,
	pageSchema,
	transcriptSchema,
	productBrandSchema,
	productCategorySchema,
	productSchema
} from "sanity-schema";

const sanityConfig = getSanityConfig();

export default defineConfig({
	name: "default",
	title: "Why Mums Don't Jump",
	...sanityConfig,
	plugins: [deskTool()],
	schema: {
		types: [
			authorSchema,
			bannerSchema,
			siteSettingsSchema,
			postSchema,
			categorySchema,
			linksLandingPageSchema,
			linksPageSchema,
			navigationSchema,
			pageSchema,
			transcriptSchema,
			productBrandSchema,
			productCategorySchema,
			productSchema
		]
	}
});
