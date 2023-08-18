<script lang="ts">
	import type { TabsTriggerProps } from "radix-svelte";
	import { Tabs as TabsPrimitive } from "radix-svelte";
	import { cn } from "$lib/utils";

	let className: string | undefined | null = undefined;
	export { className as class };
	export let value: TabsTriggerProps["value"];
</script>

<TabsPrimitive.Trigger
	class={cn(
		"inline-flex items-center justify-center bg-primary border-2 border-primary-foreground py-sm px-md mr-sm text-primary-foreground data-[state=inactive]:bg-pinkLight data-[state=inactive]:border-pinkLight  whitespace-nowrap ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none",
		className
	)}
	{value}
	{...$$restProps}
>
	<slot />
</TabsPrimitive.Trigger>
