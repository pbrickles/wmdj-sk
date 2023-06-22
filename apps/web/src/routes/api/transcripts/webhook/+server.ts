import { ASSEMBLY_WEBHOOK_AUTH_VALUE, ASSEMBLY_API_KEY } from "$env/static/private";
import type { RequestEvent } from "../../../$types";
import { getAssemblyTranscript } from "../helpers/getAssemblyTranscript";
import { updateTranscript } from "../helpers/updateTranscript";
import { handleWebhookAuth } from "./handleWebhookAuth";

export async function POST({ request }: RequestEvent) {
	const { transcript_id, status } = await request.json();
	const { headers } = request;
	const webhookAuthError = handleWebhookAuth(headers, ASSEMBLY_WEBHOOK_AUTH_VALUE);
	if (webhookAuthError) {
		return new Response(JSON.stringify(webhookAuthError), {
			status: 401
		});
	}
	if (status === "error") {
		return new Response(JSON.stringify({ error: "Transcription error at Transistor" }), {
			status: 200,
			headers
		});
	}

	// transcript is ready so...
	try {
		const transcript = await getAssemblyTranscript(transcript_id, ASSEMBLY_API_KEY);

		// attempt to update transcript in sanity
		const { status, message } = await updateTranscript(transcript);

		return new Response(JSON.stringify({ transcript_id, message }), {
			status
		});
	} catch (error) {
		if (error instanceof Error) {
			return new Response(
				JSON.stringify({ error: `Error updating transcript: ${error.message}` }),
				{
					status: 500
				}
			);
		}
		return new Response(JSON.stringify({ error: `Error updating transcript: ${error}` }), {
			status: 500
		});
	}
}
