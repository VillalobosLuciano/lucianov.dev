import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "@/lib/sanity.server";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

export default function Avatar({ name, image }) {
  return (
    <div className="flex items-center">
      <div className="relative w-6 h-6 mr-2">
        <Image
          src={urlFor(image).url()}
          layout="fill"
          className="rounded-full"
          alt={name}
        />
      </div>
      <div className="text-sm text-primaryLight dark:text-gray-100">
        {name}{" "}
        <span className="text-opacity-30 text-neptune-500 dark:text-yellow-500 dark:text-opacity-30 pl-1.5 pr-2">
          |
        </span>
      </div>
    </div>
  );
}
