import type { DeepPartial } from "$lib/types";
import type { Transcript } from "sanity-schema";
import mergeMock from "./mergeMock";
import { createEpisodeMock } from "./createEpisodeMock";

type MockFunction<T> = (data?: DeepPartial<T>) => T;

export const createTranscriptMock: MockFunction<Transcript> = (data) => {
	const transcript: Transcript = {
		assemblyAiId: "abc123",
		_id: "345",
		title: "S1E1",
		createTranscriptPage: true,
		_createdAt: "2021-01-01T00:00:00.000Z",
		_updatedAt: "2021-01-01T00:00:00.000Z",
		_type: "transcript",
		_rev: "abc123",
		episode: {
			episode: createEpisodeMock().attributes.title,
			_type: "featuredEpisode"
		},
		body: {
			_type: "bodyPortableText",
			blocks: [
				{
					_type: "block",
					_key: "a02fc7c001db",
					style: "normal",
					markDefs: [],
					children: [
						{
							_type: "span",
							marks: [],
							text: "Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. In auctor lobortis lacus. Praesent congue erat at massa. Fusce ac felis sit amet ligula pharetra condimentum.",
							_key: "20e78d3063a3"
						}
					]
				},
				{
					_type: "block",
					markDefs: [],
					style: "normal",
					children: [
						{
							_type: "span",
							marks: [],
							text: "Cras non dolor. Donec vitae orci sed dolor rutrum auctor. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Phasellus a est.",
							_key: "88178369cc860"
						}
					],
					_key: "b2208ad7568b"
				},
				{
					_type: "block",
					markDefs: [],
					style: "normal",
					children: [
						{
							_type: "span",
							marks: [],
							text: "Pellentesque commodo eros a enim. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Donec venenatis vulputate lorem.",
							_key: "4e2af6b324bf0"
						}
					],
					_key: "31e9340ce26d"
				},
				{
					_type: "block",
					markDefs: [],
					style: "normal",
					children: [
						{
							_type: "span",
							marks: [],
							text: "Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Suspendisse feugiat. Duis leo. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
							_key: "5267e47677000"
						}
					],
					_key: "addccb3e03be"
				},
				{
					_type: "block",
					markDefs: [],
					style: "normal",
					children: [
						{
							_type: "span",
							marks: [],
							text: "Etiam sit amet orci eget eros faucibus tincidunt. Etiam vitae tortor. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Duis vel nibh at velit scelerisque suscipit.",
							_key: "e148450ec1340"
						}
					],
					_key: "fa8be3abad26"
				}
			]
		}
	};

	return mergeMock(transcript, data);
};
