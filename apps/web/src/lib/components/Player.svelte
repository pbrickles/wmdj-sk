<script lang="ts">
	import { player } from "$lib/state/player";
	import { formatTime } from "$lib/utils/formatTime";

	let audio: HTMLAudioElement | undefined;
	let duration = 0;
	let currentTime = 0;

	function play() {
		audio?.play();
		player.controlPlaying.play();
	}
	function pause() {
		audio?.pause();
		player.controlPlaying.pause();
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

	player.subscribe((state) => {
		console.log(state);
	});
</script>

<audio
	bind:this={audio}
	src={$player.currentShow?.attributes.media_url}
	on:loadedmetadata={updateMeta}
	on:timeupdate={timeUpdate}
/>

{#if $player.status === "ACTIVE" && $player.currentShow}
	<section class="player">
		<p>{$player.currentShow.attributes.title}</p>

		<div>
			{#if $player.playing}
				<button class="player-button" on:click={pause}>Pause</button>
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
