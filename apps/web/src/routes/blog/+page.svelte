<script lang="ts">
	import { PortableText } from "@portabletext/svelte";

	export let data;
	// const sortedPosts = data.body.posts.sort((a, b) => {
	// 	if (!a.publishedAt || !b.publishedAt) return 0;
	// 	if (a.publishedAt < b.publishedAt) {
	// 		return 1;
	// 	}

	// 	return -1;
	// });
</script>

<h1>Blog</h1>
{#if data.body.posts.length === 0}
	<p>No posts yet.</p>
{:else}
	<ul>
		{#each data.body.posts as post}
			<li>
				<img src={post.mainImageUrl} alt={post.mainImage.alt} height="200" width="200" />
				<h2><a href={`/blog/${post.slug.current}`}>{post.title}</a></h2>
				<div>
					<PortableText value={post.excerptPortableText} />
				</div>
			</li>
		{/each}
	</ul>
{/if}
