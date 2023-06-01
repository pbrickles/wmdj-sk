// document schemas
import author from './documents/author'
import category from './documents/category'
import post from './documents/post'
import page from './documents/page'
import linksPage from './documents/linksPage'
import linksLandingPage from './documents/linksLandingPage'
import siteSettings from './documents/siteSettings'
import navigation from './documents/navigation'
import banner from './documents/banner'

// Object types
import bodyPortableText from './objects/bodyPortableText'
import bioPortableText from './objects/bioPortableText'
import excerptPortableText from './objects/excerptPortableText'
import mainImage from './objects/mainImage'
import bannerImage from './objects/bannerImage'
import authorReference from './objects/authorReference'
import platform from './objects/platform'
import link from './objects/link'
import linksSection from './objects/linksSection'
import navItem from './objects/navItem'
import instagramPost from './objects/instagramPost'
import youTubeEmbed from './objects/youTubeEmbed'
import featuredEpisode from './objects/featuredEpisode'

export const schemaTypes = [
  siteSettings,
  post,
  page,
  banner,
  linksPage,
  linksLandingPage,
  category,
  author,
  mainImage,
  bannerImage,
  authorReference,
  bodyPortableText,
  bioPortableText,
  excerptPortableText,
  platform,
  link,
  linksSection,
  instagramPost,
  youTubeEmbed,
  navItem,
  navigation,
  featuredEpisode,
]
