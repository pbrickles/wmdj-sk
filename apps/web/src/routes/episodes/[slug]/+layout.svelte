<script lang="ts">
	import { page } from "$app/stores";
	import AudioPlayer from "$lib/components/AudioPlayer/AudioPlayer.svelte";
	export let data;
	$: episode = data.body.episode;
	$: transcript = data.body.episodeTranscript;
</script>

<h1>{episode.attributes.title}</h1>
<!-- This probably needs a rethink now 👇 -->
<AudioPlayer src={episode.attributes.media_url} />
{#if transcript}
	<!-- These will become tabs 👇-->
	<nav>
		<a href={`/episodes/${$page.params.slug}`}>Show notes</a>
		<a href={`/episodes/${$page.params.slug}/transcript`}>Transcript</a>
	</nav>
{/if}
<slot />
