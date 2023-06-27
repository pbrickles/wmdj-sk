<script lang="ts">
	import "../app.css";
	import "@fontsource/poppins/100.css";
	import "@fontsource/poppins/200.css";
	import "@fontsource/poppins/400.css";
	import "@fontsource/poppins/600.css";
	import "@fontsource/poppins/700.css";
	import { player } from "$lib/state/Player/player.js";
	import FooterNav from "$lib/components/FooterNav.svelte";
	import HeaderNav from "$lib/components/HeaderNav.svelte";

	export let data;
	player.setEpisodes(data.body.episodes);
</script>

<HeaderNav nav={data.body.mainNav} />
<slot />
<FooterNav nav={data.body.footerNav} />
