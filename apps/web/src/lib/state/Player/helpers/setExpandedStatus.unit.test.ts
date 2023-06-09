import { createPlayerStateMock } from "$lib/test-utils/mocks";
import { setExpandedStatus } from "./setExpandedStatus";

describe("setExpandedStatus", () => {
	describe("GIVEN a state of true", () => {
		describe("AND the player is not expanded", () => {
			it("SHOULD set the player status to EXPANDED", () => {
				const playerNotExpanded = createPlayerStateMock({ expanded: false });
				const state = setExpandedStatus(playerNotExpanded, true);
				expect(state.expanded).toBe(true);
			});
		});
		describe("AND the player is expanded", () => {
			const playerExpanded = createPlayerStateMock({ expanded: true });
			it("SHOULD do nothing", () => {
				const state = setExpandedStatus(playerExpanded, true);
				expect(state).toEqual(playerExpanded);
			});
		});
	});
	describe("GIVEN a state of false", () => {
		describe("AND the player is not expanded", () => {
			it("SHOULD do nothing", () => {
				const playerNotExpanded = createPlayerStateMock({ expanded: false });
				const state = setExpandedStatus(playerNotExpanded, false);
				expect(state).toEqual(playerNotExpanded);
			});
		});
		describe("AND the player is expanded", () => {
			it("SHOULD set the player expanded flag to false", () => {
				const playerExpanded = createPlayerStateMock({ expanded: true });
				const state = setExpandedStatus(playerExpanded, false);
				expect(state.expanded).toBe(false);
			});
		});
	});
});
