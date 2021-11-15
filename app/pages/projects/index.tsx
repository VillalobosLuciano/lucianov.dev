import Head from "next/head";
import { indexQuery } from "@/lib/queries";
import { getClient } from "@/lib/sanity.server";
import Layout from "@/components/Layout";
import Container from "@/components/Container";
import FeaturedProjects from "@/components/FeaturedProjects";
import ProjectPreview from "../../components/ProjectPreview";

export default function Index({ projects, preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Luciano&apos;s Digital Space</title>
        </Head>
        <Container>
          <div className="px-4 py-16 mx-auto overflow-hidden sm:py-24">
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 xl:grid-cols-3 lg:gap-x-8">
              {projects.length ? (
                projects.map((project) => (
                  <ProjectPreview
                    key={project._id}
                    slug={project.slug}
                    mainImage={project.mainImage}
                    projectName={project.projectName}
                    projectType={project.projectType}
                  />
                ))
              ) : (
                <div className="text-center">No Projects Yet</div>
              )}
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
      projects: data.projects,
    },
  };
}
