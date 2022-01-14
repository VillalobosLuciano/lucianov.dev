import { PortableText } from "@/lib/sanity";
import ProseableText from "./ProseableText";

export default function ProjectHighlights({ highlights }) {
  return (
    <>
      <h1 className="px-4 pt-12 pb-4 text-3xl font-semibold leading-9 tracking-tight md:leading-14 text-neptune-500 dark:text-gray-300 sm:leading-10">
        Highlights
      </h1>
      <ProseableText>
        <PortableText blocks={highlights} />
      </ProseableText>
    </>
  );
}
