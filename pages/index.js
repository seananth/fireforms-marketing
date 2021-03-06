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
import ConversionCalculator from "../components/landing/ConversionCalculator";

export default function index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Fireforms</title>
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
        <ConversionCalculator />
        <Container>
          <Pricing />
        </Container>
          <ContactSection formID="61d94a09d16a3d73bf17ca41" />
        <BlogSection />
        {/* <ContactSection formID="619a849148859cdd82152a84" /> */}
      </Layout>
    </>
  );
}
