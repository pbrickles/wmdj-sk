export interface TransistorEpisodeAttributes {
	alternate_url: string | null;
	audio_processing: boolean;
	author: string;
	created_at: string;
	description: string;
	duration_in_mmss: string;
	duration: number;
	email_notifications: string | null;
	embed_html_dark: string;
	embed_html: string;
	explicit: boolean;
	formatted_description: string;
	formatted_pubished_at: string;
	formatted_summary: string;
	image_url: string;
	keywords: string;
	media_url: string;
	number: number;
	published_at: string;
	season: number;
	share_url: string;
	slug: string;
	status: string;
	summary: string;
	title: string;
	transcript_url: string | null;
	updated_at: Date | string;
	type: 'trailer' | 'full' | 'bonus';
	video_url: string | null;
}

export interface TransistorEpisodeRelationships {
	show: {
		data: {
			id: number;
			type: 'show';
		};
	};
}
export interface TransistorEpisode {
	id: string;
	type: 'episode';
	attributes: TransistorEpisodeAttributes;
	relationships: TransistorEpisodeRelationships;
}

export interface TransistorEpisodesResults {
	data: Array<TransistorEpisode>;
	meta: {
		currentPage: number;
		totalPages: number;
		totalCount: number;
	};
}
