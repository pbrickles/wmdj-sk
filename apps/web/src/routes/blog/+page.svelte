<script lang="ts">
	export let data;
</script>

<h1>Blog</h1>
{#if data.body.posts.length === 0}
	<p>No posts yet.</p>
{:else}
	<ul>
		{#each data.body.posts as post}
			<li>
				<a href={`/blog/${post.slug.current}`}>{post.title}</a>
			</li>
		{/each}
	</ul>
{/if}
