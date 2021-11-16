import ProseableText from "./ProseableText";

export default function PostBody({ body }) {
  return (
    <div className="mb-12">
      <ProseableText blocks={body} />
    </div>
  );
}
