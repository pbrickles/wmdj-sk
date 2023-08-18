<script lang="ts">
	import { player } from "$lib/state/Player/player";
	import { onMount } from "svelte";

	let audio: HTMLAudioElement;
	let duration = 0;
	let currentTime = 0;

	onMount(() => {
		player.setAudioElement(audio);
	});

	function play() {
		player.play();
	}

	function updateMeta() {
		if (audio) {
			duration = audio.duration;
			currentTime = audio.currentTime;
		}
	}

	function timeUpdate() {
		if (audio) {
			currentTime = audio.currentTime;
		}
	}
</script>

<audio
	bind:this={audio}
	src={$player.currentEpisode?.attributes.media_url}
	on:loadstart={(e) => player.setLoadingState(true)}
	on:loadedmetadata={updateMeta}
	on:timeupdate={timeUpdate}
	on:loadeddata={(e) => play()}
	on:canplay={(e) => player.setLoadingState(false)}
/>
