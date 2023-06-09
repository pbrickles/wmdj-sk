<script lang="ts">
	import type { Navigation } from "sanity-schema";
	import { player } from "$lib/state/Player/player";
	import Player from "./Player.svelte";
	export let nav: Navigation;
	{
		console.log($player);
	}
</script>

<footer>
	{#if !$player.expanded && $player.currentEpisode}
		<Player />
	{/if}
	<nav>
		{#each nav.items as navItem}
			<li>
				<a href={navItem.path}>{navItem.label}</a>
			</li>
		{/each}
	</nav>
</footer>
