<script lang="ts">
	import EpisodeList from "$components/ui/episode-list/EpisodeList.svelte";
	import Heading from "$components/ui/typography/heading/Heading.svelte";

	export let data;
	$: episodes = data.body.seriesEpisodes;
	$: series = data.body.seriesNumber;
	console.log(data);
</script>

<Heading level="h1">Series {series}</Heading>
<EpisodeList {episodes} />
