<script lang="ts">
	export let data;
	let {
		body: { mainNav, footerNav }
	} = data;
</script>

<nav>
	<ul>
		{#each mainNav.items as navItem}
			<li>
				<a href={`${navItem.path}/`}>{navItem.label}</a>
			</li>
		{/each}
	</ul>
</nav>
<slot />
<footer>
	{#each footerNav.items as navItem}
		<li>
			<a href={`${navItem.path}/`}>{navItem.label}</a>
		</li>
	{/each}
</footer>
