import type { PlayerHelperFunction } from "./types";

export const setAudioElementState: PlayerHelperFunction<HTMLAudioElement> = (state, audio) => {
	state.audio = audio;
	return state;
};
