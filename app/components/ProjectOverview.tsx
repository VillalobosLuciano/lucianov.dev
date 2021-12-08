import ProseableText from "./ProseableText";

export default function ProjectOverview({ overview }) {
  return (
    <div className="lg:-space-y-1">
      <h1 className="mx-4 mt-8 text-2xl text-gray-900 lg:mt-14 font-semiboldtracking-tight dark:text-white">
        Project Overview
      </h1>
      <ProseableText blocks={overview} />
    </div>
  );
}
