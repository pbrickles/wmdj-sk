<script lang="ts">
	import { player } from "$lib/state/player";
	import type { TransistorEpisode } from "$lib/types/transistor";
	import { createDescriptionBySeason } from "./createDescriptionBySeason";

	export let episode: TransistorEpisode;
	const { attributes } = episode;
	const playEpisode = () => {
		player.playEpisode(episode.id);
	};
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
			<button on:click={playEpisode}>Play</button>
		</div>
	</footer>
</div>
