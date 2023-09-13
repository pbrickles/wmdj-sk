<script lang="ts">
	import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "$components/ui/sheet";
	import type { Navigation } from "sanity-schema";
	import NavItems from "./NavItems.svelte";
	import BurgerIcon from "~icons/codicon/menu";

	export let nav: Navigation;
</script>

<div class="md:hidden">
	<Sheet>
		<SheetTrigger>
			<div class="flex flex-col items-center">
				<BurgerIcon class="w-7 h-7" />
				<span class="text-xs uppercase tracking-widest">Menu</span>
			</div>
		</SheetTrigger>
		<SheetContent size="full" class="pt-0" closeClass="top-1">
			<SheetHeader>
				<NavItems {nav} />
			</SheetHeader>
		</SheetContent>
	</Sheet>
</div>
