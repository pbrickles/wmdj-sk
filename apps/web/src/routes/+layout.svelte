<script lang="ts">
	import { player } from "$lib/state/Player/player.js";
	import FooterNav from "$lib/components/FooterNav.svelte";
	import HeaderNav from "$lib/components/HeaderNav.svelte";

	export let data;
	player.episodes.all.setEpisodes(data.body.episodes);
</script>

<HeaderNav nav={data.body.mainNav} />
<slot />
<FooterNav nav={data.body.footerNav} />
