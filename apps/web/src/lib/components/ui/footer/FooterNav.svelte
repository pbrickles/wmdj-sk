<script lang="ts">
	import type { Navigation } from "sanity-schema";
	import ChevronUpIcon from "~icons/ion/chevron-up";
	import CloseIcon from "~icons/ion/close-outline";
	import { player } from "$lib/state/Player/player";
	import PlayerControls from "../PlayerControls.svelte";
	import Audio from "../Audio.svelte";
	import { slide } from "svelte/transition";
	export let nav: Navigation;
	$: navClass = $player.currentEpisode ? "pb-16" : "";

	const handleClose = () => {
		player.pause();
		player.setUIStatus("HIDDEN");
	};
</script>

<Audio />
{#if $player.currentEpisode && $player.status === "FOOTER"}
	<div transition:slide class="fixed bottom-0 w-full bg-white">
		<ChevronUpIcon class="w-6 h-6 m-auto" />
		<button on:click={handleClose} class="m-auto"
			><CloseIcon class="w-6 h-6 " on:click={handleClose} /></button
		>

		<PlayerControls episode={$player.currentEpisode} isVisible={!$player.expanded} />
	</div>
{/if}
<nav class={navClass}>
	{#if nav.items}
		<ul class="list-none">
			{#each nav.items as navItem}
				<li class="inline-block mr-4">
					<a href={navItem.path}>{navItem.label}</a>
				</li>
			{/each}
		</ul>
	{/if}
</nav>
