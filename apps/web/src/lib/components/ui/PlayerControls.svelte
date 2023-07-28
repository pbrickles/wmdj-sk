<script lang="ts">
	import { player } from "$lib/state/Player/player";
	import { formatTime } from "$lib/utils/formatTime";
	import PlayButton from "./PlayButton.svelte";
	import type { TransistorEpisode } from "$lib/types";

	export let isVisible = true;
	export let episode: TransistorEpisode;
	let currentTime = 0;
	const handlePlay = () => player.episodePlay(episode.id);
</script>

{#if isVisible && $player.audio}
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
			<progress max={episode.attributes.duration} value={currentTime} />
			{formatTime(episode.attributes.duration)}
		</div>
	</section>
{/if}
