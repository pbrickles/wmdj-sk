<script lang="ts">
	import { player } from "$lib/state/Player/player";
	import type { TransistorEpisode } from "$lib/types/transistor";
	import { createDescriptionBySeason } from "./helpers/createDescriptionBySeason";
	import PlayButton from "$components/ui/PlayButton.svelte";
	import DownloadIcon from "~icons/ant-design/cloud-download-outlined";
	import PlusIcon from "~icons/vaadin/plus";
	import { SeriesImageTile } from "$components/ui/series-image-tile";
	import { Heading } from "$components/ui/typography/heading";

	export let episode: TransistorEpisode;
	const { attributes } = episode;
	const handlePlaying = () => {
		player.setUIStatus("FOOTER");
		player.episodePlay(episode.id);
	};
	const slug = `/episodes/series-${attributes.season}/${attributes.slug}`;
</script>

<div
	class="flex flex-wrap md:grid md:grid-cols-[minMax(150px,220px)_1fr_90px] md:gap-2 pb-md mb-md lg:pb-lg lg:mb-lg border-b"
>
	<SeriesImageTile seriesNumber={attributes.season} episodeImagePath={attributes.image_url} />
	<div class="md:hidden flex items-center justify-center w-[50%]">
		<PlayButton
			loading={$player.loading}
			playing={$player.playing}
			isCurrentEpisode={$player.currentEpisode?.id === episode.id}
			clickHandler={handlePlaying}
			size="md"
		/>
	</div>
	<article class="flex flex-col justify-between">
		<Heading level={3} class="pt-2 mb-5 uppercase">
			<a href={slug}>{attributes.title}</a></Heading
		>
		<p class="font-normal tracking-wider mb-4">
			{@html createDescriptionBySeason(attributes)}
		</p>

		<footer>
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
		</footer>
	</article>
	<div class="hidden md:block self-center">
		<PlayButton
			loading={$player.loading}
			playing={$player.playing}
			isCurrentEpisode={$player.currentEpisode?.id === episode.id}
			clickHandler={handlePlaying}
			size="md"
		/>
	</div>
</div>
