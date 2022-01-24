import { FaGithub, FaLink } from "react-icons/fa";
import SanityImage from "./SanityImage";
import IconButton from "./IconButton";

export default function ProjectHeader({
  projectName,
  projectType,
  mainImage,
  website,
  source,
  projectDescription,
}) {
  return (
    <>
      <div className="flex flex-col mx-4 mt-20 lg:mt-16 lg:space-x-6 lg:items-center lg:flex-row">
        <div className="relative w-32 border rounded-md lg:-mb-1.5 lg:h-36 lg:w-40 dark:border-amber-500/20 border-teal-600/20 h-28">
          <SanityImage
            placeholderFilter="hue-rotate"
            src={mainImage}
            className="object-contain object-center"
          />
        </div>
        <div className="flex-col my-4 space-y-2 lg:space-y-5">
          <div className="lg:pt-1 lg:space-y-1">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-600/90 md:leading-14 dark:text-gray-300 sm:text-4xl sm:leading-10 md:text-5xl">
              {projectName}
            </h1>
            <p className="text-lg text-gray-500 sm:text-xl dark:text-gray-400">
              {projectDescription}
            </p>
          </div>

          <div className="flex space-x-2 text-lg">
            {website && (
              <IconButton href={website}>
                <FaLink className="w-5 h-5" />
              </IconButton>
            )}
            {source && (
              <IconButton href={source}>
                <FaGithub className="w-5 h-5" />
              </IconButton>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
