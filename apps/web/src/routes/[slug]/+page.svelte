<script lang="ts">
	import type { CombinedPageType } from "sanity-schema";
	import { PortableText } from "@portabletext/svelte";
	export let data;
	$: page = data.body.page as CombinedPageType;
</script>

<h1>{page.title}</h1>
{#if "body" in page}
	<PortableText value={page.body} />
{/if}
