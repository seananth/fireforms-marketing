import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import leadGenImage from "../public/assets/examples/lead-gen-example.png";
import supplierImage from "../public/assets/examples/supplier-example.png";
import agencyImage from "../public/assets/examples/web-agency-example.png";

//components
import { ExampleCard } from "../components/examples/ExampleCard";

const exampleData = [
  {
    preview: leadGenImage,
    title: "Lead generation",
    // body: "Modern lead capture form",
    link: "/",
  },
  {
    preview: supplierImage,
    title: "Supplier",
    // body: "Make ordering supplies a lot easier",
    link: "/",
  },
  {
    preview: agencyImage,
    title: "Margeting Agency",
    // body: "Learn more about your clients and what their houseing needs are",
    link: "/",
  },
];

export default function Examples() {
  return (
    <Layout>
      <Head>
        <title>Multi step form examples</title>
      </Head>
      <Container>
        <div className="bg-fireGreen p-12 mt-2 mb-10 text-white">
          <p className="pt-8 text-4xl font-bold">Form Examples</p>
          <p className="pb-8 text-2xl font-medium">
            Dont feel like starting from scratch? <br /> Choose from our many
            templates and edit them as you'd like
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {exampleData.map((item) => {
            return (
              <ExampleCard
                preview={item.preview}
                title={item.title}
                body={item.body}
              />
            );
          })}
        </div>
        <p className="pb-8 text-2xl text-center">
          Coming soon..
        </p>
      </Container>
    </Layout>
  );
}
