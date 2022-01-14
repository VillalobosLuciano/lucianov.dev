import { PortableText } from "@/lib/sanity";
import ProseableText from "./ProseableText";

export default function PostBody({ body }) {
  return (
    <ProseableText>
      <div className="pt-2 pb-12 lg:pb-20">
        <PortableText blocks={body} />
      </div>
    </ProseableText>
  );
}
