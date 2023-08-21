<script lang="ts">
	import { player } from "$lib/state/Player/player";
	import { formatTime } from "$lib/utils/formatTime";
	import PlayButton from "./PlayButton.svelte";
	import type { TransistorEpisode } from "$lib/types";
	import Progress from "./progress/Progress.svelte";

	export let isVisible = true;
	export let episode: TransistorEpisode;
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
			{formatTime($player.currentEpisodeTimeElapsed)}
			<Progress
				max={episode.attributes.duration}
				value={$player.currentEpisodeTimeElapsed}
				class="w-[60%]"
			/>
			{formatTime(episode.attributes.duration)}
		</div>
	</section>
{/if}
