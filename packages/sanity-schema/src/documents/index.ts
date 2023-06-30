import { Page } from "./page";
import { LinksPage } from "./linksPage";
import { LinksLandingPage } from "./linksLandingPage";

export * from "./author";
export * from "./category";
export * from "./post";
export * from "./page";
export * from "./siteSettings";
export * from "./banner";
export * from "./navigation";
export * from "./linksLandingPage";
export * from "./linksPage";
export * from "./transcript";
export * from "./productBrand";
export * from "./productCategory";
export * from "./product";
export * from "./shopSettings";
export type CombinedPageType = Page | LinksPage | LinksLandingPage;
