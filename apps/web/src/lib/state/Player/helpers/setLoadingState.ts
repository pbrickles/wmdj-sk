import type { PlayerHelperFunction } from "./types";

export const setLoadingState: PlayerHelperFunction<boolean> = (state, loading) => {
	if (!state.audio) return state;
	return { ...state, loading: Boolean(loading) };
};
