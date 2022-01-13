import { PortableText } from "@/lib/sanity";
import ProseableText from "./ProseableText";

export default function ProjectHighlights({ highlights }) {
  return (
    <>
      <h1 className="pb-4 mx-4 mt-6 text-2xl text-gray-900 lg:mt-12 font-semiboldtracking-tight dark:text-gray-200">
        Highlights
      </h1>
      <ProseableText>
        <PortableText blocks={highlights} />
      </ProseableText>
    </>
  );
}
