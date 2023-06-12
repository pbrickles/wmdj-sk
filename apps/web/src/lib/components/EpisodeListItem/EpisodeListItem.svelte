<script lang="ts">
	import { player } from "$lib/state/Player/player";
	import type { TransistorEpisode } from "$lib/types/transistor";
	import { createDescriptionBySeason } from "./helpers/createDescriptionBySeason";
	import PlayButton from "../PlayButton.svelte";

	export let episode: TransistorEpisode;
	const { attributes } = episode;
	const handlePlaying = () => player.episodePlay(episode.id);
	const slug = `/episodes/series-${attributes.season}/${attributes.slug}`;
</script>

<div>
	<h3><a href={slug}>{attributes.title}</a></h3>
	<article>
		{@html createDescriptionBySeason(attributes)}
	</article>
	<footer>
		<div>
			<div>
				<a href={attributes.media_url} download={attributes.title}>Download</a>
				<a href={slug}>Find out more</a>
			</div>
			<PlayButton
				loading={$player.loading}
				playing={$player.playing}
				isCurrentEpisode={$player.currentEpisode?.id === episode.id}
				clickHandler={handlePlaying}
			/>
		</div>
	</footer>
</div>
