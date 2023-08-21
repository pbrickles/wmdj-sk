<script lang="ts">
	import { cn } from "$lib/utils";

	let className: string | undefined | null = undefined;
	export { className as class };
	type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
	export let level: HeadingLevel;

	const variant: Record<HeadingLevel, string> = {
		1: "text-4xl lg:text-5xl",
		2: "test-3xl ",
		3: "text-2xl",
		4: "text-xl",
		5: "text-l",
		6: "text-m"
	};
</script>

<svelte:element
	this={`h${level}`}
	class={cn("scroll-m-20 uppercase font-bold tracking-[1px]", variant[level], className)}
>
	<slot />
</svelte:element>
