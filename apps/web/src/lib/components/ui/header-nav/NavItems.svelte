<script lang="ts">
	import type { Navigation } from "sanity-schema";
	export let nav: Navigation;
</script>

<nav class="md:block" data-sveltekit-preload-data>
	<ul class="flex flex-col h-screen pt-10 text-right md:flex-row md:p-0 md:text-left md:h-auto">
		{#if nav.items}
			{#each nav.items as navItem}
				<li class="block py-4 pl-0 md:inline-block md:mr-4">
					<a href={navItem.path}>{navItem.label}</a>
				</li>
			{/each}
		{/if}
	</ul>
</nav>
