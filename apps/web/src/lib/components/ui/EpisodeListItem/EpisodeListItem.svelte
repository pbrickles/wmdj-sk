<script lang="ts">
	import { player } from "$lib/state/Player/player";
	import type { TransistorEpisode } from "$lib/types/transistor";
	import { createDescriptionBySeason } from "./helpers/createDescriptionBySeason";
	import PlayButton from "../PlayButton.svelte";
	import DownloadIcon from "~icons/ant-design/cloud-download-outlined";
	import PlusIcon from "~icons/vaadin/plus";
	import { SeriesImageTile } from "$components/ui/series-image-tile";

	export let episode: TransistorEpisode;
	const { attributes } = episode;
	const handlePlaying = () => player.episodePlay(episode.id);
	const slug = `/episodes/series-${attributes.season}/${attributes.slug}`;
</script>

<div class="flex flex-wrap md:flex-nowrap">
	<SeriesImageTile seriesNumber={attributes.season} episodeImagePath={attributes.image_url} />
	<div class="md:hidden">
		<PlayButton
			loading={$player.loading}
			playing={$player.playing}
			isCurrentEpisode={$player.currentEpisode?.id === episode.id}
			clickHandler={handlePlaying}
		/>
	</div>
	<div>
		<h3 class="uppercase font-bold"><a href={slug}>{attributes.title}</a></h3>
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
				<div>
					<PlayButton
						loading={$player.loading}
						playing={$player.playing}
						isCurrentEpisode={$player.currentEpisode?.id === episode.id}
						clickHandler={handlePlaying}
					/>
				</div>
			</div>
		</footer>
	</div>
</div>
