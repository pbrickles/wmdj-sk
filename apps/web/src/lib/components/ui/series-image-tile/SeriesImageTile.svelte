<script lang="ts">
	import series1 from "$lib/assets/wmdj_series_1_tile.jpg";
	import series2 from "$lib/assets/wmdj_series_2_tile.jpg";
	export let seriesNumber: number;
	export let episodeImagePath: string = "";

	const getImage = (series: number, imagePath?: string) => {
		if (imagePath) {
			return imagePath;
		}
		switch (series) {
			case 1:
				return series1;
			default:
				return series2;
		}
	};
</script>

<div
	class="w-[50%] min-w-[100px] min-h-[100px] md:min-w-[200px] md:min-h-[200px] md:w-[200px] md:h-[200px]"
>
	<img src={getImage(seriesNumber, episodeImagePath)} alt={`Series ${seriesNumber} tile`} />
</div>
