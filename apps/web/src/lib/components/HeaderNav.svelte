<script lang="ts">
	import type { Navigation } from "sanity-schema";
	export let nav: Navigation;
</script>

<nav data-sveltekit-preload-data>
	<ul>
		{#if nav.items}
			{#each nav.items as navItem}
				<li>
					<a href={navItem.path}>{navItem.label}</a>
				</li>
			{/each}
		{/if}
	</ul>
</nav>
