import type { PlayerStatus } from "../player";
import type { PlayerHelperFunction } from "./types";

export const setStatus: PlayerHelperFunction<PlayerStatus> = (state, status) => {
	return { ...state, status };
};
