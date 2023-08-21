import { createPlayerStateMock, audioMock, createEpisodeMock } from "$lib/test-utils/mocks";
import { setEpisodeTimeElapsed } from "./setEpisodeTimeElapsed";

describe("setEpisodeTimeElapsed", () => {
	describe("GIVEN a player state", () => {
		describe("AND there is no audio element", () => {
			it("SHOULD return the state unchanged", () => {
				const state = createPlayerStateMock({
					currentEpisode: createEpisodeMock()
				});
				expect(setEpisodeTimeElapsed(state, 0)).toEqual(state);
			});
		});

		describe("AND there is no current episode", () => {
			it("SHOULD return the state unchanged", () => {
				const playerState = createPlayerStateMock();
				playerState.audio = audioMock;
				expect(setEpisodeTimeElapsed(playerState, 0)).toEqual(playerState);
			});
		});

		describe("AND there is an audio element AND a current episode", () => {
			it("SHOULD set the current episode time elapsed", () => {
				const state = createPlayerStateMock({
					currentEpisode: createEpisodeMock()
				});
				state.audio = audioMock;
				const newState = setEpisodeTimeElapsed(state, 10);
				expect(newState.currentEpisodeTimeElapsed).toEqual(10);
			});
		});
	});
});
