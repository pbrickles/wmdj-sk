<script lang="ts">
	export let data;
	$: episode = data.body.episode;
</script>

<section>
	<div>{@html episode.attributes.formatted_description}</div>
</section>
