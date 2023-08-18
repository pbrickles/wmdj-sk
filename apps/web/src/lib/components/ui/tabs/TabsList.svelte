<script lang="ts">
	import { Tabs as TabsPrimitive } from "radix-svelte";
	import { cn } from "$lib/utils";

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<TabsPrimitive.List class={cn("inline-flex flex-wrap items-center", className)} {...$$restProps}>
	<slot />
</TabsPrimitive.List>
