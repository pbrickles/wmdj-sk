<script lang="ts">
	import CardHeader from "$components/ui/card/card-header.svelte";
	import CardTitle from "$components/ui/card/card-title.svelte";
	import Card from "$components/ui/card/card.svelte";
	import PageInner from "$components/ui/page-layout/PageInner.svelte";
	import Heading from "$components/ui/typography/heading/Heading.svelte";
	import { PortableText } from "@portabletext/svelte";

	export let data;
	console.log(data);
</script>

<PageInner>
	<Heading level={1} class="italic mb-8">The Blog</Heading>
	{#if data.body.posts.length === 0}
		<p>No posts yet.</p>
	{:else}
		<ul>
			{#each data.body.posts as post}
				<li>
					<Card>
						<CardHeader>
							<img
								src={post.mainImageUrl}
								alt={post.mainImage.alt}
								height="200"
								width="200"
								loading="lazy"
							/>
						</CardHeader>
						<CardTitle>
							<a href={`/blog/${post.slug.current}`}>{post.title}</a></CardTitle
						>
						<div>
							<PortableText value={post.excerpt} />
						</div>
					</Card>
				</li>
			{/each}
		</ul>
	{/if}
</PageInner>
