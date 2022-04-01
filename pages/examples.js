import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import image from "../public/assets/examples/lead-gen-example.png";

//components
import { ExampleCard } from "../components/examples/ExampleCard";

export default function Examples() {
  return (
    <Layout>
      <Head>
        <title>Fireforms</title>
      </Head>
      <Container>
        <p className="py-8 text-4xl text-center">Templates</p>
        <div className="grid grid-cols-3 gap-8">
          <ExampleCard
            preview={image}
            title="Lead gen"
            body="Modern lead capture form"
          />
          <ExampleCard
            preview={image}
            title="Window cleaner"
            body="Booking form for window cleaning businesses"
          />
          <ExampleCard
            preview={image}
            title="Real estate"
            body="Learn more about your clients and what their houseing needs are"
          />
          <ExampleCard
            preview={image}
            title="Lead gen"
            body="Modern lead capture form"
          />
          <ExampleCard
            preview={image}
            title="Window cleaner"
            body="Booking form for window cleaning businesses"
          />
          <ExampleCard
            preview={image}
            title="Real estate"
            body="Learn more about your clients and what their houseing needs are"
          />
        </div>
      </Container>
    </Layout>
  );
}
