import type { TransistorEpisode } from "$lib/types";
import { writable } from "svelte/store";
import { setEpisodeState } from "./helpers/setEpisodeState";
import { setCurrentEpisodeState } from "./helpers/setCurrentEpisodeState";
import { setPlayState } from "./helpers/setPlayState";
import { setLoadingState as handleLoadingState } from "./helpers/setLoadingState";

export type PlayerState = {
	status: "HIDDEN" | "ACTIVE" | "EXPANDED";
	currentEpisode: TransistorEpisode | null;
	playing: boolean;
	loading: boolean;
	audio?: HTMLAudioElement;
	episodes: TransistorEpisode[];
};

const playerState = () => {
	const initialState: PlayerState = {
		status: "HIDDEN",
		currentEpisode: null,
		playing: false,
		loading: false,
		audio: undefined,
		episodes: []
	};
	const { subscribe, update, set } = writable<PlayerState>(initialState);

	function setEpisodes(episodes: TransistorEpisode[]) {
		update((state) => setEpisodeState(state, episodes));
	}

	function setCurrentEpisode(episodeId: string) {
		update((state) => setCurrentEpisodeState(state, episodeId));
	}

	function play() {
		update((state) => setPlayState(state, "PLAY"));
	}
	function pause() {
		update((state) => setPlayState(state, "PAUSE"));
	}

	function setLoadingState(isLoading: boolean) {
		update((state) => handleLoadingState(state, isLoading));
	}

	function setAudioElement(audio: HTMLAudioElement) {
		update((state) => {
			state.audio = audio;
			return state;
		});
	}

	function reset() {
		set({ ...initialState, episodes: [] });
	}

	return {
		subscribe,
		update,
		reset,
		episodes: {
			all: {
				setEpisodes
			},
			current: {
				setCurrentEpisode
			}
		},
		setAudioElement,
		controlPlaying: {
			play,
			pause,
			setLoadingState
		}
	};
};

export const player = playerState();
