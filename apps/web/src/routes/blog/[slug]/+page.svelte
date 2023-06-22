<script lang="ts">
	import { page } from "$app/stores";
	import { PortableText } from "@portabletext/svelte";
	import { error } from "@sveltejs/kit";
	import type { Post } from "sanity-schema";
	export let data;

	type PostWithImageUrl = Post & { mainImageUrl: string };
	function getPostBySlug(posts: PostWithImageUrl[], slug: string) {
		const post = posts.find((post) => post.slug.current === slug);
		return post;
	}
	const post = getPostBySlug(data.body.posts, $page.params.slug);

	if (!post) {
		throw error(404, "Post not found");
	}
</script>

{#if post}
	<pre>
	{JSON.stringify(post.mainImageUrl, null, 2)}
	</pre>
	<h1>{post.title}</h1>
	<PortableText value={post.body} />
{/if}
