import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { getSanityConfig } from "./config";

const sanityConfig = getSanityConfig();

export default defineConfig({
	name: "default",
	title: "Why Mums Don't Jump",
	...sanityConfig,
	plugins: [deskTool(), visionTool()],
	schema: {
		types: schemaTypes
	}
});
