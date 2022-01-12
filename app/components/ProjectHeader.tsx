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
            <a
              href={website}
              target="_blank"
              rel="noreferrer"
              className="
                          p-2 
                          border 
                          rounded-xl 
                          dark:bg-opacity-20 
                          dark:border-[#F59E0B] 
                          dark:border-opacity-50
                          dark:bg-[#171717] 
                          dark:hover:bg-opacity-10 
                          dark:hover:bg-yellow-600 
                          dark:hover:text-gray-100 
                          border-opacity-60 
                          bg-neptune-500 
                          hover:bg-opacity-20 
                          bg-opacity-10 
                          hover:border-opacity-60 
                          border-neptune-500 
                          hover:text-gray-500 
                          transition  
                          duration-300
                          "
            >
              <FaLink />
            </a>
            <a
              href={code}
              target="_blank"
              rel="noreferrer"
              className="
                           p-2 
                          border 
                          rounded-xl 
                          dark:bg-opacity-20 
                          dark:border-[#F59E0B] 
                          dark:border-opacity-50
                          dark:bg-[#171717] 
                          dark:hover:bg-opacity-10 
                          dark:hover:bg-yellow-600 
                          dark:hover:text-gray-100 
                          border-opacity-60 
                          bg-neptune-500 
                          hover:bg-opacity-20 
                          bg-opacity-10 
                          hover:border-opacity-60 
                          border-neptune-500 
                          hover:text-gray-500 
                          transition  
                          duration-300
                          "
            >
              <FaGithub />
            </a>
          </div>
          {/* <div className="flex-col space-y-2">
            <a href={code} target="_blank" rel="noreferrer">
              <div className="flex items-center space-x-2">
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
          </div> */}
        </div>
      </div>
    </>
  );
}
