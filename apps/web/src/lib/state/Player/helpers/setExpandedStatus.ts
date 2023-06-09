import type { PlayerHelperFunction } from "./types";

export const setExpandedStatus: PlayerHelperFunction<boolean> = (state, expanded) => {
	return { ...state, expanded };
};
