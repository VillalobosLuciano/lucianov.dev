import { motion } from "framer-motion";
import SanityImage from "./SanityImage";
import Tooltip from "./Tooltip";

export default function Technologies({ technologies }) {
  const user = technologies.slice(0, 5);
  const learning = technologies.slice(5, 8);

  return (
    <>
      <hr className="w-6 mt-20 mb-2 ml-4 border-2 lg:mt-28 border-opacity-30 border-neptune-500 dark:border-amber-500/30" />
      <div className="px-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-neptune-500 dark:text-gray-300 md:mx-0 sm:text-4xl">
          Tech stack
        </h2>
        <p className="mt-2 leading-snug text-primaryLight dark:text-gray-400">
          My current toolbox for flexibility, speed, and readability in
          development.
        </p>
      </div>
      <div className="px-4 pt-8 mx-auto">
        <div className="grid grid-cols-3 gap-4 lg:gap-x-8 md:grid-cols-8">
          <div className="col-span-5">
            <div className="grid grid-cols-3 gap-4 px-2 md:grid-cols-5">
              {user.map((tech, i) => (
                <Tooltip text={tech.name} position="bottom" key={tech._id}>
                  <motion.div
                    className="py-4 border rounded-md border-amber-500/10"
                    key={tech._id}
                    initial={{
                      opacity: 0,
                      translateX: -50,
                      translateY: -50,
                    }}
                    animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + i * 0.2 }}
                  >
                    <div className="flex justify-center col-span-1 aspect-w-2 aspect-h-1 md:col-span-2 lg:col-span-1">
                      <SanityImage
                        className="object-contain object-center"
                        src={tech.image}
                      />
                    </div>
                    <p className="pt-1 text-xs text-center lg:hidden text-primaryLight dark:text-gray-300">
                      {tech.name}
                    </p>
                  </motion.div>
                </Tooltip>
              ))}
            </div>
            <div className="w-full pt-4 mb-2 text-center">
              <hr className="mb-2 border border-neptune-500/30 dark:border-amber-500/30" />
              <span className="font-thin tracking-tight text-gray-400/90">
                Current stack
              </span>
            </div>
          </div>
          <div className="col-span-5 lg:col-span-3">
            <div className="grid grid-cols-3 gap-4 md:grid-cols-3">
              {learning.map((tech, i) => (
                <Tooltip text={tech.name} position="bottom" key={tech._id}>
                  <motion.div
                    className="py-4 border rounded-md border-amber-500/10"
                    key={tech._id}
                    initial={{
                      opacity: 0,
                      translateX: -50,
                      translateY: -50,
                    }}
                    animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + i * 0.2 }}
                  >
                    <div className="flex justify-center col-span-1 aspect-w-2 aspect-h-1 md:col-span-2 lg:col-span-1">
                      <SanityImage
                        className="object-contain object-center"
                        src={tech.image}
                      />
                      {/* <Image
                      className="object-contain object-center filter grayscale"
                      src={urlFor(tech.image).url()}
                      alt={tech.name}
                      layout="fill"
                    /> */}
                    </div>
                    <p className="pt-1 text-xs text-center lg:hidden text-primaryLight dark:text-gray-300">
                      {tech.name}
                    </p>
                  </motion.div>
                </Tooltip>
              ))}
            </div>
            <div className="w-full pt-4 mb-2 text-center">
              <hr className="mb-2 border border-neptune-500/30 dark:border-amber-500/30" />
              <span className="font-thin tracking-tight text-gray-400/90">
                Learning
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
