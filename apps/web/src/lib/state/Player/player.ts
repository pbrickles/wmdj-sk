import type { TransistorEpisode } from "$lib/types";
import { writable } from "svelte/store";
import {
	setEpisodeState,
	setPlayState,
	setLoadingState as handleLoadingState,
	setAudioElementState,
	setCurrentEpisodeState,
	handleEpisodePlay,
	setExpandedStatus,
	setEpisodeTimeElapsed
} from "./helpers";

export type PlayerState = {
	status: "HIDDEN" | "ACTIVE";
	expanded: boolean;
	currentEpisode: TransistorEpisode | null;
	playing: boolean;
	loading: boolean;
	audio?: HTMLAudioElement;
	episodes: TransistorEpisode[];
	currentEpisodeTimeElapsed: number;
};

const playerState = () => {
	const initialState: PlayerState = {
		status: "HIDDEN",
		currentEpisode: null,
		currentEpisodeTimeElapsed: 0,
		playing: false,
		loading: false,
		audio: undefined,
		expanded: false,
		episodes: []
	};
	const { subscribe, update, set } = writable<PlayerState>(initialState);

	function setEpisodes(episodes: TransistorEpisode[]) {
		update((state) => setEpisodeState(state, episodes));
	}

	function setCurrentEpisode(episodeId: string) {
		update((state) => setCurrentEpisodeState(state, episodeId));
	}

	function episodePlay(episodeId: string) {
		update((state) => handleEpisodePlay(state, episodeId));
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
		update((state) => setAudioElementState(state, audio));
	}

	function setCurrentEpisodeTimeElapsed(time: number) {
		update((state) => setEpisodeTimeElapsed(state, time));
	}

	function setExpanded(expand: boolean) {
		update((state) => setExpandedStatus(state, expand));
	}

	function reset() {
		set({ ...initialState });
	}

	return {
		subscribe,
		update,
		reset,
		setEpisodes,
		setCurrentEpisode,
		setAudioElement,
		setExpanded,
		play,
		pause,
		setLoadingState,
		episodePlay,
		setCurrentEpisodeTimeElapsed
	};
};

export const player = playerState();
