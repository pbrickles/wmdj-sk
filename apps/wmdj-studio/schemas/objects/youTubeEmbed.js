import YouTubePreview from "../../src/previews/youtube/youTubeEmbed";

export default {
  type: "object",
  title: "YouTube Embed",
  name: "youTubeEmbed",
  fields: [
    {
      name: "url",
      type: "url",
      title: "Url",
      description: "Paste the url of the YouTube video from your browser",
      validation: Rule => Rule.required()
    },
    {
      name: "width",
      type: "number",
      description: "Optional width value",
      value: 640
    },
    {
      name: "height",
      type: "number",
      description: "Optional height value",
      value: 390
    }
  ],
  component: YouTubePreview
};
