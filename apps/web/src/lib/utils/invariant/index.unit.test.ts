import { invariant } from ".";

describe("invariant", () => {
	it("should throw an error when condition is false", () => {
		expect(() => invariant(false, "test")).toThrowError("test");
	});

	it("should not throw an error when condition is true", () => {
		expect(() => invariant(true, "test")).not.toThrow();
	});

	it("should throw an error when condition is undefined'", () => {
		expect(() => invariant(undefined, "test")).toThrowError("test");
	});

	it("should throw an error when condition is null'", () => {
		expect(() => invariant(null, "test")).toThrowError("test");
	});

	it("should throw an error when condition is ''", () => {
		expect(() => invariant("", "test")).toThrowError("test");
	});

	it("should throw an error when condition is 0", () => {
		expect(() => invariant(0, "test")).toThrowError("test");
	});

	it("should throw an error when condition is NaN", () => {
		expect(() => invariant(NaN, "test")).toThrowError("test");
	});
});
