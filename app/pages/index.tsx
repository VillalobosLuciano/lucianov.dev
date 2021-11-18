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
  const featuredProjects = projects.slice(0, 3);
  const latestPosts = posts.slice(0, 2);

  console.log("aeeer", posts[0]);

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
          {featuredProjects.length > 0 && (
            <FeaturedProjects projects={featuredProjects} />
          )}
          <SectionTitle title="Latest Posts" href="/blog" />
          {latestPosts.length > 0 && <LatestPosts posts={latestPosts} />}
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
