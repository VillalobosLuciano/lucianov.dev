import { groq } from "next-sanity";

const postFields = groq`
  _id,
  title,
  date,
  excerpt,
  "slug": slug.current,
  "author": author->{name, image},
  category[]{
        _key,
        category->{
            title
        }
    },
`;

const projectFields = groq`
  _id,
  projectName,
  projectDescription,
  projectType,
  source,
  link,
  "slug": slug.current,
  mainImage,
`;

export const indexQuery = groq`{
  "projects": *[_type == "project"]{
    ${projectFields}
  },
  "posts": *[_type == "post"] | order(date desc, _updatedAt desc) {
    ${postFields}
  },
  "about": *[_type == "about"][0] {
    _id,
    name,
    image,
    intro,
    bio
  },
  "technologies": *[_type == "tech"] | order(index asc) {
    _id,
    name,
    image
  },
}`;

export const postQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug][0] {
    body,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug][0...2] | order(date desc) {
    ${postFields}
  }
}`;

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
    ${postFields}
}
`;

export const projectQuery = groq`
{
  "project": *[_type == "project" && slug.current == $slug][0] {
    ${projectFields}
    tech[]{
      _key,
      tech->{
          name,
          image
      }
    },
    overview,
    highlights,
    dependencies
  },
  "moreProjects": *[_type == "project" && slug.current != $slug][0...2] | order(date desc) { 
    ${projectFields}
  }
}`;

export const projectSlugsQuery = groq`
*[_type == "project" && defined(slug.current)][].slug.current
`;

export const projectBySlugQuery = groq`
*[_type == "project" && slug.current == $slug][0] {
    ${projectFields}
}
`;
