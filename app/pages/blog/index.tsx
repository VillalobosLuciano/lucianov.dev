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
  tagsList.unshift("All");

  const categories = tagsList.map((cat, i) => ({
    id: i,
    name: cat,
  }));

  const [selected, setSelected] = useState(categories[0]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (query.tag) {
      setSelected(categories.find((cat) => cat.name === query.tag));
    }
  }, [query.tag, categories]);

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
        <title>Luciano&apos;s Digital Space</title>
      </Head>
      <Container>
        <div className="pb-6 divide-y lg:pb-14 divide-opacity-30 divide-neptune-500 dark:divide-amber-500 dark:divide-opacity-30">
          <div className="px-4 pt-12 pb-4 space-y-2 lg:pb-8 md:space-y-8">
            <div className="pt-6 pb-3 font-extrabold leading-9 tracking-tight lg:pb-1 md:leading-14">
              <h1 className="text-3xl text-neptune-500 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl">
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
                  className="block w-full px-4 py-2 text-gray-500 placeholder-gray-400 border rounded-md bg-neptune-500 bg-opacity-5 border-opacity-30 dark:border-[#f59e0b] dark:border-opacity-20 border-neptune-500 focus:ring-neptune-500 dark:focus:ring-opacity-60 dark:focus:ring-yellow-[#f59e0b]  dark:focus:border-[#f59e0b]  dark:focus:border-opacity-60 focus:border-neptune-500 dark:bg-[#171717] dark:text-gray-100"
                />
                <svg
                  className="absolute w-5 h-5 text-neptune-500 right-3 top-3 dark:text-[#f59e0b]"
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
                        <Listbox.Button className="relative w-full py-2 px-4 dark:focus:ring-yellow-[#f59e0b] text-left shadow-sm cursor-default focus:outline-none focus:ring-1 text-gray-500 placeholder-gray-400 border rounded-md bg-neptune-500 bg-opacity-5 border-opacity-30 dark:border-[#f59e0b] dark:border-opacity-20 border-neptune-500 focus:ring-neptune-500 dark:focus:ring-opacity-60 dark:focus:ring-yellow-[#f59e0b]  dark:focus:border-[#f59e0b]  dark:focus:border-opacity-60 focus:border-neptune-500 dark:bg-[#171717] dark:text-gray-100">
                          <span className="block truncate">
                            {selected.name}
                          </span>
                          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <ChevronDownIcon
                              className="w-5 h-5 text-[#f59e0b]"
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
                          <Listbox.Options className="border dark:border-[#f59e0b] dark:border-opacity-20 absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-[#171717] rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {categories.map((tag) => (
                              <Listbox.Option
                                key={tag.id}
                                className={({ active }) =>
                                  classNames(
                                    active
                                      ? "text-white bg-[#f59e0b] bg-opacity-20"
                                      : "text-gray-100",
                                    "cursor-default select-none relative py-2 pl-8 pr-4"
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
                                            ? "text-gray-100"
                                            : "text-[#f59e0b]",
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
            <div className="grid grid-cols-1 space-y-10 divide-y divide-gray-200 dark:divide-[#f59e0b] dark:divide-opacity-10 lg:pl-1">
              {!filteredBlogPosts.length && (
                <p className="px-4 py-2 text-gray-400 lg:px-6">
                  No posts found.
                </p>
              )}
              {selected.name === "All"
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
