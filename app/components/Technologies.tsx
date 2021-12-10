import { sanityClient } from "../lib/sanity.server";
import imageUrlBuilder from "@sanity/image-url";
import { motion } from "framer-motion";
import Image from "next/image";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

export default function Technologies({ technologies }) {
  return (
    <>
      <hr className="w-8 mt-20 mb-2 ml-4 border-2 lg:mt-24 border-opacity-30 border-neptune-500 dark:border-[#f59e0b] dark:border-opacity-30" />
      <div className="px-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-neptune-500 dark:text-gray-100 md:mx-0 sm:text-4xl">
          Tech Stack
        </h2>
        <p className="mt-2 leading-snug text-primaryLight dark:text-gray-400">
          My current toolbox for flexibility, speed, and readability in
          development.
        </p>
      </div>

      <div className="px-4 pt-10 mx-auto">
        <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
          {technologies.map((tech, i) => (
            <motion.div
              className="py-3 border bg-opacity-60 border-bgAccentLight bg-[#fcf7ed] dark:bg-[#171717] dark:border-[#F59E0B] dark:border-opacity-10 rounded-2xl"
              key={tech._id}
              initial={{
                opacity: 0,
                translateX: -50,
                translateY: -50,
              }}
              animate={{ opacity: 1, translateX: 0, translateY: 0 }}
              transition={{ duration: 0.3, delay: i * 0.2 }}
            >
              <div className="flex justify-center col-span-1 aspect-w-2 aspect-h-1 md:col-span-2 lg:col-span-1">
                <Image
                  className="object-contain object-center opacity-70 dark:opacity-100 filter grayscale"
                  src={urlFor(tech.image).url()}
                  alt={tech.name}
                  layout="fill"
                />
              </div>
              <p className="pt-1 text-xs text-center text-primaryLight dark:text-gray-300">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
