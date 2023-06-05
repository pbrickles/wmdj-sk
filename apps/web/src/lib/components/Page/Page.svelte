<script lang="ts">
	import type { Page } from "sanity-schema";
	export let page: Page;
	console.log(page);
</script>

<h1>{page.title}</h1>
<p>Page will appear here</p>
