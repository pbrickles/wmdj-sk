<script lang="ts">
	import PageInner from "$components/ui/page-layout/PageInner.svelte";
	import Heading from "$components/ui/typography/heading/Heading.svelte";
	import { PortableText } from "@portabletext/svelte";

	export let data;
</script>

<PageInner>
	<Heading level={1} class="italic mb-8">The Blog</Heading>
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
</PageInner>
