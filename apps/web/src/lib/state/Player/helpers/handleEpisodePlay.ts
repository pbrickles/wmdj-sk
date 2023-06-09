import { setCurrentEpisodeState } from "./setCurrentEpisodeState";
import { setPlayState } from "./setPlayState";
import type { PlayerHelperFunction } from "./types";

export const handleEpisodePlay: PlayerHelperFunction<string> = (state, episodeId: string) => {
	// current episode is set to new episode already
	if (state.currentEpisode?.id === episodeId) {
		if (state.loading) {
			return state;
		}
		return setPlayState(state, state.playing ? "PAUSE" : "PLAY");
	}

	// current episode is not set to new episode
	if (state.loading) {
		return setCurrentEpisodeState(state, episodeId);
	}
	const newEpisodeState = setCurrentEpisodeState(state, episodeId);
	return setPlayState(newEpisodeState, "PLAY");
};
