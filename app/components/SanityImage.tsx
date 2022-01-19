import Image from "next/image";
import { useState, useEffect } from "react";
import clsx from "clsx";
import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "@/lib/sanity.server";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const filters = [
  {
    name: "blur",
    loading: "blur-2xl scale-110",
    loaded: "blur-0 scale-100",
  },
  {
    name: "grayscale",
    loading: "grayscale blur-2xl scale-110",
    loaded: "grayscale-0 blur-0 scale-100",
  },
  {
    name: "hue-rotate",
    loading: "hue-rotate-90 blur-2xl scale-110",
    loaded: "hue-rotate-0 blur-0 scale-100",
  },
];

export default function SanityImage(props) {
  const [isLoading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState(filters[0]);

  useEffect(() => {
    const filter = filters.find((f) => f.name === props.placeholderFilter);
    if (filter) {
      setSelectedFilter(filter);
    }
  }, [props.placeholderFilter]);

  return (
    <>
      <Image
        src={urlFor(props.src).url()}
        alt={props.alt}
        className={clsx(
          props.className,
          "duration-300 ease-in-out",
          isLoading ? selectedFilter.loading : selectedFilter.loaded
        )}
        layout="fill"
        onLoadingComplete={() => setLoading(false)}
      />
    </>
  );
}
