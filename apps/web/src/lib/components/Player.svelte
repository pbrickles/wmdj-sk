<script lang="ts">
	import { player } from "$lib/state/Player/player";
	import { formatTime } from "$lib/utils/formatTime";
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
	function pause() {
		player.pause();
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

{#if $player.status === "ACTIVE" && $player.currentEpisode}
	<section class="player">
		<p>{$player.currentEpisode.attributes.title}</p>

		<div>
			{#if $player.playing}
				<button class="player-button" on:click={pause}>
					{#if $player.loading}
						Loading...
					{:else}
						Pause
					{/if}
				</button>
			{:else}
				<button class="player-button pause" on:click={play}>Play</button>
			{/if}
		</div>

		<div class="progress-bar">
			{formatTime(currentTime)}
			<progress max={duration} value={currentTime} />
			{formatTime(duration)}
		</div>
	</section>
{/if}
