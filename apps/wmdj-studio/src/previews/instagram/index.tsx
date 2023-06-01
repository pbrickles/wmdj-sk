import React from 'react'
import InstagramEmbed from 'react-instagram-embed'

interface InstagramEmbedProps {
  value: {
    url: string
    showCaption: boolean
  }
}

const InstagramPreview = ({value}: InstagramEmbedProps) => {
  if (!value) {
    return <p>Missing URL for Instagram post</p>
  }
  return (
    <InstagramEmbed
      url={value.url}
      clientAccessToken={String(process.env.SANITY_STUDIO_FB_ACCESS_TOKEN)}
      maxWidth={150}
      containerTagName="div"
      injectScript
      hideCaption={!value.showCaption}
    />
  )
}

export default InstagramPreview
