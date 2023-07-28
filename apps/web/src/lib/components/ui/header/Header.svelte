<script lang="ts">
	import type { Navigation } from "sanity-schema";
	export let nav: Navigation;
	import HeaderNavDesktop from "../header-nav/HeaderNavDesktop.svelte";
	import HeaderNavMobile from "../header-nav/HeaderNavMobile.svelte";
	let size;
</script>

<div class="header-container">
	<header class="flex items-center justify-between">
		<div class="logo-container">
			<a href="/">
				<span class="font-bold">WMDJ</span>
			</a>
		</div>

		<HeaderNavDesktop {nav} />
		<HeaderNavMobile />
	</header>
</div>
