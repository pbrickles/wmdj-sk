<script lang="ts">
	import type { TabItem } from "$components/ui/Tabs/Tabs.svelte";
	import Tabs from "$components/ui/Tabs/Tabs.svelte";
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

<h1 class="font-bold italic text-headlineSm lg:text-headlineLg max-w-[350px] lg:max-w-[200px] mb-6">
	Why Mums Don't Jump
</h1>
<p class="text-base">
	Busting taboos about leaks & lumps after childbirth. A kick ass podcast about incontinence,
	prolapse and pelvic pain.
</p>

<Tabs items={tabs} />
