import ProseableText from "./ProseableText";

export default function PostBody({ body }) {
  return (
    <div className="mb-12 lg:mt-2">
      <ProseableText blocks={body} />
    </div>
  );
}
