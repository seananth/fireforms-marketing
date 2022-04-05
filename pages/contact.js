import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import Script from "next/script";

export default function terms() {

  return (
    <>
      <Layout>
        <Head>
          <title>Contact</title>
        </Head>
        <Container>
          <section className="pt-8">
            {/* fireform goes here */}
            <div id="fireformsId" name="619a4acbd5e2a7aee408e17c"></div>
            <Script
              id="fireforms-script"
              src="https://app.fireforms.io/embed/Fireforms"
            />
            {/* end form */}
          </section>
        </Container>
      </Layout>
    </>
  );
}
