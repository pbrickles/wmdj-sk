<script lang="ts">
	import type { CustomBlockComponentProps } from "@portabletext/svelte";

	export let portableText: CustomBlockComponentProps<{
		url: string;
		alt: string;
	}>;
</script>

<img src={portableText.value.url} alt={portableText.value.alt} />
