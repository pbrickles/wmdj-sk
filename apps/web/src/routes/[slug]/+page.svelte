<script lang="ts">
	import type { CombinedPageType } from "sanity-schema";
	export let data;
	$: page = data.body.page as CombinedPageType;
</script>

<h1>{page.title}</h1>
<p>Page will appear here</p>
