<script lang="ts">
	import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "$components/ui/sheet";
	import type { Navigation } from "sanity-schema";
	import NavItems from "./NavItems.svelte";

	export let nav: Navigation;
</script>

<div class="md:hidden">
	<Sheet>
		<SheetTrigger>Burger Menu</SheetTrigger>
		<SheetContent size="full">
			<SheetHeader>
				<NavItems {nav} />
			</SheetHeader>
		</SheetContent>
	</Sheet>
</div>
