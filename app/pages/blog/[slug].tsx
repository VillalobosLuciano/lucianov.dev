import Head from "next/head";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "@/components/Container";
import PostBody from "@/components/PostBody";
import LatestsPosts from "@/components/LatestPosts";
import PostHeader from "@/components/PostHeader";
import SectionSeparator from "@/components/SectionSeparator";
import Layout from "@/components/Layout";
import PostTitle from "@/components/PostTitle";
import { postQuery, postSlugsQuery } from "@/lib/queries";
import { usePreviewSubscription } from "@/lib/sanity";
import { sanityClient, getClient, overlayDrafts } from "@/lib/sanity.server";

export default function Post({ data = {} as any, preview }) {
  const router = useRouter();

  const slug = data?.post?.slug;
  const {
    data: { post, morePosts },
  } = usePreviewSubscription(postQuery, {
    params: { slug },
    initialData: data,
    enabled: preview && slug,
  });

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{post.title} | Next.js Blog Example with Sanity</title>
              </Head>
              <PostHeader
                title={post.title}
                date={post.date}
                author={post.author}
              />
              <PostBody body={post.body} />
            </article>
            <SectionSeparator />
            {morePosts.length > 0 && <LatestsPosts posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const { post, morePosts } = await getClient(preview).fetch(postQuery, {
    slug: params.slug,
  });

  return {
    props: {
      preview,
      data: {
        post,
        morePosts: overlayDrafts(morePosts),
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
