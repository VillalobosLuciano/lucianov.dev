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

export default function Index({ about, projects, posts, technologies }) {
  const featuredProjects = projects.slice(0, 3);
  const latestPosts = posts.slice(0, 2);

  return (
    <>
      <Head>
        <title>Luciano&apos;s Digital Space</title>
      </Head>
      <Container>
        <Intro about={about} />

        <Technologies technologies={technologies} />

        <div className="pt-3 pb-4 lg:pt-4 lg:pb-7">
          <SectionTitle title="Featured projects" href="/projects" />
          {featuredProjects.length > 0 && (
            <FeaturedProjects projects={featuredProjects} />
          )}
        </div>
        <SectionTitle title="Latest posts" href="/blog" />
        {latestPosts.length > 0 && <LatestPosts posts={latestPosts} />}
      </Container>
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
