<script lang="ts">
	import "../app.postcss";
	import "@fontsource/poppins/100.css";
	import "@fontsource/poppins/200.css";
	import "@fontsource/poppins/300.css";
	import "@fontsource/poppins/400.css";
	import "@fontsource/poppins/600.css";
	import "@fontsource/poppins/700.css";
	import { player } from "$lib/state/Player/player.js";
	import FooterNav from "$components/ui/FooterNav.svelte";
	import Header from "$components/ui/header/Header.svelte";
	import SkipToMainLink from "$components/ui/SkipToMainLink.svelte";
	import ContentContainer from "$components/ui/ContentContainer.svelte";

	export let data;
	player.setEpisodes(data.body.episodes);
</script>

<ContentContainer>
	<SkipToMainLink />
	<Header nav={data.body.mainNav} />
	<main id="mainContent">
		<slot />
	</main>
	<FooterNav nav={data.body.footerNav} />
</ContentContainer>
