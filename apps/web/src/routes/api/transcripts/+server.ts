import { ASSEMBLY_API_KEY } from "$env/static/private";
import { invariant } from "$lib/utils/invariant";
import { getAssemblyTranscript } from "./helpers/getAssemblyTranscript";

export async function GET({ url }) {
	try {
		const id = url.searchParams.get("id");
		invariant(id, "id is required");
		const data = await getAssemblyTranscript(id, ASSEMBLY_API_KEY);
		return new Response(JSON.stringify(data), { status: 200 });
	} catch (error) {
		if (error instanceof Error) {
			return new Response(
				JSON.stringify({ error: `Error getting transcripts: ${error.message}` }),
				{ status: 500 }
			);
		}
		return new Response(JSON.stringify({ error: `Error getting transcripts ${error}` }), {
			status: 500
		});
	}
}
