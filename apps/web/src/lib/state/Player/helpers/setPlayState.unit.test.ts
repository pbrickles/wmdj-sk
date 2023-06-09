/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { audioMock, createPlayerStateMock } from "$lib/test-utils/mocks";
import { setPlayState } from "./setPlayState";

describe("setPlayState", () => {
	describe("GIVEN a PAUSE direction", () => {
		describe("AND no audio element", () => {
			it("SHOULD return the state unchanged", () => {
				const state = createPlayerStateMock();
				expect(setPlayState(state, "PAUSE")).toEqual(state);
			});
		});
		describe("AND an audio element", () => {
			it("SHOULD pause the audio", async () => {
				const state = createPlayerStateMock();
				state.audio = audioMock;
				const { playing } = setPlayState(state, "PAUSE");
				expect(audioMock.pause).toHaveBeenCalled();
				expect(playing).toBe(false);
			});
		});
	});
	describe("GIVEN a PLAY direction", () => {
		describe("AND no audio element", () => {
			it("SHOULD return the state unchanged", () => {
				const state = createPlayerStateMock();
				expect(setPlayState(state, "PLAY")).toEqual(state);
			});
		});
		describe("AND an audio element", () => {
			it("SHOULD play the audio", async () => {
				const state = createPlayerStateMock();
				state.audio = audioMock;
				const { playing } = setPlayState(state, "PLAY");
				expect(audioMock.play).toHaveBeenCalled();
				expect(playing).toBe(true);
			});

			describe("AND the status is 'HIDDEN'", () => {
				it("SHOULD set the status to 'ACTIVE'", () => {
					const state = createPlayerStateMock({ status: "HIDDEN" });
					state.audio = audioMock;
					const { status } = setPlayState(state, "PLAY");
					expect(status).toBe("ACTIVE");
				});
			});
		});
	});
});
