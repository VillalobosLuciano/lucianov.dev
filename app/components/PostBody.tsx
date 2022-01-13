import { PortableText } from "@/lib/sanity";
import ProseableText from "./ProseableText";

export default function PostBody({ body }) {
  return (
    <ProseableText>
      <PortableText blocks={body} />
    </ProseableText>
  );
}
