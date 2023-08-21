import type { PlayerHelperFunction } from "./types";

export const setEpisodeTimeElapsed: PlayerHelperFunction<number> = (state, newTime) => {
	if (!state.audio || !state.currentEpisode) {
		return state;
	}
	return {
		...state,
		currentEpisodeTimeElapsed: newTime
	};
};
