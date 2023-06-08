import { createEpisodeMock, createPlayerStateMock } from "$lib/test-utils/mocks";
import { setCurrentEpisodeState } from "./setCurrentEpisodeState";

describe("setCurrentEpisode", () => {
	describe("GIVEN no episodes", () => {
		it("SHOULD return the state unchanged", () => {
			const state = createPlayerStateMock();
			expect(setCurrentEpisodeState(state, "testId123")).toEqual(state);
		});
	});
	describe("GIVEN a player state with episodes", () => {
		describe("AND an episodeId", () => {
			it("SHOULD set the current episode", () => {
				const episodeId = "testId123";
				const episode = createEpisodeMock({ id: episodeId });
				const episodes = [createEpisodeMock(), episode];
				const playerStore = createPlayerStateMock({
					episodes
				});
				const newState = setCurrentEpisodeState(playerStore, episodeId);
				expect(newState.currentEpisode).toEqual(episode);
			});
			it("SHOULD set the status to ACTIVE", () => {
				const episodeId = "testId123";
				const episode = createEpisodeMock({ id: episodeId });
				const episodes = [createEpisodeMock(), episode];
				const playerStore = createPlayerStateMock({
					episodes,
					status: "HIDDEN"
				});
				const newState = setCurrentEpisodeState(playerStore, episodeId);
				expect(newState.status).toEqual("ACTIVE");
			});
		});

		describe("AND an episodeId that does not exist", () => {
			it("SHOULD not set the current episode", () => {
				const episodeId = "testId123";
				const episode = createEpisodeMock({ id: episodeId });
				const episodes = [createEpisodeMock(), episode];
				const playerStore = createPlayerStateMock({
					episodes
				});
				const newState = setCurrentEpisodeState(playerStore, "notRealId");
				expect(newState.currentEpisode).toEqual(null);
			});
		});
		describe("AND an episodeId that is undefined", () => {
			it("SHOULD not set the current episode", () => {
				const episodeId = "testId123";
				const episode = createEpisodeMock({ id: episodeId });
				const episodes = [createEpisodeMock(), episode];
				const playerStore = createPlayerStateMock({
					episodes
				});
				const newState = setCurrentEpisodeState(playerStore, undefined);
				expect(newState.currentEpisode).toEqual(null);
			});
		});
	});
});
