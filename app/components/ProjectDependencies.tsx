import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import Pre from "@/components/Pre";
import { motion } from "framer-motion";
import SanityImage from "./SanityImage";
import Tooltip from "./Tooltip";
import ProseableText from "./ProseableText";

export default function ProjectDependencies({ code, technologies }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <h1 className="px-4 pt-12 text-3xl font-semibold leading-9 tracking-tight text-gray-500 md:leading-14 dark:text-gray-300 sm:leading-10">
        Dependencies
      </h1>
      <div className="w-full max-w-2xl pb-6 mt-2 lg:max-w-none lg:col-span-4 lg:pb-16">
        <Tab.Group as="div">
          <div className="mx-4 border-b dark:border-amber-500/30 border-teal-600/30">
            <Tab.List className="flex -mb-px">
              <Tab
                className={({ selected }) =>
                  classNames(
                    selected
                      ? "dark:border-amber-500/30 dark:text-amber-500/90 border-teal-600/30 text-teal-600/90"
                      : "border-transparent dark:text-gray-300/90 dark:hover:text-gray-300",
                    "whitespace-nowrap py-6 border-b-2 font-medium text-sm pr-4"
                  )
                }
              >
                Technologies
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    selected
                      ? "dark:border-amber-500/30 dark:text-amber-500/90 border-teal-600/30 text-teal-600/90"
                      : "border-transparent dark:text-gray-300/90 dark:hover:text-gray-300 text-gray-400/90 hover:text-gray-400",
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
                <div className="grid grid-cols-3 gap-4 md:grid-cols-9">
                  {technologies.map(({ tech }, i) => (
                    <Tooltip text={tech.name} position="bottom" key={i}>
                      <motion.div
                        className="py-4 border rounded-md border-teal-600/10 dark:border-amber-500/10"
                        key={i}
                        initial={{
                          opacity: 0,
                          translateX: -50,
                          translateY: -50,
                        }}
                        animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 + i * 0.2 }}
                      >
                        <div className="relative flex justify-center w-full h-10 col-span-1 aspect-square md:col-span-2 lg:col-span-1">
                          <SanityImage
                            className="object-contain object-center"
                            src={tech.image}
                          />
                        </div>
                        <p className="pt-1 text-xs text-center text-gray-400 lg:hidden">
                          {tech.name}
                        </p>
                      </motion.div>
                    </Tooltip>
                  ))}
                </div>
              </div>
            </Tab.Panel>

            <Tab.Panel as="dl">
              <ProseableText>
                <Pre language="json">{code}</Pre>
              </ProseableText>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
}
