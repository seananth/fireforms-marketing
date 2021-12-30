import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
//sections
import HeroSection from "../components/landing/HeroSection";
import IntegrateSection from "../components/landing/IntegrateSection";
import ImageTextSection from "../components/landing/ImageTextSection";
import FeatureSection from "../components/landing/FeatureSection";

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
          <IntegrateSection />
        </Container>
        <FeatureSection />
        <Container>
          <ImageTextSection />
          <ImageTextSection orderLast />
        </Container>
      </Layout>
    </>
  );
}
