<script lang="ts">
	import type { TransistorEpisode } from "$lib/types/transistor";
	import { createDescriptionBySeason } from "./createDescriptionBySeason";

	export let episode: TransistorEpisode;
	const { attributes } = episode;
</script>

<div>
	<h3>{attributes.title}</h3>
	<article>
		{@html createDescriptionBySeason(attributes)}
	</article>
	<footer>
		<a href={attributes.media_url} download={attributes.title}>Download</a>
		<a href={`/episodes/${attributes.slug}`}>Find out more</a>
	</footer>
</div>
