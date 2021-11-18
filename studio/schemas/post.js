export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "category",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "category",
              title: "Categories",
              type: "reference",
              to: [{ type: "category" }],
            },
          ],
          preview: {
            select: {
              title: "category.title",
            },
          },
        },
      ],
    },
    {
      name: "date",
      title: "Date",
      type: "datetime",
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
        },
        {
          type: "image",
          options: { hotspot: true },
        },
        {
          type: "code",
          title: "Code",
        },
      ],
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
