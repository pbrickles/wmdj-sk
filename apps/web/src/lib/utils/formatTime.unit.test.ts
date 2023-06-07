import { formatTime } from "./formatTime";

describe("formatTime", () => {
	it("should format time with hours, minutes, and seconds", () => {
		expect(formatTime(3661)).toBe("1:01:01");
		expect(formatTime(248)).toBe("4:08");
		expect(formatTime(15000)).toBe("4:10:00");
		expect(formatTime(0)).toBe("0:00");
	});

	it("should format time with minutes and seconds", () => {
		expect(formatTime(61)).toBe("1:01");
		expect(formatTime(125)).toBe("2:05");
		expect(formatTime(360)).toBe("6:00");
		expect(formatTime(30)).toBe("0:30");
	});

	it("should format time with seconds only", () => {
		expect(formatTime(10)).toBe("0:10");
		expect(formatTime(59)).toBe("0:59");
		expect(formatTime(5)).toBe("0:05");
	});
});
