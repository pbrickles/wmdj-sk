import type { PlayerHelperFunction } from "./types";

export const setPlayState: PlayerHelperFunction<"PLAY" | "PAUSE"> = (state, direction) => {
	if (!state.audio) {
		return state;
	}

	direction === "PAUSE" ? state.audio?.pause() : state.audio?.play();
	return {
		...state,
		playing: direction === "PLAY",
		status: state.status === "HIDDEN" ? "ACTIVE" : state.status
	};
};
