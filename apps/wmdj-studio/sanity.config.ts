import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
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
	transcriptSchema
} from "sanity-schema";

const sanityConfig = getSanityConfig();

export default defineConfig({
	name: "default",
	title: "Why Mums Don't Jump",
	...sanityConfig,
	plugins: [deskTool(), visionTool()],
	schema: {
		types: [
			authorSchema.schema(),
			bannerSchema.schema(),
			siteSettingsSchema.schema(),
			postSchema.schema(),
			categorySchema.schema(),
			linksLandingPageSchema.schema(),
			linksPageSchema.schema(),
			navigationSchema.schema(),
			pageSchema.schema(),
			transcriptSchema.schema()
		]
	}
});
