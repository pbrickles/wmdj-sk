<script lang="ts">
	import type { Navigation } from "sanity-schema";
	export let footerNav: Navigation;
</script>

<footer>
	{#each footerNav.items as navItem}
		<li>
			<a href={navItem.path}>{navItem.label}</a>
		</li>
	{/each}
</footer>
