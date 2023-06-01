export default {
  type: "object",
  title: "Platform",
  name: "platform",
  fields: [
    {
      name: "platformName",
      type: "array",
      title: "Platform Name",
      desciption: "Choose one at a time only!",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Spotify", value: "spotify" },
          { title: "iTunes", value: "itunes" },
          { title: "Acast", value: "acast" },
          { title: "Pocketcasts", value: "pocketcasts" },
          { title: "Overcast", value: "overcast" },
          { title: "rss", value: "rss" }
        ]
      },
      validation: Rule => Rule.required().max(1)
    },
    {
      name: "subscriptionUrl",
      type: "url",
      title: "Subscription Url",
      validation: Rule => Rule.required()
    }
  ]
};
