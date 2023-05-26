<script lang="ts">
	import EpisodeList from '$lib/components/EpisodeList/EpisodeList.svelte';

	export let data;
	const {
		body: { episodes }
	} = data;
</script>

<h1>WMDJ</h1>
<p>Moving <a href="https://whymumsdontjump.com" target="_blank">WMDJ</a> to sveletkit???</p>
<EpisodeList {episodes} />
