<script lang="ts">
	import type { VariantProps } from "class-variance-authority";
	import { Dialog as SheetPrimitive } from "radix-svelte";
	import { cn } from "$lib/utils";
	import { sheetVariants } from ".";
	import SheetOverlay from "./SheetOverlay.svelte";
	import SheetPortal from "./SheetPortal.svelte";
	import MenuToCloseIcon from "~icons/line-md/menu-to-close-transition";

	let className: string | undefined | null = undefined;
	export { className as class };
	export let position: VariantProps<typeof sheetVariants>["position"] = "right";
	export let size: VariantProps<typeof sheetVariants>["size"] = "default";
	export let closeClass: string | undefined | null = undefined;

	const closeIconClasses = cn(
		"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		closeClass
	);
</script>

<SheetPortal {position}>
	<SheetOverlay />
	<SheetPrimitive.Content class={cn(sheetVariants({ position, size }), className)} {...$$restProps}>
		<slot />
		<SheetPrimitive.Close class={closeIconClasses}>
			<MenuToCloseIcon class="w-8 h-8" />
			<span class="sr-only">Close</span>
		</SheetPrimitive.Close>
	</SheetPrimitive.Content>
</SheetPortal>
