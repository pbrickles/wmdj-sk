<script lang="ts">
	import PlayIcon from "~icons/ion/play-sharp";
	import PauseIcon from "~icons/ion/pause-sharp";
	import LoadingSpinner from "~icons/svg-spinners/ring-resize";
	export let clickHandler: () => void;
	export let playing: boolean;
	export let loading: boolean;
	export let isCurrentEpisode: boolean;
	export let size: "sm" | "md" = "sm";
	type SizeMap = Record<typeof size, string>;
	const buttonSizes: SizeMap = {
		sm: "w-[45px] h-[45px]",
		md: "w-[76px] h-[76px]"
	};
	const iconSizes: SizeMap = {
		sm: "text-lg",
		md: "text-[40px]"
	};
</script>

<button
	on:click={clickHandler}
	class={`bg-pinkDark rounded-full text-white flex items-center justify-center ${buttonSizes[size]}`}
	aria-label={playing ? "Pause" : "Play"}
>
	{#if playing && isCurrentEpisode}
		{#if loading}
			<LoadingSpinner class={iconSizes[size]} />
		{:else}
			<PauseIcon class={iconSizes[size]} />
		{/if}
	{:else}
		<PlayIcon class={`${iconSizes[size]} ml-1`} />
	{/if}
</button>
