import PostPreview from "@/components/PostPreview";
import Link from "next/link";

export default function LatestPosts({ posts }) {
  return (
    <section>
      <p className="px-4 pb-1 mt-2 leading-snug text-primaryLight dark:text-gray-400 lg:pb-4">
        A place to share, also checkpoints in my learning process.
      </p>
      <div className="grid grid-cols-1 space-y-10 divide-y divide-gray-200 divide-dashed dark:divide-gray-700">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
            category={post.category}
          />
        ))}
      </div>
      <div className="flex mt-12 mb-16 sm:hidden">
        <Link href="/blog">
          <a className="w-full py-2 mx-4 font-semibold text-center border rounded-2xl text-neptune-500 border-opacity-80 border-neptune-500 bg-neptune-500 bg-opacity-10 dark:bg-yellow-700 dark:border-yellow-500 dark:text-yellow-500 dark:border-opacity-80 md:hidden dark:bg-opacity-20">
            View all<span aria-hidden="true"> &rarr;</span>
          </a>
        </Link>
      </div>
    </section>
  );
}
