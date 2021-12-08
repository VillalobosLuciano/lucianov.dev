import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/solid";
import Pre from "@/components/Pre";
import { sanityClient } from "../lib/sanity.server";
import imageUrlBuilder from "@sanity/image-url";
import { motion } from "framer-motion";
import Image from "next/image";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

export default function ProjectDependencies({ code, technologies }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="">
      <h1 className="mx-4 mt-6 text-2xl text-gray-900 lg:mt-12 font-semiboldtracking-tight dark:text-white">
        Dependencies
      </h1>
      <div className="w-full max-w-2xl mt-2 lg:max-w-none lg:col-span-4">
        <Tab.Group as="div">
          <div className="mx-4 border-b dark:border-yellow-500 dark:border-opacity-20">
            <Tab.List className="flex -mb-px">
              <Tab
                className={({ selected }) =>
                  classNames(
                    selected
                      ? "border-yellow-600 border-opacity-30 text-yellow-500"
                      : "border-transparent dark:text-gray-300 dark:hover:text-gray-200",
                    "whitespace-nowrap py-6 border-b-2 font-medium text-sm px-4"
                  )
                }
              >
                Technologies
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    selected
                      ? "border-yellow-600 border-opacity-30 text-yellow-500"
                      : "border-transparent dark:text-gray-300 dark:hover:text-gray-200",
                    "whitespace-nowrap py-6 border-b-2 font-medium text-sm px-4"
                  )
                }
              >
                package.json
              </Tab>
            </Tab.List>
          </div>
          <Tab.Panels as={Fragment}>
            <Tab.Panel className="">
              <div className="">
                <div className="w-full px-4 py-10 mx-auto lg:py-6">
                  <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
                    {technologies.map((tech, i) => (
                      <div
                        className="pb-3 border lg:mx-1 bg-opacity-60 border-bgAccentLight bg-[#fcf7ed] dark:bg-[#2c2c30] dark:border-yellow-600 dark:border-opacity-20 dark:bg-opacity-20 rounded-2xl"
                        key={i}
                      >
                        <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
                          <Image
                            className="object-contain object-center opacity-70 dark:opacity-100 filter grayscale"
                            src={urlFor(tech.tech.image).url()}
                            alt={tech.name}
                            width={60}
                            height={80}
                          />
                        </div>
                        <p className="text-xs text-center text-primaryLight dark:text-gray-300">
                          {tech.tech.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Tab.Panel>

            <Tab.Panel as="dl" className="text-sm text-gray-500">
              <div className="py-14 lg:py-10">
                <Pre language="json">{code}</Pre>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
