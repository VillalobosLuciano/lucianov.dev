import Head from "next/head";
import LatestPosts from "@/components/LatestPosts";
import FeaturedProjects from "@/components/FeaturedProjects";
import { indexQuery } from "../lib/queries";
import { getClient, overlayDrafts } from "../lib/sanity.server";
import Layout from "../components/Layout";
import Container from "@/components/Container";
import Technologies from "../components/Technologies";
import Intro from "../components/Intro";
import SectionTitle from "@/components/SectionTitle";

export default function Index({
  about,
  projects,
  posts,
  technologies,
  preview,
}) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Luciano&apos;s Digital Space</title>
        </Head>
        <Container>
          <Intro about={about} />
          <Technologies technologies={technologies} />
          <SectionTitle title="Featured Projects" href="/projects" />
          <FeaturedProjects projects={projects} />
          <SectionTitle title="Latest Posts" href="/blog" />
          <LatestPosts posts={posts} />
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
      about: data.about,
      projects: data.projects,
      posts: data.posts,
      technologies: data.technologies,
    },
  };
}
