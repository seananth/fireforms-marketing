import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
//sections
import HeroSection from "../components/landing/HeroSection";
import IntegrateSection from "../components/landing/IntegrateSection";
import ImageTextSection from "../components/landing/ImageTextSection";
import FeatureSection from "../components/landing/FeatureSection";
import Pricing from "../components/landing/Pricing";
import ContactSection from "../components/landing/ContactSection";
import BlogSection from "../components/landing/BlogSection";

export default function index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Fireforms - How it Works</title>
        </Head>
        <Container>
            <h1>You dont need to be a developer to build multi step forms!</h1>
        </Container>
      </Layout>
    </>
  );
}
