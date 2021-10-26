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
              <div className="border border-yellow-900 border-opacity-50 rounded-full shadow-medium aspect-w-1 aspect-h-1">
                <Image
                  className="object-cover object-center rounded-full grayscale"
                  src={urlFor(about.image).url()}
                  alt={about.name}
                  layout="fill"
                />
              </div>
            </div>
          </div>

          <div className="relative bg-yellow-900 border border-yellow-900 border-opacity-50 shadow-medium bg-opacity-10 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
            <div className="relative max-w-md px-4 py-8 mx-auto space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:py-6 lg:px-6 lg:col-start-3 lg:col-span-8">
              <h2
                className="text-3xl font-extrabold text-white"
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
                        "I'm Luciano. Here I share my journey exploring web development,"
                      )
                      .typeString(
                        '<strong> specially the <span style="color: #f59e0b;">React</span> ecosystem.</strong>'
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
                <div className="mb-8 text-lg text-gray-300 lg:mb-6">
                  <PortableText blocks={about.bio} />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile version */}

      <div className="flex flex-col px-4 pt-12 lg:hidden">
        <div className="relative w-28 h-28">
          <Image
            className="absolute rounded-2xl grayscale"
            src={urlFor(about.image).url()}
            alt={about.name}
            layout="fill"
          />
          <div className="absolute inset-0 bg-yellow-500 bg-opacity-10 mix-blend-multiply" />
        </div>

        <h3 className="pt-6 pb-2 pr-16 text-3xl font-extrabold leading-8 tracking-tight text-gray-800 dark:text-gray-100">
          {about.name}
        </h3>
        <div className="leading-snug tracking-wide text-justify text-gray-500 dark:text-gray-300">
          <PortableText blocks={about.bio} />
        </div>
      </div>
    </>
  );
}
