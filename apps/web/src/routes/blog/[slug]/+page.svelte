<script lang="ts">
	export let data;
	$: post = data.body.post;
</script>

<h1>{post.title}</h1>
