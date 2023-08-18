<script lang="ts">
	import type { Navigation } from "sanity-schema";
	import NavItems from "./NavItems.svelte";
	export let nav: Navigation;
</script>

<div class="hidden md:block"><NavItems {nav} /></div>
