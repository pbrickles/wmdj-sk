import { createPlayerStateMock } from "$lib/test-utils/mocks";
import { createEpisodeMock } from "$lib/test-utils/mocks/createEpisodeMock";
import { setEpisodeState } from "./setEpisodeState";

describe("setEpisodeState", () => {
	describe("GIVEN episodes", () => {
		it("SHOULD set the episodes", () => {
			const state = createPlayerStateMock();
			const episodes = [createEpisodeMock()];
			const newState = setEpisodeState(state, episodes);
			expect(newState).toEqual(createPlayerStateMock({ episodes }));
		});
	});
	describe("GIVEN no episodes", () => {
		it("SHOULD set the episodes to an empty array", () => {
			const state = createPlayerStateMock();
			const newState = setEpisodeState(state, undefined);
			expect(newState).toEqual(createPlayerStateMock({ episodes: [] }));
		});
	});
});
