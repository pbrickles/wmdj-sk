// tslint:disable:no-shadowed-variable
export type DeepPartial<T> = {
	[P in keyof T]?: T[P] extends Array<infer U>
		? Array<DeepPartial<U>>
		: T[P] extends ReadonlyArray<infer U>
		? ReadonlyArray<DeepPartial<U>>
		: DeepPartial<T[P]>;
};

export type Tuple<A, B> = [A, B];

// Strict version of Extract. https://github.com/microsoft/TypeScript/issues/31474
export type ExtractStrict<T, U extends T> = Extract<T, U>;
