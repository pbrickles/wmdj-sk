import { truncateText } from "$lib/utils/truncateText";
import type { TransistorEpisodeAttributes } from "$lib/types/transistor";

const trimEncodedContent = (contentToTrim: string) => {
	return contentToTrim.split(/<br\s*\/?>/)[0];
};

export const createDescriptionBySeason = ({
	formatted_summary,
	description,
	season
}: TransistorEpisodeAttributes) => {
	switch (season) {
		case 1:
			return trimEncodedContent(description);
		case 2:
		case 3:
			return formatted_summary;
		default:
			return truncateText(formatted_summary, 332);
	}
};
