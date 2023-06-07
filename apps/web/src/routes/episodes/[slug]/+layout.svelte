<script lang="ts">
	import { page } from "$app/stores";
	import AudioPlayer from "$lib/components/AudioPlayer/AudioPlayer.svelte";
	export let data;
	$: episode = data.body.episode;
	$: transcript = data.body.episodeTranscript;
	console.log($page);
</script>

<h1>{episode.attributes.title}</h1>
<AudioPlayer src={episode.attributes.media_url} />
{#if transcript}
	<nav>
		<a href={`/episodes/${$page.params.slug}`}>Show notes</a>
		<a href={`/episodes/${$page.params.slug}/transcript`}>Transcript</a>
	</nav>
{/if}
<slot />
