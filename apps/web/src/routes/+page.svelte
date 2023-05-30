<script lang="ts">
	import EpisodeList from "$lib/components/EpisodeList/EpisodeList.svelte";

	export let data;
	const {
		body: { episodes }
	} = data;
</script>

<h1>WMDJ</h1>
<EpisodeList {episodes} />
