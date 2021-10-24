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
      <div className="px-4 py-12 mx-auto text-center lg:pt-16">
        <p className="text-base font-semibold tracking-wider text-yellow-500 uppercase">
          Lucky to enjoy the benefits of modern open-source technologies
        </p>
        <p className="mt-6 text-gray-300 lg:px-6">
          To achieve flexibility, speed and readability in the development, I
          use the following stack which, in my opinion, fully meets these
          requirements.
        </p>

        <div className="px-4 mx-auto pt-14 max-w-7xl sm:px-6 lg:px-8 xl:px-16">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-6">
            {technologies.map((tech, i) => (
              <motion.div
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
                    className="object-contain object-center filter grayscale"
                    src={urlFor(tech.image).url()}
                    alt={tech.name}
                    layout="fill"
                  />
                </div>
                <p className="pt-1 text-sm text-gray-300">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
