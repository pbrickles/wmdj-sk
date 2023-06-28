<script lang="ts">
	import type { Navigation } from "sanity-schema";
	export let nav: Navigation;
	import HeaderNav from "./HeaderNav.svelte";
</script>

<div class="header-container">
	<header>
		<div class="logo-container">
			<a href="/">
				<span class="font-bold">WMDJ</span>
			</a>
		</div>
		<HeaderNav {nav} />
	</header>
</div>
