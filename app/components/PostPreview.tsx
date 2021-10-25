import Date from "@/components/Date";
import { useRouter } from "next/router";
import Link from "next/link";
import { PortableText } from "@/lib/sanity";

export default function PostPreview({ title, date, excerpt, slug }) {
  const router = useRouter();
  return (
    <div
      className="p-4 transition duration-300 ease-in-out cursor-pointer hover:shadow-medium group"
      onClick={() => router.push(`/blog/${slug}`)}
    >
      <Date dateString={date} />
      <div className="mt-1">
        <h3 className="text-xl font-semibold text-yellow-500 transition-colors duration-300 group-hover:text-yellow-600">
          <Link href={`/blog/${slug}`}>
            <a>{title}</a>
          </Link>
        </h3>
        <div className="pt-3 text-gray-400 line-clamp-4">
          <PortableText blocks={excerpt} />
        </div>
      </div>
    </div>
  );
}
