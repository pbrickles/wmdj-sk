<script lang="ts">
	import type { CombinedPageType } from "sanity-schema";
	import { PortableText } from "@portabletext/svelte";
	import Heading from "$components/ui/typography/heading/Heading.svelte";
	export let data;
	$: page = data.body.page as CombinedPageType;
</script>

<Heading level="h1">{page.title}</Heading>
{#if "body" in page}
	<PortableText value={page.body} />
{/if}
