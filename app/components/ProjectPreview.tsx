import { useRouter } from "next/router";
import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa";
import { sanityClient } from "../lib/sanity.server";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import cn from "classnames";
import { useNextSanityImage } from "next-sanity-image";
import { configuredSanityClient } from "@/lib/sanity";

export default function ProjectPreview({
  slug,
  mainImage,
  projectName,
  projectType,
  scrollX,
  website,
  source,
}) {
  const imageProps = useNextSanityImage(configuredSanityClient, mainImage);
  const router = useRouter();
  return (
    <div className="inline-block snap-center">
      <div
        className={cn("overflow-hidden", {
          "w-[280px] lg:w-[270px]": scrollX === "true",
          "w-full": scrollX === "false",
        })}
      >
        <div
          onClick={() => router.push(`/projects/${slug}`)}
          className="overflow-hidden border rounded-lg dark:border-[#F59E0B] dark:border-opacity-20 dark:bg-opacity-5 cursor-pointer border-bgAccentLight group aspect-w-4 aspect-h-3"
        >
          <div className="object-cover object-center transition duration-300 filter grayscale group-hover:grayscale-0">
            <Image
              src={imageProps}
              alt={projectName}
              layout="fill"
              placeholder="blur"
            />
          </div>
          <div className="absolute inset-0 transition duration-300 bg-opacity-60 bg-bgAccentLight dark:bg-yellow-300 dark:bg-opacity-10 mix-blend-multiply group-hover:bg-opacity-0" />
        </div>
        <div className="flex items-center justify-between mx-1 mt-3 space-x-8">
          <div>
            <h3
              className="text-base font-semibold transition duration-300 cursor-pointer text-neptune-500 hover:text-neptune-600 dark:text-[#F59E0B] dark:hover:text-[#B45309]"
              onClick={() => router.push(`/projects/${slug}`)}
            >
              {projectName}
            </h3>
            <p className="text-md text-primaryLight dark:text-gray-300">
              {projectType}
            </p>
          </div>
          <div className="flex pt-2 space-x-2 text-lg text-gray-400 dark:text-gray-300 md:space-x-2">
            <a
              href={website}
              target="_blank"
              rel="noreferrer"
              className="
                          p-2 
                          border 
                          rounded-xl 
                          mb-1.5 
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
              href={source}
              target="_blank"
              rel="noreferrer"
              className="
                           p-2 
                          border 
                          rounded-xl 
                          mb-1.5 
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
        </div>
      </div>
    </div>
  );
}
