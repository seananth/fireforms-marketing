import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";

export default function Blog({ allPosts }) {
  const morePosts = allPosts;
  return (
    <>
      <Layout>
        <Head>
          <title>Fireforms Blog</title>
        </Head>
        <Container>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
