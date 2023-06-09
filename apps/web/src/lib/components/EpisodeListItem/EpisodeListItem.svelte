<script lang="ts">
	import { player } from "$lib/state/Player/player";
	import type { TransistorEpisode } from "$lib/types/transistor";
	import { createDescriptionBySeason } from "./helpers/createDescriptionBySeason";

	export let episode: TransistorEpisode;
	const { attributes } = episode;
	const handlePlaying = () => player.episodePlay(episode.id);
</script>

<div>
	<h3>{attributes.title}</h3>
	<article>
		{@html createDescriptionBySeason(attributes)}
	</article>
	<footer>
		<div>
			<div>
				<a href={attributes.media_url} download={attributes.title}>Download</a>
				<a href={`/episodes/${attributes.slug}`}>Find out more</a>
			</div>
			<button on:click={handlePlaying}>
				{#if $player.playing && $player.currentEpisode?.id === episode.id}
					{#if $player.loading}
						Loading...
					{:else}
						Pause
					{/if}
				{:else}
					Play
				{/if}
			</button>
		</div>
	</footer>
</div>
