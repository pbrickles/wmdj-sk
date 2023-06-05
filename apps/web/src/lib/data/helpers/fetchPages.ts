import { client } from "../sanity";
import type { LinksPage, Page } from "sanity-schema";

export async function fetchPages() {
	const pages = await client.fetch<Page[] | LinksPage>('*[_type in ["page", "linksPage"]]');
	return pages;
}

export async function fetchPageBySlug(slug?: string) {
	if (!slug) return;
	const page = await client.fetch<Page | LinksPage>(
		`*[_type in ["page", "linksPage"] && slug.current == $slug][0]`,
		{ slug }
	);
	return page;
}
