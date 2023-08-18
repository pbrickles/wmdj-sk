<script lang="ts">
	import PlayIcon from "~icons/ion/play-sharp";
	import PauseIcon from "~icons/ion/pause-sharp";
	import LoadingSpinner from "~icons/svg-spinners/ring-resize";
	export let clickHandler: () => void;
	export let playing: boolean;
	export let loading: boolean;
	export let isCurrentEpisode: boolean;
</script>

<button
	on:click={clickHandler}
	class="bg-pinkDark rounded-full text-white"
	aria-label={playing ? "Pause" : "Play"}
>
	{#if playing && isCurrentEpisode}
		{#if loading}
			<LoadingSpinner />
		{:else}
			<PauseIcon />
		{/if}
	{:else}
		<PlayIcon />
	{/if}
</button>
