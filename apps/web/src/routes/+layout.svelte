<script lang="ts">
	import FooterNav from "$lib/components/FooterNav.svelte";
	import HeaderNav from "$lib/components/HeaderNav.svelte";

	export let data;
	let { body } = data;
</script>

<HeaderNav nav={body.mainNav} />
<slot />
<FooterNav nav={body.footerNav} />
