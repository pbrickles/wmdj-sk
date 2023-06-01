export const getSanityConfig = () => {
	if (!process.env.SANITY_STUDIO_PROJECT_ID) throw new Error("Missing SANITY_STUDIO_PROJECT_ID");
	if (!process.env.SANITY_STUDIO_DATASET) throw new Error("Missing SANITY_STUDIO_DATASET");
	if (!process.env.SANITY_STUDIO_READ_TOKEN) throw new Error("Missing SANITY_STUDIO_READ_TOKEN");
	return {
		projectId: process.env.SANITY_STUDIO_PROJECT_ID,
		dataset: process.env.SANITY_STUDIO_DATASET,
		token: process.env.SANITY_STUDIO_READ_TOKEN
	};
};
