<script lang="ts">
	import Button from "$lib/components/ui/button/Button.svelte";
	import type { TabsTriggerProps } from "radix-svelte";
	import { Tabs as TabsPrimitive } from "radix-svelte";
	import { cn } from "$lib/utils";

	let className: string | undefined | null = undefined;
	export { className as class };
	export let value: TabsTriggerProps["value"];
</script>

<TabsPrimitive.Trigger
	class={cn(
		"inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none",
		className
	)}
	{value}
	{...$$restProps}
>
	<Button>
		<slot />
	</Button>
</TabsPrimitive.Trigger>
