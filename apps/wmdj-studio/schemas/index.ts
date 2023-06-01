import { postSchema } from "./documents/post";
import { pageSchema } from "./documents/page";
import { siteSettingsSchema } from "./documents/siteSettings";
import { bannerSchema } from "./documents/banner";
import { linksPageSchema } from "./documents/linksPage";
import { linksLandingPageSchema } from "./documents/linksLandingPage";
import { categorySchema } from "./documents/category";
import { authorSchema } from "./documents/author";
import { mainImageSchema } from "./objects/mainImage";
import { authorReferenceSchema } from "./objects/authorReference";
import { bodyPortableTextSchema } from "./objects/bodyPortableText";
import { excerptPortableTextSchema } from "./objects/excerptPortableText";
import { bioPortableTextSchema } from "./objects/bioPortableText";
import { linkSchema } from "./objects/link";
import { linkSectionSchema } from "./objects/linksSection";
import { navItemSchema } from "./objects/navItem";
import { navigationSchema } from "./documents/navigation";
import { featuredEpisodeSchema } from "./objects/featuredEpisode";

export const schemaTypes = [
	siteSettingsSchema.schema(),
	postSchema.schema(),
	pageSchema.schema(),
	bannerSchema.schema(),
	linksPageSchema.schema(),
	linksLandingPageSchema.schema(),
	categorySchema.schema(),
	authorSchema.schema(),
	mainImageSchema.schema(),
	bannerSchema.schema(),
	authorReferenceSchema.schema(),
	bodyPortableTextSchema.schema(),
	excerptPortableTextSchema.schema(),
	bioPortableTextSchema.schema(),
	// platform,
	linkSchema.schema(),
	linkSectionSchema.schema(),
	// instagramPost,
	// youTubeEmbed,
	navItemSchema.schema(),
	navigationSchema.schema(),
	featuredEpisodeSchema.schema()
];
