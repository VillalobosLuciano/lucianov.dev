import Head from "next/head";
import { indexQuery } from "@/lib/queries";
import { getClient } from "@/lib/sanity.server";
import Layout from "@/components/Layout";
import Container from "@/components/Container";
import PostPreview from "../../components/PostPreview";
import { useState } from "react";
import cn from "classnames";

export default function Index({ posts, initialDisplayPosts = [], preview }) {
  const [searchValue, setSearchValue] = useState("");
  const filteredBlogPosts = posts.filter((value) => {
    const searchContent =
      value.title +
      value.excerpt.map((oi) => oi.children.map((au) => au.text)) +
      value.category.map((tag) => tag.category.title).join(" ");
    return searchContent.toLowerCase().includes(searchValue.toLowerCase());
  });

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue
      ? initialDisplayPosts
      : filteredBlogPosts;

  const onSearchHandler = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const splitResult = (result) =>
    result.split(new RegExp(`(${searchValue})`, `gi`)).map((piece, index) => {
      const isHighlighted =
        piece.toLowerCase() === searchValue.toLocaleLowerCase();
      return (
        <span
          key={index}
          className={cn({
            " bg-neptune-500 bg-opacity-20 dark:bg-yellow-500 dark:bg-opacity-40":
              isHighlighted,
            "bg-transparent": !isHighlighted,
          })}
        >
          {piece}
        </span>
      );
    });

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Luciano&apos;s Digital Space</title>
        </Head>
        <Container>
          <div className="divide-y divide-opacity-30 divide-neptune-500 dark:divide-yellow-500 dark:divide-opacity-30">
            <div className="px-4 pt-12 pb-4 space-y-2 lg:pb-8 md:space-y-8">
              <div className="pt-6 pb-3 font-extrabold leading-9 tracking-tight lg:pb-1 sm:text-center md:leading-14">
                <h1 className="text-3xl text-neptune-500 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl">
                  Blog
                </h1>
              </div>
              <div className="relative max-w-lg sm:mx-auto">
                <input
                  aria-label="Search articles"
                  type="text"
                  onChange={onSearchHandler}
                  placeholder="Search articles"
                  className="block w-full px-4 py-2 mb-4 text-gray-500 placeholder-gray-400 border rounded-md bg-neptune-500 bg-opacity-5 border-opacity-30 dark:border-opacity-20 dark:border-yellow-500 border-neptune-500 focus:ring-neptune-500 dark:focus:ring-opacity-60 dark:focus:ring-yellow-500 dark:focus:border-yellow-500 dark:focus:border-opacity-60 focus:border-neptune-500 dark:bg-yellow-300 dark:bg-opacity-5 dark:text-gray-100"
                />
                <svg
                  className="absolute w-5 h-5 text-neptune-500 right-3 top-3 dark:text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            <div className="pt-4 pb-12 mx-auto overflow-hidden sm:py-6">
              <div className="grid grid-cols-1 space-y-10 divide-y divide-gray-200 divide-dashed dark:divide-gray-800">
                {!filteredBlogPosts.length && "No posts found."}
                {displayPosts.map((post) => (
                  <PostPreview
                    key={post.slug}
                    title={splitResult(post.title)}
                    date={post.date}
                    slug={post.slug}
                    excerpt={post.excerpt}
                    category={post.category}
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const data = await getClient(preview).fetch(indexQuery);
  return {
    props: {
      preview,
      posts: data.posts,
    },
  };
}
