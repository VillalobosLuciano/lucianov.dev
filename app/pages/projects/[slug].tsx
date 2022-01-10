import Head from "next/head";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "@/components/Container";
import PostTitle from "@/components/PostTitle";
import { projectQuery, projectSlugsQuery } from "@/lib/queries";
import { usePreviewSubscription } from "@/lib/sanity";
import { sanityClient, getClient, overlayDrafts } from "@/lib/sanity.server";
import ProjectHeader from "@/components/ProjectHeader";
import ProjectOverview from "@/components/ProjectOverview";
import ProjectDependencies from "@/components/ProjectDependencies";
import ProjectHighlights from "@/components/ProjectHighlights";

export default function Post({ data = {} as any, preview }) {
  const getTechs = (techs) => {
    return techs.map((tech) => {
      return {
        name: tech.name,
        image: tech.image,
      };
    });
  };

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
    <Container>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article>
            <Head>
              <title>{project.title}</title>
            </Head>
            <ProjectHeader
              projectName={project.projectName}
              projectType={project.projectType}
              mainImage={project.mainImage}
              website={project.link}
              code={project.source}
            />
            <ProjectOverview overview={project.overview} />
            <ProjectHighlights highlights={project.highlights} />
            <ProjectDependencies
              code={project.dependencies[0].code}
              technologies={project.tech}
            />
          </article>
          {/* <SectionSeparator /> */}
          {/* {moreProjects.length > 0 && (
              <FeaturedProjects projects={moreProjects} />
            )} */}
        </>
      )}
    </Container>
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
