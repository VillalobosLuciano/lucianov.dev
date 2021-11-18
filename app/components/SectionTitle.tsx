import Link from "next/link";
export default function SectionTitle({ title, href }) {
  return (
    <>
      <hr className="w-8 mt-20 mb-2 ml-4 border-2 lg:mt-32 border-opacity-30 border-neptune-500 dark:border-yellow-500 dark:border-opacity-30" />
      <div className="flex justify-between px-4 space-x-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-neptune-500 dark:text-gray-100 md:mx-0 sm:text-4xl">
          {title}
        </h2>
        <h3 className="hidden font-semibold transition duration-300 text-neptune-500 hover:text-neptune-600 dark:text-yellow-500 md:block whitespace-nowrap dark:hover:text-yellow-600">
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
