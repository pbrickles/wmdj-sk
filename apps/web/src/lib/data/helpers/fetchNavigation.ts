import { client } from "../sanity";
import type { Navigation } from "sanity-schema";

export type NavType = "main" | "footer";

export async function fetchNavigation(navType: NavType) {
	const navTypeMap = {
		main: "Main Nav",
		footer: "Footer Nav"
	};
	const navigation = await client.fetch<Navigation>(
		'*[_type == "navigation" && title == $title][0]',
		{
			title: navTypeMap[navType]
		}
	);
	return navigation;
}
