import { PortableText } from "@/lib/sanity";
import ProseableText from "./ProseableText";

export default function ProjectOverview({ overview }) {
  return (
    <>
      <h1 className="px-4 pt-5 pb-4 text-3xl font-semibold leading-9 tracking-tight lg:pt-10 md:leading-14 text-neptune-500 dark:text-gray-300 sm:leading-10">
        Project overview
      </h1>
      <ProseableText>
        <PortableText blocks={overview} />
      </ProseableText>
    </>
  );
}
