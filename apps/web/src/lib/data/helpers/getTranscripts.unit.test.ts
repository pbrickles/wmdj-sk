import { createTranscriptMock } from "$lib/test-utils/mocks";
import { getTranscript } from "./getTranscript";

describe("getTranscript", () => {
	describe("GIVEN a list of transcripts", () => {
		const episode = "Test transcription episode title";
		const transcript = createTranscriptMock({ episode: { episode } });

		describe("AND the episode title matches", () => {
			it("SHOULD return the transcript", () => {
				const transcripts = [
					transcript,
					createTranscriptMock({ episode: { episode: "Test episode title 2" } })
				];
				expect(getTranscript(episode, transcripts)).toEqual(transcript);
			});

			describe("AND the transcript page is NOT to be created", () => {
				it("SHOULD NOT return the transcript", () => {
					const episode = "Test episode title 2";
					const transcripts = [
						transcript,
						createTranscriptMock({
							episode: { episode },
							createTranscriptPage: false
						})
					];
					expect(getTranscript(episode, transcripts)).toBeUndefined();
				});
			});
		});

		describe("AND the episode title does NOT match", () => {
			const episode = "Not matching episode title";
			it("SHOULD NOT return the transcript", () => {
				const transcripts = [
					transcript,
					createTranscriptMock({ episode: { episode: "Test episode title 2" } })
				];
				expect(getTranscript(episode, transcripts)).toBeUndefined();
			});
		});
	});
});
