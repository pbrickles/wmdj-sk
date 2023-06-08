import type { TransistorEpisode } from "$lib/types";
import type { PlayerHelperFunction } from "./types";

export const setEpisodeState: PlayerHelperFunction<TransistorEpisode[]> = (state, episodes) => {
	return { ...state, episodes: episodes ?? [] };
};
