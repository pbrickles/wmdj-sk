<script lang="ts">
	import { page } from "$app/stores";
	import ImageBlock from "$lib/components/ImageBlock.svelte";
	import { PortableText } from "@portabletext/svelte";
	import { error } from "@sveltejs/kit";
	export let data;

	const post = data.body.posts.find((post) => post.slug.current === $page.params.slug);
	if (!post) {
		throw error(404, "Post not found");
	}
</script>

{#if post}
	<h1>{post.title}</h1>
	<PortableText
		value={post.body}
		components={{
			types: {
				mainImage: ImageBlock
			}
		}}
	/>
{/if}
