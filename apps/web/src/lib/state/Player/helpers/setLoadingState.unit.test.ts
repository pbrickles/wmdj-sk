import { audioMock, createPlayerStateMock } from "$lib/test-utils/mocks";
import { setLoadingState } from "./setLoadingState";

describe("setLoadingState", () => {
	describe("GIVEN no audio element", () => {
		it("SHOULD return the state unchanged", () => {
			const state = createPlayerStateMock();
			expect(setLoadingState(state, true)).toEqual(state);
			expect(setLoadingState(state, false)).toEqual(state);
		});
	});
	describe("GIVEN an audio element", () => {
		it("SHOULD set the loading state", () => {
			const state = createPlayerStateMock();
			state.audio = audioMock;
			expect(setLoadingState(state, true)).toEqual({ ...state, loading: true });
			expect(setLoadingState(state, false)).toEqual({ ...state, loading: false });
		});
	});
});
