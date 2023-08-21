import { createPlayerStateMock } from "$lib/test-utils/mocks";
import type { PlayerStatus } from "../player";
import { setStatus } from "./setStatus";

describe("setExpandedStatus", () => {
	describe.each<PlayerStatus>(["EXPANDED", "HIDDEN", "FOOTER"])(
		"GIVEN a status of %s",
		(status) => {
			it(`SHOULD set the status to ${status}}`, () => {
				const state = createPlayerStateMock();
				const newState = setStatus(state, status);
				expect(newState.status).toEqual(status);
			});
		}
	);
});
