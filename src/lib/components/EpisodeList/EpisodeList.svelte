<script lang="ts">
	import type { TransistorEpisode } from '$lib/types/transistor';

	export let episodes: TransistorEpisode[];
</script>

<ul>
	{#each episodes as episode}
		<li>{episode.attributes.title}</li>
	{/each}
</ul>
