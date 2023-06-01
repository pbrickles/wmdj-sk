<script lang="ts">
	export let data;
	let {
		body: { post }
	} = data;
</script>

<h1>{post.title}</h1>
<p>Post will appear here</p>
