import { PortableText } from "@/lib/sanity";
import ProseableText from "./ProseableText";

export default function ProjectFeatures({ features }) {
  return (
    <>
      <h1 className="px-4 pt-12 pb-4 text-3xl font-semibold leading-9 tracking-tight text-gray-500 md:leading-14 dark:text-gray-300 sm:leading-10">
        Features
      </h1>
      <ProseableText>
        <PortableText blocks={features} />
      </ProseableText>
    </>
  );
}
