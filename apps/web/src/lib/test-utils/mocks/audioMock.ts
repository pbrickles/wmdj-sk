export const audioMock = {
	pause: vitest.fn(),
	play: vitest.fn()
} as unknown as HTMLAudioElement;
