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
      <div className="px-4 pt-12 mx-auto lg:text-center lg:pt-16 lg:pb-14">
        <div className="hidden sm:block">
          <p className="text-base font-semibold tracking-wider text-yellow-500 uppercase">
            Immersed in modern open source technologies
          </p>
          <p className="mt-2 text-gray-300 lg:mt-6 lg:px-10">
            To achieve flexibility, speed and readability in development, I use
            the following stack which, in my opinion, fully meets these
            requirements.
          </p>
        </div>
        <div className="sm:hidden">
          <h2 className="text-3xl font-extrabold tracking-tight text-accentLight dark:text-gray-100">
            Tech Stack
          </h2>
          <p className="mt-2 leading-snug tracking-wide text-primaryLight dark:text-gray-400">
            My toolkit to achieve flexibility, speed and readability in
            development.
          </p>
        </div>

        <div className="pt-10 mx-auto sm:pt-14 max-w-7xl sm:px-6 lg:px-8 xl:px-16">
          <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
            {technologies.map((tech, i) => (
              <motion.div
                className="py-3 border bg-opacity-30 border-bgAccentLight bg-bgAccentLight dark:bg-yellow-900 dark:border-yellow-900 dark:border-opacity-60 dark:bg-opacity-10 rounded-2xl"
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
      </div>
    </>
  );
}
