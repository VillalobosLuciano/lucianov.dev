import { useRouter } from "next/router";
import { FaGithub, FaLink } from "react-icons/fa";
import clsx from "clsx";
import SanityImage from "./SanityImage";
import IconButton from "./IconButton";

export default function ProjectPreview({
  slug,
  mainImage,
  projectName,
  projectDescription,
  projectType,
  website,
  scrollX,
  source,
}) {
  const router = useRouter();
  return (
    <div className="inline-block snap-center">
      <div
        className={clsx("overflow-hidden", {
          "w-[295px] lg:w-full": scrollX === "true",
          "w-full": scrollX === "false",
        })}
      >
        <div
          onClick={() => router.push(`/projects/${slug}`)}
          className="overflow-hidden border rounded-md cursor-pointer dark:border-amber-500/20 border-bgAccentLight group aspect-w-4 aspect-h-3"
        >
          <SanityImage
            src={mainImage}
            className="object-contain object-center w-full filter grayscale group-hover:grayscale-0"
          />
        </div>
        <div className="flex items-end justify-between mx-0.5 mt-3">
          <div className="-space-y-0.5">
            <h3
              className="text-lg font-semibold leading-snug transition duration-300 cursor-pointer text-neptune-500 hover:text-neptune-600 dark:text-amber-500/90 dark:hover:text-amber-500"
              onClick={() => router.push(`/projects/${slug}`)}
            >
              {projectName}
            </h3>
            <p className="text-base font-thin leading-snug text-primaryLight dark:text-gray-400">
              {projectType}
            </p>
          </div>
          <div className="flex space-x-2 text-lg text-gray-400 dark:text-gray-300">
            <IconButton href={website}>
              <FaLink className="w-5 h-5" />
            </IconButton>
            <IconButton href={source}>
              <FaGithub className="w-5 h-5" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
