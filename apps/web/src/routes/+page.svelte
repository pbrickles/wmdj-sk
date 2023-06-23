<script lang="ts">
	import type { TabItem } from "$lib/components/Tabs/Tabs.svelte";
	import Tabs from "$lib/components/Tabs/Tabs.svelte";
	import { getEpisodesBySeriesNumber } from "$lib/data/helpers/getEpisodesBySeriesNumber.js";

	export let data;
	const {
		body: { episodes, availableSeries },
		EpisodeListComponent
	} = data;
	const tabs: TabItem[] = availableSeries.map((series) => ({
		label: `Series ${series}`,
		value: series,
		component: EpisodeListComponent,
		componentProps: { episodes: getEpisodesBySeriesNumber(episodes, series) }
	}));
</script>

<h1>WMDJ</h1>

<Tabs items={tabs} />
