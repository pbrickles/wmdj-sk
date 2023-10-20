<script lang="ts">
	import { cn } from "$lib/utils";
	import type { HeadingLevel } from ".";

	let className: string | undefined | null = undefined;
	export { className as class };
	export let level: HeadingLevel;

	const variant: Record<HeadingLevel, string> = {
		h1: "text-4xl lg:text-5xl",
		h2: "text-3xl ",
		h3: "text-2xl",
		h4: "text-xl",
		h5: "text-l",
		h6: "text-m"
	};
</script>

<svelte:element
	this={level}
	class={cn("scroll-m-20 font-bold tracking-[1px]", variant[level], className)}
>
	<slot />
</svelte:element>
