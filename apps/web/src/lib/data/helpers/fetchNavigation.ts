import { client } from "../sanity";
import type { Navigation } from "sanity-schema";

export async function fetchNavigation(navType: "main" | "footer") {
	console.log("fetchNavigation", navType);
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
