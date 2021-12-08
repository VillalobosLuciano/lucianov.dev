import { sanityClient } from "../lib/sanity.server";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

export default function ProjectHeader({ projectName, projectType, mainImage }) {
  return (
    <>
      <div className="flex items-center mx-4 mt-16 bg-yellow-800 border border-yellow-600 rounded-lg bg-opacity-5 border-opacity-20">
        <div className="">
          <div className="relative w-32 border-r border-yellow-600 border-opacity-20 h-28">
            <Image
              src={urlFor(mainImage).url()}
              alt={`${projectName + " " + projectType}`}
              layout="fill"
            />
          </div>
        </div>
        <div className="ml-8">
          <div className="space-y-0.5">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              {projectName}
            </h1>
            <p className="text-lg text-gray-900 sm:text-xl dark:text-gray-200">
              {projectType}
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}
