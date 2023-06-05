import { Page } from "./page";
import { LinksPage } from "./linksPage";
import { LinksLandingPage } from "./linksLandingPage";

export type CombinedPageType = Page | LinksPage | LinksLandingPage;

export * from "./author";
export * from "./category";
export * from "./post";
export * from "./siteSettings";
export * from "./banner";
export * from "./navigation";
export * from "./linksLandingPage";

export type { Page, LinksPage, LinksLandingPage };
