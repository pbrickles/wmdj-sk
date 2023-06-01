import { defineCliConfig } from "sanity/cli";
import { getSanityConfig } from "./config";

const sanityConfig = getSanityConfig();

export default defineCliConfig({
	api: sanityConfig
});
