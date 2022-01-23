import Head from "next/head";
import { indexQuery } from "@/lib/queries";
import { getClient } from "@/lib/sanity.server";
import Container from "@/components/Container";
import PostPreview from "../../components/PostPreview";
import { useState, Fragment, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Index({ posts }) {
  const { query } = useRouter();

  const tags = posts.map((post) =>
    post.category.map((tag) => tag.category.title.toLowerCase())
  );

  const tagsList = [...new Set(tags.flat())];
  tagsList.unshift("all");

  const categories = [
    ...new Set(
      tagsList.map((cat, i) => ({
        id: i,
        name: cat,
      }))
    ),
  ];

  const categorySelected = categories.find((cat) => cat.name === query.tag);
  const [selected, setSelected] = useState(categorySelected || categories[0]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const category = categories.find((cat) => cat.name === query.tag);
    if (category) {
      setSelected(category);
    }
  }, [query.tag]);

  const filteredBlogPosts = posts.filter((p) => {
    const searchContent =
      p.title +
      p.category.map((p) => p.category.title) +
      p.excerpt.map((p) => p.children.map((c) => c.text)).join(" ");
    return searchContent.toLowerCase().includes(searchValue.toLowerCase());
  });

  const taggedPosts = posts.filter((p) => {
    const tag = p.category.map((p) => p.category.title.toLowerCase());
    return tag.includes(selected.name);
  });

  const onSearchHandler = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    setSelected(categories[0]);
  };

  return (
    <>
      <Head>
        <title>Luciano Villalobos</title>
      </Head>
      <Container>
        <div className="pb-6 divide-y divide-teal-500/30 lg:pb-14 dark:divide-amber-500/30">
          <div className="px-4 pt-12 pb-4 space-y-2 lg:pb-8 md:space-y-8">
            <div className="pt-6 pb-3 font-extrabold leading-9 tracking-tight lg:pb-1 md:leading-14">
              <h1 className="text-3xl text-gray-500/90 dark:text-gray-300 sm:text-4xl sm:leading-10 md:text-6xl">
                Blog
              </h1>
            </div>
            <div className="items-center space-y-3 lg:space-y-0 lg:space-x-4 lg:flex">
              <div className="relative lg:w-1/2">
                <input
                  aria-label="Search articles"
                  type="text"
                  onChange={onSearchHandler}
                  placeholder="Search articles"
                  className="block w-full px-4 py-2 text-gray-400 placeholder-gray-400 border rounded-md border-teal-500/30 dark:border-amber-500/30 focus:ring-teal-500/50 dark:focus:ring-amber-500/50 dark:focus:border-amber-500/30 focus:border-teal-500/30 dark:text-gray-300 dark:bg-bgDark bg-bgLight"
                />
                <svg
                  className="absolute w-5 h-5 text-teal-500/90 right-3 top-3 dark:text-amber-500/90"
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

              <div className="pb-2 lg:pb-0 lg:w-1/5">
                <Listbox value={selected} onChange={setSelected}>
                  {({ open }) => (
                    <>
                      <div className="relative">
                        <Listbox.Button className="relative w-full px-4 py-2 text-left placeholder-gray-400 capitalize border rounded-md shadow-sm cursor-default border-teal-500/30 text-gray-500/90 dark:focus:ring-amber-500/50 focus:outline-none focus:ring-1 dark:border-amber-500/30 focus:ring-teal-500/60 dark:focus:border-amber-500/10 focus:border-teal-500 dark:bg-bgDark dark:text-gray-300">
                          <span className="block truncate">
                            {selected.name}
                          </span>
                          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <ChevronDownIcon
                              className="w-5 h-5 dark:text-amber-500/90 text-teal-500/90"
                              aria-hidden="true"
                            />
                          </span>
                        </Listbox.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base border rounded-md shadow-lg border-teal-500/30 dark:border-amber-500/30 dark:bg-bgDark bg-bgLight max-h-60 focus:outline-none sm:text-sm">
                            {categories.map((tag) => (
                              <Listbox.Option
                                key={tag.id}
                                className={({ active }) =>
                                  classNames(
                                    active
                                      ? "dark:text-gray-200 dark:bg-amber-500/20 text-gray-500 bg-teal-500/20"
                                      : "dark:text-gray-300 text-gray-500/90",
                                    "cursor-default select-none relative py-2 pl-8 pr-4 capitalize"
                                  )
                                }
                                value={tag}
                              >
                                {({ selected, active }) => (
                                  <>
                                    <span
                                      className={classNames(
                                        selected
                                          ? "font-semibold"
                                          : "font-normal",
                                        "block truncate"
                                      )}
                                    >
                                      {tag.name}
                                    </span>

                                    {selected ? (
                                      <span
                                        className={classNames(
                                          active
                                            ? "dark:text-gray-200 text-gray-500"
                                            : "text-teal-500/90 dark:text-amber-500/90",
                                          "absolute inset-y-0 left-0 flex items-center pl-1.5"
                                        )}
                                      >
                                        <CheckIcon
                                          className="w-5 h-5"
                                          aria-hidden="true"
                                        />
                                      </span>
                                    ) : null}
                                  </>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </>
                  )}
                </Listbox>
              </div>
            </div>
          </div>

          <div className="pt-2 pb-12 mx-auto overflow-hidden sm:py-6">
            <div className="grid grid-cols-1 space-y-10 divide-y divide-teal-500/10 dark:divide-amber-500/10 lg:pl-1">
              {!filteredBlogPosts.length && (
                <p className="px-4 py-2 text-gray-400 lg:px-6">
                  No posts found.
                </p>
              )}
              {selected.name === "all"
                ? filteredBlogPosts.map((post) => (
                    <PostPreview
                      key={post.slug}
                      title={post.title}
                      date={post.date}
                      slug={post.slug}
                      excerpt={post.excerpt}
                      category={post.category}
                    />
                  ))
                : taggedPosts.map((post) => (
                    <PostPreview
                      key={post.slug}
                      title={post.title}
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
