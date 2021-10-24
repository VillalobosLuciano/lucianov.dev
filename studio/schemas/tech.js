export default {
  name: "tech",
  title: "Technology",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Technology Name",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      option: {
        hotspot: true,
      },
    },
    {
      name: "index",
      title: "List Index",
      type: "number",
    },
  ],
};
