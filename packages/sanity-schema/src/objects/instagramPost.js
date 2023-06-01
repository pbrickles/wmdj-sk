import InstagramPreview from "../../src/previews/instagram";

export default {
  type: "object",
  title: "Instagram Post",
  name: "instagramPost",
  fields: [
    {
      name: "url",
      type: "url",
      title: "Url",
      description: "Paste the url of the Instagram post from your browser",
      validation: Rule => Rule.required()
    },
    {
      name: "showCaption",
      type: "boolean",
      description: "Show caption on post"
    }
  ],
  components: {
    preview: InstagramPreview
    
  }
};
