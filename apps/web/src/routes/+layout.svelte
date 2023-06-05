<script lang="ts">
	import { player } from "$lib/state/player";
	import FooterNav from "$lib/components/FooterNav.svelte";
	import HeaderNav from "$lib/components/HeaderNav.svelte";

	export let data;

	player.setEpisodes(data.body.episodes);
</script>

<HeaderNav nav={data.body.mainNav} />
<slot />
<FooterNav nav={data.body.footerNav} />
