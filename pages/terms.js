import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
//sections
import TermsOfService from "../components/landing/TermsOfService";

export default function terms() {
  return (
    <>
      <Layout>
        <Head>
          <title>Terms of Service</title>
        </Head>
        <Container>
          <TermsOfService />
        </Container>
      </Layout>
    </>
  );
}
