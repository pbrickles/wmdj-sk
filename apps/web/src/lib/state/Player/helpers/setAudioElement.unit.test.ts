import { audioMock, createPlayerStateMock } from "$lib/test-utils/mocks";
import { setAudioElementState } from "./setAudioElementState";

describe("setAudioElement", () => {
	describe("GIVEN an audio element", () => {
		it("SHOULD set the audio element on the player state", () => {
			const playerState = createPlayerStateMock();
			const { audio } = setAudioElementState(playerState, audioMock);
			expect(audio).toEqual(audioMock);
		});
	});
});
