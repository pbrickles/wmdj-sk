import { getEpisodeById } from "$lib/data/helpers/getEpisodeById";
import type { PlayerHelperFunction } from "./types";

export const setCurrentEpisodeState: PlayerHelperFunction<string> = (state, episodeId) => {
	if (!episodeId) {
		return state;
	}
	const status = state.episodes.length ? "ACTIVE" : state.status;
	const currentEpisode = state.episodes ? getEpisodeById(episodeId, state.episodes) : null;
	return { ...state, currentEpisode, status };
};
