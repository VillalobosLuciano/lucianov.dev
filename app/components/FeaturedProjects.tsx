import Image from "next/image";
import { useRouter } from "next/router";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { sanityClient } from "../lib/sanity.server";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

export default function Projects({ projects }) {
  const router = useRouter();

  return (
    <section>
      <p className="px-4 pb-4 mt-2 leading-snug tracking-wide text-primaryLight dark:text-gray-400 lg:pb-12">
        Real projects that I developed for learning, for friends, for free, for
        fun.
      </p>
      <div className="grid grid-cols-1 px-4 py-5 gap-x-12 gap-y-10 md:grid-cols-3">
        {projects.length ? (
          projects.map((project) => (
            <div key={project._id} className="relative">
              <div
                onClick={() => router.push(`/projects/${project.slug}`)}
                className="overflow-hidden border rounded-lg cursor-pointer dark:border-opacity-30 border-bgAccentLight dark:border-yellow-500 group aspect-w-4 aspect-h-3"
              >
                <Image
                  className="object-cover object-center transition duration-300 filter grayscale group-hover:grayscale-0"
                  src={urlFor(project.mainImage).url()}
                  alt={project.projectName}
                  layout="fill"
                />
                <div className="absolute inset-0 transition duration-300 bg-opacity-60 bg-bgAccentLight dark:bg-yellow-300 dark:bg-opacity-10 mix-blend-multiply group-hover:bg-opacity-0" />
                <div
                  className="flex items-end p-2 transition duration-500 ease-in-out opacity-0 group-hover:opacity-95"
                  aria-hidden="true"
                >
                  <div className="hidden w-full px-4 py-2 text-sm font-semibold tracking-wide text-center text-white transition duration-300 ease-in-out bg-gray-600 border border-yellow-500 border-opacity-50 rounded-md sm:block hover:bg-gray-700 bg-opacity-60 backdrop-filter backdrop-blur">
                    View project
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 space-x-8">
                <div>
                  <h3
                    className="text-base font-semibold tracking-wide transition duration-300 cursor-pointer text-accentLight dark:text-yellow-500 dark:hover:text-yellow-600"
                    onClick={() => router.push(`/projects/${project.slug}`)}
                  >
                    {project.projectName}
                  </h3>
                  <p className="text-sm text-primaryLight dark:text-gray-300">
                    {project.projectType}
                  </p>
                </div>
                <div className="flex pt-2 space-x-3 text-lg text-primaryLight dark:text-gray-300 md:space-x-2">
                  <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 border rounded-lg mb-1.5 border-opacity-80 dark:bg-opacity-20 dark:border-opacity-80 bg-accentLight bg-opacity-10 border-accentLight dark:bg-yellow-700 dark:border-yellow-500 hover:bg-opacity-10 hover:shadow-medium dark:hover:bg-yellow-600 dark:hover:text-gray-200"
                  >
                    <FaExternalLinkAlt />
                  </a>
                  <a
                    href="https://github.com/VillalobosLuciano"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 border rounded-lg mb-1.5 border-opacity-80 dark:bg-opacity-20 dark:border-opacity-80 bg-accentLight bg-opacity-10 border-accentLight dark:bg-yellow-700 dark:border-yellow-500 hover:bg-opacity-10 hover:shadow-medium dark:hover:bg-yellow-600 dark:hover:text-gray-200"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">No Projects Yet</div>
        )}
      </div>
      <div className="flex mt-8 mb-4">
        <Link href="/projects">
          <a className="w-full py-2 mx-4 font-semibold text-center border rounded-lg text-primaryLight border-opacity-80 border-accentLight bg-accentLight bg-opacity-10 dark:bg-yellow-700 dark:border-yellow-500 dark:text-gray-300 dark:border-opacity-80 md:hidden dark:bg-opacity-20">
            View all<span aria-hidden="true"> &rarr;</span>
          </a>
        </Link>
      </div>
    </section>
  );
}