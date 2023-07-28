<script lang="ts">
	import "../app.css";
	import "@fontsource/poppins/100.css";
	import "@fontsource/poppins/200.css";
	import "@fontsource/poppins/400.css";
	import "@fontsource/poppins/600.css";
	import "@fontsource/poppins/700.css";
	import { player } from "$lib/state/Player/player.js";
	import FooterNav from "$lib/components/FooterNav.svelte";
	import Header from "$lib/components/Header.svelte";
	import SkipToMainLink from "$lib/components/SkipToMainLink.svelte";
	import ContentContainer from "$lib/components/ContentContainer.svelte";

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
