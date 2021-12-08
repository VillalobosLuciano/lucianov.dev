import ProseableText from "./ProseableText";

export default function ProjectHighlights({ highlights }) {
  return (
    <div className="">
      <h1 className="mx-4 mt-6 text-2xl text-gray-900 lg:mt-12 font-semiboldtracking-tight dark:text-white">
        Highlights
      </h1>
      <ProseableText blocks={highlights} />
    </div>
  );
}
