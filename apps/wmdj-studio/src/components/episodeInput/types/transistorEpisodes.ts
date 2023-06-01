export interface TransistorEpisodeAttributes {
  alternate_url: string | null
  audio_processing: boolean
  author: string
  created_at: string
  description: string
  duration_in_mmss: string
  duration: number
  embed_html_dark: string
  embed_html: string
  explicit: boolean
  formatted_pubished_at: string
  formatted_summary: string
  id: string
  keywords: string
  media_url: string
  number: number
  published_at: string
  season: number
  share_url: string
  status: string
  summary: string
  title: string
  updated_at: Date | string
  type: string
}

export interface TransistorEpisodeRelationships {
  show: {
    data: {
      id: number
      type: 'show'
    }
  }
}
export interface TransistorEpisodeInterface {
  id: string
  type: 'episode'
  image: string
  attributes: TransistorEpisodeAttributes
  relationships: TransistorEpisodeRelationships
}
