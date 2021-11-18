import Head from "next/head";
import { indexQuery } from "@/lib/queries";
import { getClient } from "@/lib/sanity.server";
import Layout from "@/components/Layout";
import Container from "@/components/Container";
import PostPreview from "../../components/PostPreview";

export default function Index({ posts, preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Luciano&apos;s Digital Space</title>
        </Head>
        <Container>
          <div className="py-16 mx-auto overflow-hidden sm:py-24">
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
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const data = await getClient(preview).fetch(indexQuery);
  return {
    props: {
      preview,
      posts: data.posts,
    },
  };
}
