import PostPreview from "@/components/PostPreview";
import Link from "next/link";

export default function LatestPosts({ posts }) {
  return (
    <section>
      <p className="px-4 pb-6 mt-2 leading-snug tracking-wide text-gray-500 dark:text-gray-400 lg:pb-12">
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
      <div className="flex mt-10 mb-24">
        <Link href="/blog">
          <a className="w-full py-2 mx-4 font-semibold text-center text-gray-300 transition-opacity bg-yellow-700 border border-yellow-500 border-opacity-50 rounded-lg md:hidden hover:bg-opacity-10 bg-opacity-20 hover:shadow-medium hover:bg-yellow-600 hover:text-gray-200">
            View all<span aria-hidden="true"> &rarr;</span>
          </a>
        </Link>
      </div>
    </section>
  );
}
