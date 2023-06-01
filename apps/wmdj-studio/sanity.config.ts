import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { getSanityConfig } from "./config";
import { authorSchema } from "./schemas/documents/author";
import { siteSettingsSchema } from "./schemas/documents/siteSettings";
import { bannerSchema } from "./schemas/documents/banner";
import { postSchema } from "./schemas/documents/post";
import { categorySchema } from "./schemas/documents/category";
import { linksLandingPageSchema } from "./schemas/documents/linksLandingPage";
import { linksPageSchema } from "./schemas/documents/linksPage";
import { navigationSchema } from "./schemas/documents/navigation";
import { pageSchema } from "./schemas/documents/page";

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
			pageSchema.schema()
		]
	}
});
