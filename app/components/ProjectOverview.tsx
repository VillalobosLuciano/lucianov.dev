import { PortableText } from "@/lib/sanity";

export default function ProjectOverview({ overview }) {
  return (
    <div className="lg:-space-y-1">
      <h1 className="mx-4 mt-8 text-2xl font-thin text-gray-900 lg:mt-14 dark:text-gray-200">
        Project Overview
      </h1>
      <PortableText blocks={overview} />
    </div>
  );
}
