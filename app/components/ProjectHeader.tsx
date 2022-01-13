import { FaGithub, FaLink } from "react-icons/fa";
import SanityImage from "./SanityImage";
import IconButton from "./IconButton";

export default function ProjectHeader({
  projectName,
  projectType,
  mainImage,
  website,
  code,
}) {
  return (
    <>
      <div className="flex flex-col mx-4 mt-20 lg:my-16 lg:space-x-6 lg:items-center lg:flex-row">
        <div className="relative w-32 border lg:-mb-1.5 lg:h-32 lg:w-36 border-amber-500/20 h-28">
          <SanityImage
            src={mainImage}
            className="object-contain object-center"
          />
        </div>
        <div className="flex-col my-4 space-y-3 lg:space-y-4">
          <div className="lg:pt-1">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              {projectName}
            </h1>
            <p className="text-lg text-gray-900 sm:text-xl dark:text-gray-200">
              {projectType}
            </p>
          </div>

          <div className="flex space-x-2 text-lg text-gray-400 dark:text-gray-300">
            <IconButton href={website}>
              <FaLink className="w-5 h-5" />
            </IconButton>
            <IconButton href={code}>
              <FaGithub className="w-5 h-5" />
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
}
