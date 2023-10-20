<script lang="ts">
	import BlogCard from "$components/ui/blog-card/BlogCard.svelte";
	import PageInner from "$components/ui/page-layout/PageInner.svelte";
	import Heading from "$components/ui/typography/heading/Heading.svelte";

	export let data;
</script>

<PageInner>
	<Heading level="h1" class="italic mb-8">The Blog</Heading>
	{#if data.body.posts.length === 0}
		<p>No posts yet.</p>
	{:else}
		<ul class="md:grid md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-16">
			{#each data.body.posts as post}
				<li>
					<BlogCard {post} />
				</li>
			{/each}
		</ul>
	{/if}
</PageInner>
