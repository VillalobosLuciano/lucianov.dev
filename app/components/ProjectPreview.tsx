import { useRouter } from "next/router";
import { FaGithub, FaLink } from "react-icons/fa";
import clsx from "clsx";
import SanityImage from "./SanityImage";
import IconButton from "./IconButton";
import { hotjar } from "react-hotjar";

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

  const handleClick = () => {
    hotjar.event(`${projectName} y wea`);
    router.push(`/projects/${slug}`);
  };

  return (
    <div className="inline-block snap-center">
      <div
        className={clsx("overflow-hidden", {
          "w-[295px] lg:w-full": scrollX === "true",
          "w-full": scrollX === "false",
        })}
      >
        <div
          onClick={handleClick}
          className="relative overflow-hidden border rounded-md cursor-pointer dark:border-amber-500/20 border-teal-600/20 group aspect-4/3"
        >
          <SanityImage
            src={mainImage}
            className="object-contain object-center w-full filter grayscale group-hover:grayscale-0"
          />
        </div>
        <div className="flex items-end justify-between mx-0.5 mt-3">
          <div className="-space-y-0.5">
            <h3
              className="text-lg font-semibold leading-snug transition duration-300 cursor-pointer text-teal-600/90 hover:text-teal-600 dark:text-amber-500/90 dark:hover:text-amber-500"
              onClick={() => router.push(`/projects/${slug}`)}
            >
              {projectName}
            </h3>
            <p className="text-base font-thin leading-snug text-gray-400">
              {projectType}
            </p>
          </div>
          <div className="flex space-x-2">
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
    </div>
  );
}
