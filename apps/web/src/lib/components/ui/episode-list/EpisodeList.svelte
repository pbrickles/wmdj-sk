<script lang="ts">
	import type { TransistorEpisode } from "$lib/types/transistor";
	import EpisodeListItem from "$components/ui/episode-list-item/EpisodeListItem.svelte";

	export let episodes: TransistorEpisode[];
</script>

<ul>
	{#each episodes as episode}
		<li><EpisodeListItem {episode} /></li>
	{/each}
</ul>
