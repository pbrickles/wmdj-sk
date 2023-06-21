import { ASSEMBLY_WEBHOOK_AUTH_VALUE, ASSEMBLY_API_KEY } from "$env/static/private";
import type { RequestEvent } from "../../../$types";
import type { AssemblyTranscriptionData } from "$lib/types";
import { handleWebhookAuth } from "./handleWebhookAuth";

const getAssemblyTranscript = async (id: string) => {
	const params = {
		headers: {
			authorization: ASSEMBLY_API_KEY,
			Accept: "application/json"
		},
		method: "GET"
	};
	const apiUrl = `https://api.assemblyai.com/v2/transcript/${id}`;
	const response = await fetch(apiUrl, params);
	const data = await response.json();

	return data as AssemblyTranscriptionData;
};

export async function POST({ request }: RequestEvent) {
	const { transcript_id, status } = await request.json();
	const { headers } = request;
	const webhookAuthError = handleWebhookAuth(headers, ASSEMBLY_WEBHOOK_AUTH_VALUE);
	if (webhookAuthError) {
		return new Response(JSON.stringify(webhookAuthError), {
			status: 401
		});
	}
	const transcript = await getAssemblyTranscript(transcript_id);

	return new Response(JSON.stringify({ transcript_id, status }), {
		status: 200
	});
}
