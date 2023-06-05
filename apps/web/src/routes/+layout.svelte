<script lang="ts">
	export let data;
	let { body, HeaderNavComponent, FooterNavComponent } = data;
</script>

<HeaderNavComponent mainNav={body.mainNav} />
<slot />
<FooterNavComponent footerNav={body.footerNav} />
