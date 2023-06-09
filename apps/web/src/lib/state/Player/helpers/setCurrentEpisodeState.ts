import { getEpisodeById } from "$lib/data/helpers/getEpisodeById";
import type { PlayerHelperFunction } from "./types";

export const setCurrentEpisodeState: PlayerHelperFunction<string> = (state, episodeId) => {
	if (!episodeId || episodeId === state.currentEpisode?.id) {
		return state;
	}
	return {
		...state,
		currentEpisode: state.episodes ? getEpisodeById(episodeId, state.episodes) : null
	};
};
