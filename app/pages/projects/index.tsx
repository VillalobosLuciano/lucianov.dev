import Head from "next/head";
import { indexQuery } from "@/lib/queries";
import { getClient } from "@/lib/sanity.server";
import Container from "@/components/Container";
import ProjectPreview from "../../components/ProjectPreview";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";

export default function Index({ projects }) {
  const [selectedType, setSelectedType] = useState("all");

  return (
    <>
      <Head>
        <title>Luciano Villalobos</title>
      </Head>
      <Container>
        <div className="pb-6 divide-y lg:pb-14 divide-teal-500/30 dark:divide-yellow-500/30">
          <div className="px-4 pt-12 space-y-0 md:space-y-8">
            <div className="pt-6 pb-3 font-extrabold leading-9 tracking-tight lg:pb-1 md:leading-14">
              <h1 className="text-3xl text-gray-500/90 dark:text-gray-300 sm:text-4xl sm:leading-10 md:text-6xl">
                Projects
              </h1>
            </div>

            <RadioGroup
              value={selectedType}
              onChange={setSelectedType}
              className="mt-2"
            >
              <RadioGroup.Label className="sr-only">
                Choose a type
              </RadioGroup.Label>
              <div className="flex flex-wrap pb-8">
                <RadioGroup.Option
                  key="all"
                  value="all"
                  className={({ active, checked }) =>
                    clsx(
                      active
                        ? "ring-1 ring-teal-500/50 dark:ring-amber-500/50"
                        : "",
                      checked
                        ? "border dark:border-amber-500/20 dark:text-amber-500/90 border-teal-500/20 text-teal-500/90"
                        : "dark:border-amber-50/10 dark:hover:border-amber-400/40   border-teal-50/10 text-gray-400 hover:border-teal-400/40",
                      "px-4 py-2 cursor-pointer mr-4 mt-4 lg:mt-0 border capitalize font-semibold text-sm tracking-wide transition duration-300 rounded-md"
                    )
                  }
                >
                  <RadioGroup.Label as="p">All</RadioGroup.Label>
                </RadioGroup.Option>

                {projects.map((p) => (
                  <RadioGroup.Option
                    key={p._id}
                    value={p}
                    className={({ active, checked }) =>
                      clsx(
                        active
                          ? "ring-1 ring-teal-500/50 dark:ring-amber-500/50"
                          : "",
                        checked
                          ? "border dark:border-amber-500/20 dark:text-amber-500/90 border-teal-500/20 text-teal-500/90"
                          : "dark:border-amber-50/10 dark:hover:border-amber-400/40   border-teal-50/10 text-gray-400 hover:border-teal-400/40",
                        "px-4 py-2 cursor-pointer mr-4 mt-4 lg:mt-0 border capitalize font-semibold text-sm tracking-wide transition duration-300 rounded-md"
                      )
                    }
                  >
                    <RadioGroup.Label as="p">{p.projectType}</RadioGroup.Label>
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
          </div>

          <div className="grid grid-cols-1 px-4 py-8 gap-y-10 gap-x-6 sm:grid-cols-2 xl:grid-cols-3 lg:gap-x-8">
            {projects.map((p) => {
              if (p === selectedType) {
                return (
                  <ProjectPreview
                    key={p._id}
                    slug={p.slug}
                    mainImage={p.mainImage}
                    projectName={p.projectName}
                    projectType={p.projectType}
                    projectDescription={p.projectDescription}
                    website={p.link}
                    source={p.source}
                    scrollX="false"
                  />
                );
              } else if (selectedType === "all") {
                return (
                  <ProjectPreview
                    key={p._id}
                    slug={p.slug}
                    mainImage={p.mainImage}
                    projectName={p.projectName}
                    projectType={p.projectType}
                    projectDescription={p.projectDescription}
                    website={p.link}
                    source={p.source}
                    scrollX="false"
                  />
                );
              } else {
                return null;
              }
            })}
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
      projects: data.projects,
    },
  };
}
