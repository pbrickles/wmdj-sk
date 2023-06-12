<script lang="ts">
	import EpisodeList from "$lib/components/EpisodeList/EpisodeList.svelte";

	export let data;
	$: episodes = data.body.seriesEpisodes;
	$: series = data.body.seriesNumber;
	console.log(data)
</script>

<h1>Series {series}</h1>
<EpisodeList {episodes} />
