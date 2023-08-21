<script lang="ts">
	import type { Navigation } from "sanity-schema";
	import { player } from "$lib/state/Player/player";
	import PlayerControls from "./PlayerControls.svelte";
	import Audio from "./Audio.svelte";
	import { slide } from "svelte/transition";
	export let nav: Navigation;
	$: navClass = $player.currentEpisode ? "pb-16" : "";
</script>

<footer>
	<Audio />
	{#if $player.currentEpisode}
		<div transition:slide class="fixed bottom-0 w-full bg-white">
			<PlayerControls episode={$player.currentEpisode} isVisible={!$player.expanded} />
		</div>
	{/if}
	<nav class={navClass}>
		{#if nav.items}
			{#each nav.items as navItem}
				<li>
					<a href={navItem.path}>{navItem.label}</a>
				</li>
			{/each}
		{/if}
	</nav>
</footer>
