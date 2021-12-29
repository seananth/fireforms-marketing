import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";

import HeroSection from "../components/landing/HeroSection";

export default function Blog({ allPosts }) {
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1);
  const morePosts = allPosts;
  return (
    <>
      <Layout>
        <Head>
          <title>Fireforms Blog</title>
        </Head>
        <Container>
          <HeroSection />
        </Container>
      </Layout>
    </>
  );
}
