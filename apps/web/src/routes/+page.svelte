<script lang="ts">
	import { Tabs, TabsContent, TabsList, TabsTrigger } from "$components/ui/tabs";
	import { getEpisodesBySeriesNumber } from "$lib/data/helpers/getEpisodesBySeriesNumber.js";
	import hero from "$lib/assets/hero.jpg";
	import arrowDown from "$lib/assets/arrow-down.png";
	import Heading from "$components/ui/typography/heading/Heading.svelte";

	export let data;
	const {
		body: { episodes, availableSeries },
		EpisodeListComponent
	} = data;
	const tabs = [
		{
			label: "Latest Episodes",
			value: "latest",
			component: EpisodeListComponent,
			componentProps: { episodes }
		},
		...availableSeries.map((series) => ({
			label: `Series ${series}`,
			value: series.toString(),
			component: EpisodeListComponent,
			componentProps: { episodes: getEpisodesBySeriesNumber(episodes, series) }
		})),
		{
			label: "All Episodes",
			value: "all",
			component: EpisodeListComponent,
			componentProps: { episodes: [...episodes].reverse() }
		}
	];
</script>

<div class="pt-sm mb-lg sm:grid md:gap-1 md:grid-cols-4 lg:grid-cols-12">
	<div class="flex flex-col lg:justify-center sm:col-span-2 lg:col-span-4 lg:mb-8">
		<Heading
			level={1}
			class="font-bold italic mb-6 max-w-[350px] md:text-8 md:mt-4 md:mb-8 lg:text-[82px] lg:leading-[100%] lg:mb-10 lg:max-w-[200px] "
		>
			Why Mums Don't Jump
		</Heading>
		<p class="text-lg mb-8 leading-relaxed">
			Busting taboos about leaks & lumps after childbirth. A kick ass podcast about incontinence,
			prolapse and pelvic pain.
		</p>
		<div>
			<img src={arrowDown} alt="down arrow" />
		</div>
	</div>
	<div class="sm:col-span-2 lg:col-span-7 lg:col-start-6">
		<img src={hero} alt="Women talking about prolapse and pelvic organ problems" />
	</div>
</div>

<div>
	<Heading level={2} class="mb-md text-[26px] md:text-[28px] italic">The podcast</Heading>
	<Tabs value={tabs[0].value}>
		<TabsList class="mb-lg">
			{#each tabs as tab}
				<TabsTrigger value={tab.value}>{tab.label}</TabsTrigger>
			{/each}
		</TabsList>
		{#each tabs as tab}
			<TabsContent value={tab.value}>
				<svelte:component this={tab.component} {...tab.componentProps} />
			</TabsContent>
		{/each}
	</Tabs>
</div>
