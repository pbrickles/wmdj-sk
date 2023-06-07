<script lang="ts">
	import { page } from "$app/stores";
	import { PortableText } from "@portabletext/svelte";
	import { error } from "@sveltejs/kit";
	import type { Post } from "sanity-schema";
	export let data;

	function getPostBySlug(posts: Post[], slug: string) {
		const post = posts.find((post) => post.slug.current === slug);
		return post;
	}
	const post = getPostBySlug(data.body.posts, $page.params.slug);

	if (!post) {
		throw error(404, "Post not found");
	}
</script>

{#if post}
	<h1>{post.title}</h1>
	<PortableText value={post.body} />
{/if}
