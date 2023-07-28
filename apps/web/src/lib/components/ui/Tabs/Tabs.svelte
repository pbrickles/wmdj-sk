<script context="module" lang="ts">
	export type TabItem = {
		label: string;
		value: number;
		component: ConstructorOfATypedSvelteComponent;
		componentProps?: Record<string, unknown>;
	};
</script>

<script lang="ts">
	import Tab from "./Tab.svelte";

	export let items: TabItem[] = [];
	export let activeTabValue = 1;

	const handleClick = (tabValue: TabItem["value"]) => () => (activeTabValue = tabValue);
</script>

<ul>
	{#each items as item}
		<li class={activeTabValue === item.value ? "active" : ""}>
			<span on:click={handleClick(item.value)} on:keypress={handleClick(item.value)}
				>{item.label}</span
			>
		</li>
	{/each}
</ul>
{#each items as item}
	{#if activeTabValue == item.value}
		<Tab>
			<svelte:component this={item.component} {...item.componentProps} />
		</Tab>
	{/if}
{/each}
