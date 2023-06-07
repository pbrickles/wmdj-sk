/* eslint-disable @typescript-eslint/no-explicit-any */
import mergeWith from "lodash/mergeWith";
import type { DeepPartial } from "$lib/types";

const mergeMock = <T>(src: T, obj?: DeepPartial<T>): T => {
	return mergeWith(src, obj, (objValue: any, srcValue: any) => {
		if (objValue.isArray) {
			return srcValue;
		}

		return undefined;
	});
};

export default mergeMock;
