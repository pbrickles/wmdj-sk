<script lang="ts">
	export let data;
	let {
		body: { page }
	} = data;
</script>

<h1>{page.title}</h1>
<p>Page will appear here</p>
