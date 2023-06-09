import type { PlayerState } from "../player";

export type PlayerHelperFunction<T> = (state: PlayerState, arg: T) => PlayerState;
