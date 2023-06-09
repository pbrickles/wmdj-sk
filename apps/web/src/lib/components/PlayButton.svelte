<script lang="ts">
	export let clickHandler: () => void;
	export let playing: boolean;
	export let loading: boolean;
	export let isCurrentEpisode: boolean;
</script>

<button on:click={clickHandler}>
	{#if playing && isCurrentEpisode}
		{#if loading}
			Loading...
		{:else}
			Pause
		{/if}
	{:else}
		Play
	{/if}
</button>
