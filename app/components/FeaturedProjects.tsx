import Image from "next/image";
import { useRouter } from "next/router";
import { FaGithub, FaLink } from "react-icons/fa";
import { sanityClient } from "../lib/sanity.server";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

export default function Projects({ projects }) {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 p-4 gap-x-12 gap-y-8 md:grid-cols-3">
      {projects.length ? (
        projects.map((project) => (
          <div key={project._id} className="relative">
            <div
              onClick={() => router.push(`/projects/${project.slug}`)}
              className="overflow-hidden bg-gray-100 border border-yellow-900 rounded-lg cursor-pointer group aspect-w-4 aspect-h-3"
            >
              <Image
                className="object-cover object-center transition duration-300 filter grayscale group-hover:grayscale-0"
                src={urlFor(project.mainImage).url()}
                alt={project.projectName}
                layout="fill"
              />
              <div className="absolute inset-0 transition duration-300 bg-yellow-600 bg-opacity-10 mix-blend-multiply group-hover:bg-opacity-0" />
              <div
                className="flex items-end p-2 transition duration-500 ease-in-out opacity-0 group-hover:opacity-95"
                aria-hidden="true"
              >
                <div className="w-full px-4 py-2 text-sm font-semibold tracking-wide text-center text-white bg-black rounded-md bg-opacity-70 backdrop-filter backdrop-blur">
                  View project
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4 space-x-8">
              <div>
                <h3 className="text-base font-semibold tracking-wide text-yellow-500">
                  {project.projectName}
                </h3>
                <p className="text-sm text-gray-300">{project.projectType}</p>
              </div>
              <div className="flex pt-2 space-x-2 text-lg text-gray-300">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 transition-colors bg-yellow-600 rounded-full hover:text-gray-200 bg-opacity-30"
                >
                  <FaLink />
                </a>
                <a
                  href="https://github.com/VillalobosLuciano"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 transition-colors bg-yellow-600 rounded-full hover:text-gray-200 bg-opacity-30"
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
  );
}
