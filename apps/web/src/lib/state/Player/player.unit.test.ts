import { get } from "svelte/store";
import { player } from "./player";
import { audioMock, createEpisodeMock, createPlayerStateMock } from "$lib/test-utils/mocks";
import * as helpers from "./helpers";

describe("player store", () => {
	describe("GIVEN the player store", () => {
		const playerState = get(player);
		const mockState = createPlayerStateMock();

		it("SHOULD have the correct initial state", () => {
			expect(playerState).toEqual(mockState);
		});

		describe("WHEN the reset method is fired", () => {
			it("SHOULD reset the player state", () => {
				player.reset();
				expect(get(player)).toEqual(mockState);
			});
		});

		describe("WHEN the setAudioElement method is fired", () => {
			it("SHOULD update the player state", () => {
				player.reset();
				const mockHelper = vi.spyOn(helpers, "setAudioElementState");
				player.setAudioElement(audioMock);
				expect(mockHelper).toHaveBeenCalled();
			});
		});

		type Scenario = {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			method: any;
			args: unknown;
			helper: keyof typeof helpers;
		};

		const scenarios: Scenario[] = [
			{
				method: player.setEpisodes,
				args: [createEpisodeMock()].map((episode) => episode),
				helper: "setEpisodeState"
			},
			{
				method: player.setCurrentEpisode,
				args: createEpisodeMock().id,
				helper: "setCurrentEpisodeState"
			},
			{
				method: player.play,
				args: "PLAY",
				helper: "setPlayState"
			},
			{
				method: player.pause,
				args: "PAUSE",
				helper: "setPlayState"
			},
			{
				method: player.setLoadingState,
				args: true,
				helper: "setLoadingState"
			},
			{
				method: player.setLoadingState,
				args: false,
				helper: "setLoadingState"
			},
			{
				method: player.episodePlay,
				args: createEpisodeMock().id,
				helper: "handleEpisodePlay"
			},
			{
				method: player.setExpanded,
				args: true,
				helper: "setExpandedStatus"
			},
			{
				method: player.setExpanded,
				args: false,
				helper: "setExpandedStatus"
			},
			{
				method: player.setCurrentEpisodeTimeElapsed,
				args: 20,
				helper: "setEpisodeTimeElapsed"
			}
		];
		describe.each(scenarios)("WHEN the $method method is fired", ({ method, args, helper }) => {
			it(`SHOULD update the player state via ${helper}`, () => {
				player.reset();
				const mockHelper = vi.spyOn(helpers, helper);
				method(args);
				expect(mockHelper).toHaveBeenCalledWith(playerState, args);
			});
		});
	});
});
