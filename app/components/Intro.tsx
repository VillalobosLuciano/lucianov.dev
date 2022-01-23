import { motion } from "framer-motion";
import { PortableText } from "@/lib/sanity";
import SanityImage from "./SanityImage";

export default function Intro({ about }) {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -20 },
  };

  return (
    <>
      <div className="hidden mt-6 -mr-10 lg:pl-4 lg:block md:pt-16">
        <motion.div
          className="lg:grid lg:grid-cols-12"
          initial="hidden"
          animate="visible"
          variants={list}
        >
          <div className="relative z-10 pb-2 mr-4 lg:col-start-9 lg:row-start-1 lg:col-span-4 lg:py-10">
            <motion.div variants={item}>
              <div className="mx-auto rounded-full w-[235px] h-[235px]">
                <div className="relative border rounded-full border-teal-600/20 dark:border-amber-500/20 aspect-square">
                  <SanityImage
                    className="object-cover object-center rounded-full"
                    src={about.image}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="relative border dark:border-amber-500/20 border-teal-500/20 lg:col-start-1 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-12 lg:items-center">
            <div className="relative max-w-md pl-16 mx-auto mr-6 space-y-5 sm:max-w-3xl lg:max-w-none lg:col-start-1 lg:col-span-10">
              <motion.h2
                className="text-3xl font-extrabold text-gray-500/90 dark:text-gray-300"
                variants={item}
              >
                <PortableText blocks={about.intro} />
              </motion.h2>
              <motion.div className="text-lg text-gray-400" variants={item}>
                <PortableText blocks={about.bio} />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* mobile version */}
      <div className="flex flex-col px-4 mt-20 lg:hidden">
        <div className="relative w-32 h-32 mb-6">
          <SanityImage
            className="object-contain object-center rounded-lg"
            src={about.image}
          />
        </div>
        <h3 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-500/90 dark:text-gray-100">
          {about.name}
        </h3>

        <div className="pt-2 leading-snug text-gray-400">
          <PortableText blocks={about.bio} />
        </div>
      </div>
    </>
  );
}
