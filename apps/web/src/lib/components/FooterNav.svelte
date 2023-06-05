<script lang="ts">
	import type { Navigation } from "sanity-schema";
	export let nav: Navigation;
</script>

<footer>
	{#each nav.items as navItem}
		<li>
			<a href={navItem.path}>{navItem.label}</a>
		</li>
	{/each}
</footer>
