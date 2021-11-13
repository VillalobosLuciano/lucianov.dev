import Link from "next/link";
export default function SectionTitle({ title, href }) {
  return (
    <div className="flex justify-between px-4 pt-20 space-x-4 lg:pt-24">
      <h2 className="text-3xl font-extrabold tracking-tight text-neptune-500 dark:text-gray-100 md:mx-0 sm:text-4xl">
        {title}
      </h2>
      <h3 className="hidden font-medium text-yellow-500 transition duration-300 md:block whitespace-nowrap hover:text-yellow-600">
        <Link href={href}>
          <a>
            View all<span aria-hidden="true"> &rarr;</span>
          </a>
        </Link>
      </h3>
    </div>
  );
}
