import PostPreview from "@/components/PostPreview";
import Link from "next/link";

export default function LatestPosts({ posts }) {
  return (
    <section>
      <p className="px-4 pb-6 mt-2 leading-snug text-primaryLight dark:text-gray-400 lg:pb-12">
        A place to share, also checkpoints in my learning process.
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
      <div className="flex mt-6 mb-16">
        <Link href="/blog">
          <a className="w-full py-2 mx-4 font-semibold text-center border rounded-full text-neptune-500 border-opacity-80 border-neptune-500 bg-neptune-500 bg-opacity-10 dark:bg-yellow-700 dark:border-yellow-500 dark:text-yellow-500 dark:border-opacity-80 md:hidden dark:bg-opacity-20">
            View all<span aria-hidden="true"> &rarr;</span>
          </a>
        </Link>
      </div>
    </section>
  );
}
