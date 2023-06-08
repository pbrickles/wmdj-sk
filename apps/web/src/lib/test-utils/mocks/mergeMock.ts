/* eslint-disable @typescript-eslint/no-explicit-any */
import mergeWith from "lodash/mergeWith";
import isArray from "lodash/isArray";
import type { DeepPartial } from "$lib/types";

const mergeMock = <T>(src: T, obj?: DeepPartial<T>): T => {
	return mergeWith(src, obj, (objValue: any, srcValue: any) => {
		if (isArray(objValue)) {
			return srcValue;
		}

		return undefined;
	});
};

export default mergeMock;
