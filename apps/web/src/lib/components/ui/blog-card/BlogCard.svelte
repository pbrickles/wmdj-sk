<script lang="ts">
	import { PortableText } from "@portabletext/svelte";
	import { AspectRatio } from "$components/ui/aspect-ratio";
	import { Card, CardHeader, CardTitle, CardContent } from "$components/ui/card";
	import { Heading } from "$components/ui/typography/heading";
	import { buttonVariants } from "$components/ui/button";
	import type { FetchedPost } from "$lib/types/posts";
	import { cn } from "$lib/utils";

	export let post: FetchedPost;
</script>

<Card class="mb-8">
	<CardHeader class="p-0">
		<AspectRatio ratio={1 / 1} class="overflow-hidden">
			<img src={post.mainImageUrl} alt={post.mainImage.alt} loading="lazy" />
		</AspectRatio>
	</CardHeader>
	<CardTitle class="my-6">
		<Heading level="h2" class="italic"
			><a href={`/blog/${post.slug.current}`} class="hover:text-pinkDark transition-colors"
				>{post.title}</a
			></Heading
		>
	</CardTitle>
	<CardContent class="p-0 text-lg">
		<PortableText value={post.excerpt} />
		<a
			href={`/blog/${post.slug.current}`}
			class={cn(buttonVariants({ variant: "light" }), "py-6 text-lg tracking-wider mt-8")}
			>Read more here</a
		>
	</CardContent>
</Card>
