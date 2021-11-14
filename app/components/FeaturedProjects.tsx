import Image from "next/image";
import { useRouter } from "next/router";
import { FaGithub, FaLink } from "react-icons/fa";
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
      <p className="px-4 pb-4 mt-2 leading-snug text-primaryLight dark:text-gray-400 lg:pb-12">
        Real projects that I developed for learning, for friends, for free, for
        fun.
      </p>

      <div className="">
        <div className="flex overflow-x-auto md:overflow-hidden hide-scroll-bar">
          <div className="flex m-4 space-x-10 md:space-x-12 flex-nowrap">
            {projects.length ? (
              projects.map((project) => (
                <div key={project._id} className="inline-block">
                  <div className="w-64 h-full max-w-xs overflow-hidden">
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
                    </div>
                    <div className="flex items-center justify-between mx-1 mt-3 space-x-8">
                      <div>
                        <h3
                          className="text-base font-semibold transition duration-300 cursor-pointer text-neptune-500 hover:text-neptune-600 dark:text-yellow-500 dark:hover:text-yellow-600"
                          onClick={() =>
                            router.push(`/projects/${project.slug}`)
                          }
                        >
                          {project.projectName}
                        </h3>
                        <p className="text-md text-primaryLight dark:text-gray-300">
                          {project.projectType}
                        </p>
                      </div>
                      <div className="flex pt-2 space-x-2 text-lg text-gray-400 dark:text-gray-300 md:space-x-2">
                        <a
                          href=""
                          target="_blank"
                          rel="noreferrer"
                          className="
                          p-2 
                          border 
                          rounded-xl 
                          mb-1.5 
                          dark:bg-opacity-20 
                          dark:border-opacity-60 
                          dark:bg-yellow-900 
                          dark:border-yellow-500 
                          dark:hover:bg-opacity-30 
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
                          href="https://github.com/VillalobosLuciano"
                          target="_blank"
                          rel="noreferrer"
                          className="
                          p-2 
                          border 
                          rounded-xl 
                          mb-1.5 
                          dark:bg-opacity-20 
                          dark:border-opacity-60 
                          dark:bg-yellow-900 
                          dark:border-yellow-500 
                          dark:hover:bg-opacity-30 
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
              ))
            ) : (
              <div className="text-center">No Projects Yet</div>
            )}
          </div>
        </div>
      </div>

      <div className="flex mt-6 mb-4">
        <Link href="/projects">
          <a className="w-full py-2 mx-4 font-semibold text-center border rounded-2xl text-neptune-500 border-opacity-80 border-neptune-500 bg-neptune-500 bg-opacity-10 dark:bg-yellow-700 dark:border-yellow-500 dark:text-yellow-500 dark:border-opacity-80 md:hidden dark:bg-opacity-20">
            View all<span aria-hidden="true"> &rarr;</span>
          </a>
        </Link>
      </div>
    </section>
  );
}
