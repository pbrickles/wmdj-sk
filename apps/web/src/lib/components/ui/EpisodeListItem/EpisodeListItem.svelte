<script lang="ts">
	import { player } from "$lib/state/Player/player";
	import type { TransistorEpisode } from "$lib/types/transistor";
	import { createDescriptionBySeason } from "./helpers/createDescriptionBySeason";
	import PlayButton from "../PlayButton.svelte";
	import DownloadIcon from "~icons/ant-design/cloud-download-outlined";
	import PlusIcon from "~icons/vaadin/plus";

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
			<div class="flex items-center">
				<a
					class="inline-flex items-center mr-md"
					href={attributes.media_url}
					download={attributes.title}><DownloadIcon class="mr-2" /> Download</a
				>
				<a href={slug} class="inline-flex items-center mr-md"
					><PlusIcon class="mr-2" />Find out more</a
				>
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
