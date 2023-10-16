<script lang="ts">
	import "../app.postcss";
	import "@fontsource/poppins/100.css";
	import "@fontsource/poppins/200.css";
	import "@fontsource/poppins/300.css";
	import "@fontsource/poppins/400.css";
	import "@fontsource/poppins/600.css";
	import "@fontsource/poppins/700.css";
	import { player } from "$lib/state/Player/player.js";
	import FooterNav from "$components/ui/footer/FooterNav.svelte";
	import Header from "$components/ui/header/Header.svelte";
	import SkipToMainLink from "$components/ui/SkipToMainLink.svelte";
	import ContentContainer from "$components/ui/ContentContainer.svelte";
	import Footer from "$components/ui/footer/Footer.svelte";

	export let data;
	player.setEpisodes(data.body.episodes);
</script>

<ContentContainer>
	<SkipToMainLink />
	<Header nav={data.body.mainNav} />
	<main id="mainContent">
		<slot />
	</main>
</ContentContainer>
<Footer>
	<FooterNav nav={data.body.footerNav} />
</Footer>
