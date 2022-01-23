import Link from "next/link";
export default function SectionTitle({ title, href }) {
  return (
    <>
      <hr className="w-6 mt-20 mb-2 ml-4 border-2 lg:mt-28 border-teal-500/30 dark:border-amber-500/30" />
      <div className="flex items-center justify-between px-4 space-x-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-500/90 dark:text-gray-300 md:mx-0 sm:text-4xl">
          {title}
        </h2>
        <h3 className="hidden font-semibold transition duration-300 text-teal-500/90 hover:text-teal-500 dark:text-amber-500/90 md:block whitespace-nowrap dark:hover:text-amber-500">
          <Link href={href}>
            <a>
              View all<span aria-hidden="true"> &rarr;</span>
            </a>
          </Link>
        </h3>
      </div>
    </>
  );
}
