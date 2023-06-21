export interface GetTranscriptionResult {
	data: AssemblyTranscriptionData;
}
export interface AssemblyTranscriptionData {
	id: string;
	language_model: string;
	acoustic_model: string;
	language_code: string;
	status: "queued" | "processing" | "completed" | "error";
	audio_url: string;
	text: string;
	words: Utterance[];
	utterances: Utterance[];
	confidence: number;
	audio_duration: number;
	punctuate: boolean;
	format_text: boolean;
	dual_channel: null;
	webhook_url: null;
	webhook_status_code: null;
	webhook_auth: boolean;
	webhook_auth_header_name: null;
	speed_boost: boolean;
	auto_highlights_result: null;
	auto_highlights: boolean;
	audio_start_from: null;
	audio_end_at: null;
	word_boost: any[];
	boost_param: null;
	filter_profanity: boolean;
	redact_pii: boolean;
	redact_pii_audio: boolean;
	redact_pii_audio_quality: null;
	redact_pii_policies: null;
	redact_pii_sub: null;
	speaker_labels: boolean;
	content_safety: boolean;
	iab_categories: boolean;
	content_safety_labels: ContentSafetyLabels;
	iab_categories_result: ContentSafetyLabels;
	language_detection: boolean;
	custom_spelling: null;
	cluster_id: null;
	throttled: null;
	auto_chapters: boolean;
	summarization: boolean;
	summary_type: null;
	summary_model: null;
	disfluencies: boolean;
	sentiment_analysis: boolean;
	chapters: null;
	sentiment_analysis_results: null;
	entity_detection: boolean;
	entities: null;
	summary: null;
}

export interface ContentSafetyLabels {
	status: string;
	results: unknown[];
	summary: Record<string, never>;
}

export interface Utterance {
	confidence: number;
	end: number;
	speaker: Speaker;
	start: number;
	text: string;
	words?: Utterance[];
}

export enum Speaker {
	A = "A",
	B = "B"
}
