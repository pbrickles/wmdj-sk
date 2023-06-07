import type { TransistorEpisode } from "$lib/types";
import { getEpisodeById } from "$lib/data/helpers/getEpisodeById";
import { writable } from "svelte/store";

const playerState = () => {
	const { subscribe, update } = writable<{
		status: "HIDDEN" | "ACTIVE" | "EXPANDED";
		currentShow: TransistorEpisode | null;
		playing: boolean;
		audio: HTMLAudioElement;
		episodes: TransistorEpisode[];
	}>({
		status: "HIDDEN",
		currentShow: null,
		playing: false,
		audio: new Audio(),
		episodes: []
	});

	function setEpisodes(episodes: TransistorEpisode[]) {
		update((state) => {
			state.episodes = episodes;
			return state;
		});
	}

	function playEpisode(episodeId: string) {
		update((state) => {
			state.audio?.play();
			state.status = "ACTIVE";
			state.currentShow = state.episodes ? getEpisodeById(episodeId, state.episodes) : null;
			return state;
		});
	}

	function play() {
		update((state) => {
			state.playing = true;
			return state;
		});
	}
	function pause() {
		update((state) => {
			state.playing = false;
			return state;
		});
	}

	return {
		subscribe,
		update,
		playEpisode,
		setEpisodes,
		controlPlaying: {
			play,
			pause
		}
	};
};

export const player = playerState();
