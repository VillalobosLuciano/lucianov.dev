import { FaGithub, FaLink } from "react-icons/fa";
import SanityImage from "./SanityImage";

export default function ProjectHeader({
  projectName,
  projectType,
  mainImage,
  website,
  code,
}) {
  return (
    <>
      <div className="flex flex-col mx-4 my-16 lg:items-center lg:justify-between lg:flex-row-reverse">
        <div className="relative w-32 mb-6 border lg:mb-0 border-amber-500/20 h-28">
          <SanityImage
            src={mainImage}
            className="object-contain object-center"
          />
        </div>

        <div className="space-y-1">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {projectName}
          </h1>
          <p className="text-lg text-gray-900 sm:text-xl dark:text-gray-200">
            {projectType}
          </p>
          <div className="flex items-center pt-2 mt-3 space-x-6 lg:space-x-4">
            <a href={code} target="_blank" rel="noreferrer">
              <div className="flex items-center pt-1 space-x-2">
                <FaGithub className="w-4 h-4 text-gray-300" />
                <span className="text-sm text-yellow-500 underline lg:text-base hover:text-yellow-400 underline-offset-2">
                  Browse code
                </span>
              </div>
            </a>
            <a href={website} target="_blank" rel="noreferrer">
              <div className="flex items-center pt-1 space-x-2">
                <FaLink className="w-4 h-4 text-gray-300" />
                <span className="text-sm text-yellow-500 underline lg:text-base hover:text-yellow-400 underline-offset-2">
                  View website
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
