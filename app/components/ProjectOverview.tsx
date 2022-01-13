import { PortableText } from "@/lib/sanity";
import ProseableText from "./ProseableText";

export default function ProjectOverview({ overview }) {
  return (
    <>
      <h1 className="pb-4 mx-4 mt-8 text-2xl font-thin text-gray-900 lg:mt-12 dark:text-gray-200">
        Project Overview
      </h1>
      <ProseableText>
        <PortableText blocks={overview} />
      </ProseableText>
    </>
  );
}
