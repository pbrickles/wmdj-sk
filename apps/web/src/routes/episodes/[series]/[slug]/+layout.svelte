<script lang="ts">
	import { page } from "$app/stores";
	import PlayerControls from "$components/ui/PlayerControls.svelte";
	import { player } from "$lib/state/Player/player.js";
	import { onMount } from "svelte";
	export let data;
	$: episode = data.body.episode;
	$: transcript = data.body.episodeTranscript;
	onMount(() => {
		player.setUIStatus("EXPANDED");
	});
</script>

<h1>{episode.attributes.title}</h1>
<PlayerControls {episode} />
{#if transcript}
	<!-- These will become tabs 👇-->
	<nav>
		<a href={`/episodes/${$page.params.slug}`}>Show notes</a>
		<a href={`/episodes/${$page.params.slug}/transcript`}>Transcript</a>
	</nav>
{/if}
<slot />
