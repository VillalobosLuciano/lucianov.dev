import Link from "next/link";
import { PortableText } from "@/lib/sanity";
import { parseISO, format } from "date-fns";

export default function PostPreview({ title, date, excerpt, slug, category }) {
  return (
    <div className="px-4 pt-8 xl:grid xl:grid-cols-4 xl:items-baseline">
      <time className="text-base font-medium text-primaryLight dark:text-gray-300">
        {format(parseISO(date), "MMMM dd, yyyy")}
      </time>

      <div className="xl:col-span-3">
        <h3 className="mt-1 text-xl font-semibold leading-8 tracking-tight">
          <Link href={`/blog/${slug}`}>
            <a className="transition-colors duration-300 text-neptune-500 hover:text-neptune-600 dark:text-yellow-500 dark:hover:text-yellow-600">
              {title}
            </a>
          </Link>
        </h3>
        <div className="flex flex-wrap">
          {category.map((tag) => (
            <p
              key={tag._key}
              className="mt-1 mr-3 text-sm font-semibold text-gray-500 uppercase transition cursor-pointer dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-200"
            >
              {tag.category.title}
            </p>
          ))}
        </div>
        <div className="mt-3 max-w-none text-primaryLight dark:text-gray-400 line-clamp-3">
          <PortableText blocks={excerpt} />
        </div>
      </div>
    </div>
  );
}
