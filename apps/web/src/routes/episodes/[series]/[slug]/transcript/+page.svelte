<script lang="ts">
	import { PortableText } from "@portabletext/svelte";
	import { error } from "@sveltejs/kit";
	export let data;
	if (!data.body.episodeTranscript) {
		throw error(404, "Episode transcript not found");
	}
</script>

<section>
	<PortableText value={data.body.episodeTranscript?.body} />
</section>
