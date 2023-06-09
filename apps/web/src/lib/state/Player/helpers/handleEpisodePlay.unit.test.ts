import { audioMock, createEpisodeMock, createPlayerStateMock } from "$lib/test-utils/mocks";
import { handleEpisodePlay } from "./handleEpisodePlay";

describe("handleEpisodePLay", () => {
	const episodes = [createEpisodeMock({ id: "123" }), createEpisodeMock({ id: "456" })];
	const [currentEpisode, episodeToPlay] = episodes;
	describe("GIVEN an episodeId that is already set", () => {
		describe("AND player is loading", () => {
			it("SHOULD do nothing", () => {
				const playerLoadingState = createPlayerStateMock({ currentEpisode, loading: true });
				const state = handleEpisodePlay(playerLoadingState, currentEpisode.id);
				expect(playerLoadingState).toEqual(state);
			});
		});
		describe("AND player is NOT loading", () => {
			describe("AND player is playing", () => {
				it("SHOULD pause the player", () => {
					const playerPlayingState = createPlayerStateMock({ currentEpisode, playing: true });
					playerPlayingState.audio = audioMock;
					const state = handleEpisodePlay(playerPlayingState, currentEpisode.id);
					expect(state.playing).toBe(false);
				});
			});
			describe("AND player is NOT playing", () => {
				it("SHOULD play the player", () => {
					const playerPausedState = createPlayerStateMock({ currentEpisode, playing: false });
					playerPausedState.audio = audioMock;
					const state = handleEpisodePlay(playerPausedState, currentEpisode.id);
					expect(state.playing).toBe(true);
				});
			});
		});
	});
	describe("GIVEN an episodeId that is NOT already set", () => {
		describe("AND player is loading", () => {
			it("SHOULD set the current episode to this episode", () => {
				const playerLoadingState = createPlayerStateMock({
					episodes,
					currentEpisode,
					loading: true
				});
				const state = handleEpisodePlay(playerLoadingState, episodeToPlay.id);
				expect(state.currentEpisode).toEqual(episodeToPlay);
			});
			it("SHOULD not play the player", () => {
				const playerLoadingState = createPlayerStateMock({
					episodes,
					currentEpisode,
					loading: true
				});
				const state = handleEpisodePlay(playerLoadingState, episodeToPlay.id);
				expect(state.playing).toBe(false);
			});
		});
		describe("AND player is NOT loading", () => {
			describe("AND player is playing", () => {
				it("SHOULD set the current episode to this episode", () => {
					const playerPlayingState = createPlayerStateMock({
						episodes,
						currentEpisode,
						playing: true
					});
					const state = handleEpisodePlay(playerPlayingState, episodeToPlay.id);
					expect(state.currentEpisode).toEqual(episodeToPlay);
				});
				it("SHOULD continue to play the player", () => {
					const playerPlayingState = createPlayerStateMock({
						episodes,
						currentEpisode,
						playing: true
					});
					playerPlayingState.audio = audioMock;
					const state = handleEpisodePlay(playerPlayingState, episodeToPlay.id);
					expect(state.playing).toBe(true);
				});
			});
			describe("AND player is NOT playing", () => {
				it("SHOULD set the current episode to this episode", () => {
					const playerPausedState = createPlayerStateMock({
						episodes,
						currentEpisode,
						playing: false
					});
					const state = handleEpisodePlay(playerPausedState, episodeToPlay.id);
					expect(state.currentEpisode).toEqual(episodeToPlay);
				});
				it("SHOULD play the player", () => {
					const playerPausedState = createPlayerStateMock({
						episodes,
						currentEpisode,
						playing: false
					});
					playerPausedState.audio = audioMock;
					const state = handleEpisodePlay(playerPausedState, episodeToPlay.id);
					expect(state.playing).toBe(true);
				});
			});
		});
	});
});
