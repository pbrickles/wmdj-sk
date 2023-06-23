<script lang="ts">
	import type { Navigation } from "sanity-schema";
	import { player } from "$lib/state/Player/player";
	import PlayerControls from "./PlayerControls.svelte";
	import Audio from "./Audio.svelte";
	export let nav: Navigation;
</script>

<footer>
	<Audio />
	{#if $player.currentEpisode}
		<PlayerControls episode={$player.currentEpisode} isVisible={!$player.expanded} />
	{/if}
	<nav>
		{#if nav.items}
			{#each nav.items as navItem}
				<li>
					<a href={navItem.path}>{navItem.label}</a>
				</li>
			{/each}
		{/if}
	</nav>
</footer>
