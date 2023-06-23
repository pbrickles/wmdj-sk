<script lang="ts">
	import { PortableText } from "@portabletext/svelte";

	export let data;
</script>

<h1>Blog</h1>
{#if data.body.posts.length === 0}
	<p>No posts yet.</p>
{:else}
	<ul>
		{#each data.body.posts as post}
			<li>
				<img
					src={post.mainImageUrl}
					alt={post.mainImage.alt}
					height="200"
					width="200"
					loading="lazy"
				/>
				<h2><a href={`/blog/${post.slug.current}`}>{post.title}</a></h2>
				<div>
					<PortableText value={post.excerptPortableText} />
				</div>
			</li>
		{/each}
	</ul>
{/if}
