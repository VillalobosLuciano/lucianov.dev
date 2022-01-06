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
      <div className="w-full max-w-2xl pb-6 mt-2 lg:max-w-none lg:col-span-4 lg:pb-16">
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
              <div className="w-full px-4 pt-6 mx-auto lg:py-4">
                <div className="grid grid-cols-3 gap-4 md:grid-cols-8">
                  {technologies.map((tech, i) => (
                    <div
                      className="py-3 border bg-opacity-60 border-bgAccentLight bg-[#fcf7ed] dark:bg-[#171717] dark:border-[#F59E0B] dark:border-opacity-10 rounded-2xl"
                      key={i}
                    >
                      <div className="flex justify-center col-span-1 aspect-w-2 aspect-h-1 md:col-span-2 lg:col-span-1">
                        <Image
                          className="object-contain object-center opacity-70 dark:opacity-100 filter grayscale"
                          src={urlFor(tech.tech.image).url()}
                          alt={tech.name}
                          layout="fill"
                        />
                      </div>
                      <p className="pt-1 text-xs text-center text-primaryLight dark:text-gray-300">
                        {tech.tech.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Tab.Panel>

            <Tab.Panel as="dl" className="text-sm text-gray-500">
              <div className="pt-10 lg:pt-8">
                <Pre language="json">{code}</Pre>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
