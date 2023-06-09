import type { DeepPartial } from "$lib/types";
import mergeMock from "./mergeMock";
import type { PlayerState } from "$lib/state/Player/player";

type MockFunction<T> = (data?: DeepPartial<T>) => T;

export const createPlayerStateMock: MockFunction<PlayerState> = (data) => {
	const playerState: PlayerState = {
		status: "HIDDEN",
		expanded: false,
		currentEpisode: null,
		playing: false,
		loading: false,
		episodes: [],
		audio: undefined
	};

	return mergeMock(playerState, data);
};
