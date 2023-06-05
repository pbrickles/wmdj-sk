<script lang="ts">
	import type { Navigation } from "sanity-schema";
	import Player from "./Player.svelte";
	export let nav: Navigation;
</script>

<footer>
	<Player />
	<nav>
		{#each nav.items as navItem}
			<li>
				<a href={navItem.path}>{navItem.label}</a>
			</li>
		{/each}
	</nav>
</footer>
