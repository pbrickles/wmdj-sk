<script lang="ts">
	import { player } from "$lib/state/Player/player";
	import { formatTime } from "$lib/utils/formatTime";
	import { onMount } from "svelte";
	import PlayButton from "./PlayButton.svelte";
	import type { TransistorEpisode } from "$lib/types";

	export let isInline = false;
	export let episode: TransistorEpisode | null = null;
	let audio: HTMLAudioElement;
	let duration = 0;
	let currentTime = 0;
	const handlePlay = () =>
		player.episodePlay(isInline && episode ? episode.id : $player.currentEpisode?.id ?? "");

	onMount(() => {
		player.setAudioElement(audio);
		player.setExpanded(isInline);
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

{#if ($player.status === "ACTIVE" && !$player.expanded) || $player.expanded}
	<section class="player">
		<p>{$player?.currentEpisode?.attributes.title ?? ""}</p>

		<PlayButton
			playing={$player.playing}
			loading={$player.loading}
			clickHandler={handlePlay}
			isCurrentEpisode
		/>

		<div class="progress-bar">
			{formatTime(currentTime)}
			<progress max={duration} value={currentTime} />
			{formatTime(duration)}
		</div>
	</section>
{/if}
