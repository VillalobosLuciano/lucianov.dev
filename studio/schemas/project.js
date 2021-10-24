export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "projectName",
      title: "Project name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "projectName",
        maxLength: 96,
      },
    },
    {
      name: "projectType",
      title: "Project Type",
      type: "string",
    },
    {
      name: "source",
      title: "Source",
      type: "url",
    },
    {
      name: "link",
      title: "Link",
      type: "url",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "tech",
      title: "Technology",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "tech",
              title: "Technology",
              type: "reference",
              to: [{ type: "tech" }],
            },
          ],
          preview: {
            select: {
              title: "tech.name",
              name: "tech.name",
              media: "tech.image",
            },
          },
        },
      ],
    },
    {
      name: "abstract",
      title: "Abstract",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Content",
      name: "content",
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
          title: "Code block",
        },
      ],
    },
  ],
};
