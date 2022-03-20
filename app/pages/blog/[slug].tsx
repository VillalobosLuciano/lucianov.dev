import Head from "next/head";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "@/components/Container";
import PostBody from "@/components/PostBody";
import PostHeader from "@/components/PostHeader";
import PostTitle from "@/components/PostTitle";
import { postQuery, postSlugsQuery } from "@/lib/queries";
import { usePreviewSubscription } from "@/lib/sanity";
import { sanityClient, getClient, overlayDrafts } from "@/lib/sanity.server";
import SectionSeparator from "@/components/SectionSeparator";

export default function Post({ data = {} as any, preview }) {
  const router = useRouter();

  const slug = data?.post?.slug;
  const {
    data: { post, previous, next },
  } = usePreviewSubscription(postQuery, {
    params: { slug },
    initialData: data,
    enabled: preview && slug,
  });

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  console.log("previous", previous?.title);
  console.log("next", next?.title);

  return (
    <Container>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article>
            <Head>
              <title>{post.title}</title>
            </Head>
            <PostHeader
              title={post.title}
              date={post.date}
              author={post.author}
            />
            <PostBody body={post.body} />
          </article>
          <SectionSeparator />
          <div className="flex flex-col justify-between w-full p-4 mt-4 space-y-4 lg:space-y-0 lg:flex-row lg:space-x-6">
            {previous && (
              <div
                onClick={() => router.push(`/blog/${previous?.slug}`)}
                className="flex flex-col w-full p-4 border rounded-md cursor-pointer dark:border-amber-500/30 border-teal-500/30 group dark:hover:border-amber-500/40"
              >
                <span className="block mb-1 text-sm dark:text-amber-500/90 text-teal-600/90 dark:group-hover:text-amber-500">
                  Previous Post →
                </span>
                <p className="transition-colors text-gray-500/80 dark:text-gray-300/80 group-hover:text-gray-500 dark:group-hover:text-gray-300">
                  {previous.title}
                </p>
              </div>
            )}
            {next && (
              <div
                onClick={() => router.push(`/blog/${next?.slug}`)}
                className="flex flex-col w-full p-4 border rounded-md cursor-pointer dark:border-amber-500/30 border-teal-500/30 group dark:hover:border-amber-500/40"
              >
                <span className="block mb-1 text-sm dark:text-amber-500/90 text-teal-600/90 dark:group-hover:text-amber-500">
                  Next Post →
                </span>
                <p className="transition-colors text-gray-500/80 dark:text-gray-300/80 group-hover:text-gray-500 dark:group-hover:text-gray-300">
                  {next.title}
                </p>
              </div>
            )}
          </div>
        </>
      )}
    </Container>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const { post, previous, next } = await getClient(preview).fetch(postQuery, {
    slug: params.slug,
  });

  return {
    props: {
      preview,
      data: {
        post,
        previous,
        next,
      },
    },
  };
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(postSlugsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}
