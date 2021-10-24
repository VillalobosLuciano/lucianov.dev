import Link from "next/link";
export default function SectionTitle({ title, href }) {
  return (
    <div className="flex items-center justify-between px-4 mb-4 space-x-4 lg:pb-10 lg:pt-32">
      <h2 className="text-3xl font-extrabold text-gray-100 sm:text-4xl">
        {title}
      </h2>
      <h3 className="font-medium text-yellow-500 whitespace-nowrap hover:text-yellow-600">
        <Link href={href}>
          <a className="hover:underline">
            View all<span aria-hidden="true"> &rarr;</span>
          </a>
        </Link>
      </h3>
    </div>
  );
}
