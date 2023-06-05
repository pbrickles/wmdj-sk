<script lang="ts">
	import type { Navigation } from "sanity-schema";
	export let mainNav: Navigation;
</script>

<nav>
	<ul>
		{#each mainNav.items as navItem}
			<li>
				<a href={navItem.path}>{navItem.label}</a>
			</li>
		{/each}
	</ul>
</nav>
