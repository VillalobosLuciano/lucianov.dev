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
      <div className="hidden pl-4 mx-auto mt-6 lg:block md:mt-20 md:mb-6">
        <div className="lg:grid lg:grid-cols-12">
          <div className="relative z-10 pb-2 lg:col-start-9 lg:row-start-1 lg:col-span-4 lg:py-4">
            <div className="px-8 mx-auto rounded-full lg:p-4">
              <div className="border rounded-full border-bgAccentLight dark:border-[#F59E0B] dark:border-opacity-20 aspect-w-1 aspect-h-1">
                <Image
                  className="object-cover object-center rounded-full grayscale"
                  src={urlFor(about.image).url()}
                  alt={about.name}
                  layout="fill"
                />
              </div>
            </div>
          </div>

          <div className="bg-opacity-60 border-bgAccentLight bg-[#fcf7ed] relative border dark:bg-[#171717] dark:border-[#F59E0B] dark:border-opacity-20 lg:col-start-1 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-12 lg:items-center">
            <div className="relative max-w-md pr-6 mx-auto space-y-5 pl-14 sm:max-w-3xl lg:max-w-none lg:col-start-1 lg:col-span-10">
              <h2
                className="text-3xl font-extrabold text-neptune-500 dark:text-gray-200"
                id="join-heading"
              >
                <Typewriter
                  options={{
                    delay: 30,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(300)
                      // .typeString("Hello, friend.")
                      // .pauseFor(200)
                      // .deleteAll(30)
                      .typeString("Hi! I'm Luciano, ")
                      .pauseFor(200)
                      .typeString(
                        "here I will organize and share my learning process in WebDev and IoT technologies 🙃."
                      )
                      .pauseFor(1500)
                      .callFunction(function (state) {
                        state.elements.cursor.style.display = "none";
                      })
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
                <div className="text-lg text-primaryLight dark:text-gray-400">
                  <PortableText blocks={about.bio} />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile version */}
      <div className="flex flex-col px-4 mt-20 lg:hidden">
        <div className="relative w-32 h-32 mb-8">
          <Image
            className="absolute rounded-lg grayscale"
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
