import { audioMock } from "./mocks";

// Audio mock
global.Audio = vitest.fn().mockImplementation(() => ({
	...audioMock
}));
