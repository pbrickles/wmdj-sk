<script lang="ts">
	import AudioPlayer from "../../../lib/components/AudioPlayer/AudioPlayer.svelte";
	export let data;

	$: episode = data.body.episode;
</script>

<h1>{episode.attributes.title}</h1>
<section>
	<AudioPlayer src={episode.attributes.media_url} />
</section>
<section>
	Tabs for:
	<ul>
		<li>Show notes</li>
		<li>Transcript</li>
	</ul>
	<div>{@html episode.attributes.formatted_description}</div>
</section>
