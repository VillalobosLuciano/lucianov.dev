import ProseableText from "./ProseableText";

export default function PostBody({ body }) {
  return (
    <div className="max-w-2xl mx-auto">
      <ProseableText blocks={body} />
    </div>
  );
}
