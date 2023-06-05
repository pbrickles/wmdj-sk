<script lang="ts">
	export let data;
	const {
		body: { episodes },
		EpisodeListComponent
	} = data;
</script>

<h1>WMDJ</h1>
<EpisodeListComponent {episodes} />
