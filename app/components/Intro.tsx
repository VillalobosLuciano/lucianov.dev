import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "@/lib/sanity.server";
import { PortableText } from "@/lib/sanity";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

export default function Intro({ about }) {
  return (
    <>
      <div className="hidden mx-auto mt-6 lg:block md:mt-20 md:mb-6 lg:px-4">
        <div className="lg:grid lg:grid-cols-12">
          <div className="relative z-10 pb-2 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-4">
            <div className="px-8 mx-auto rounded-full lg:p-4">
              <div className="border rounded-full border-bgAccentLight dark:border-yellow-900 dark:border-opacity-50 shadow-neptune dark:shadow-yellow aspect-w-1 aspect-h-1">
                <Image
                  className="object-cover object-center rounded-full grayscale"
                  src={urlFor(about.image).url()}
                  alt={about.name}
                  layout="fill"
                />
              </div>
            </div>
          </div>

          <div className="bg-opacity-60 border-bgAccentLight bg-[#fcf7ed] relative border dark:bg-yellow-900 dark:border-yellow-900 dark:border-opacity-50 shadow-neptune dark:shadow-yellow dark:bg-opacity-5 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
            <div className="relative max-w-md px-4 py-8 mx-auto space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:py-6 lg:px-6 lg:col-start-3 lg:col-span-8">
              <h2
                className="text-3xl font-extrabold text-neptune-500 dark:text-gray-200"
                id="join-heading"
              >
                <Typewriter
                  options={{
                    delay: 55,
                    deleteSpeed: 25,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(600)
                      .typeString("Hello, friend.")
                      .pauseFor(300)
                      .deleteAll()
                      .typeString(
                        "I'm Luciano. Here I share my journey exploring web development, specially the React ecosystem."
                      )
                      .pauseFor(1000)
                      .start();
                  }}
                />
              </h2>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.8,
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 3,
                    },
                  },
                }}
              >
                <div className="mb-8 text-lg text-primaryLight dark:text-gray-400 lg:mb-6">
                  <PortableText blocks={about.bio} />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile version */}

      <div className="flex flex-col px-4 pt-14 lg:hidden">
        <div className="relative w-32 h-32 mb-6">
          <Image
            className="absolute rounded-xl grayscale"
            src={urlFor(about.image).url()}
            alt={about.name}
            layout="fill"
          />
          <div className="absolute inset-0 bg-neptune-500 dark:bg-yellow-500 dark:bg-opacity-10 bg-opacity-20 mix-blend-multiply rounded-2xl" />
        </div>

        <h3 className="text-3xl font-extrabold leading-tight tracking-tight text-neptune-500 dark:text-gray-100">
          {about.name}
        </h3>

        <div className="pt-2 leading-snug text-primaryLight dark:text-gray-400">
          <PortableText blocks={about.bio} />
        </div>
      </div>
    </>
  );
}
