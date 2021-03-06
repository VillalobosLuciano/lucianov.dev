import PostPreview from "@/components/PostPreview";
import Link from "next/link";

export default function LatestPosts({ posts }) {
  return (
    <section className="pb-6 lg:pb-24">
      <p className="px-4 pb-1 mt-2 leading-snug text-gray-400 lg:pb-4">
        This is where I document my learning journey.
      </p>
      <div className="grid grid-cols-1 space-y-10 divide-y divide-teal-600/10 dark:divide-amber-500/10">
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
          <a className="w-full py-2 mx-4 text-base font-semibold text-center border rounded-md text-teal-600/90 dark:border-amber-500/40 border-teal-600/40 dark:text-amber-500/90 md:hidden">
            View all<span aria-hidden="true"> &rarr;</span>
          </a>
        </Link>
      </div>
    </section>
  );
}
