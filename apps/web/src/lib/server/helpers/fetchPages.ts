import { client } from "../sanity";
import type { Page } from "sanity-schema";

export async function fetchPages() {
	const pages = await client.fetch<Page[]>('*[_type == "page"]');
	return pages;
}

export async function fetchPageBySlug(slug: string) {
	const page = await client.fetch<Page>(`*[_type == "page" && slug.current == $slug][0]`, { slug });
	return page;
}
