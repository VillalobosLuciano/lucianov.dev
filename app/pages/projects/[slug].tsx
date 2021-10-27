import Head from "next/head";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "@/components/Container";
import PostBody from "@/components/PostBody";
import SectionSeparator from "@/components/SectionSeparator";
import Layout from "@/components/Layout";
import PostTitle from "@/components/PostTitle";
import { projectQuery, projectSlugsQuery } from "@/lib/queries";
import { usePreviewSubscription } from "@/lib/sanity";
import { sanityClient, getClient, overlayDrafts } from "@/lib/sanity.server";
import FeaturedProjects from "@/components/FeaturedProjects";

export default function Post({ data = {} as any, preview }) {
  const router = useRouter();

  const slug = data?.project?.slug;
  const {
    data: { project, moreProjects },
  } = usePreviewSubscription(projectQuery, {
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
                <title>
                  {project.title} | Next.js Blog Example with Sanity
                </title>
              </Head>
              <header className="mt-12 mb-3">
                <div className="pb-12 space-y-1 text-center border-b border-gray-700">
                  <div>
                    <h1 className="max-w-3xl pt-1 mx-auto text-3xl font-extrabold leading-9 text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                      {project.projectName}
                    </h1>
                  </div>
                </div>
              </header>
              <PostBody body={project.content} />
            </article>
            <SectionSeparator />
            {moreProjects.length > 0 && (
              <FeaturedProjects projects={moreProjects} />
            )}
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const { project, moreProjects } = await getClient(preview).fetch(
    projectQuery,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      preview,
      data: {
        project,
        moreProjects: overlayDrafts(moreProjects),
      },
    },
  };
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(projectSlugsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}
