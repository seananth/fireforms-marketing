import Image from "next/image";

export default function FeatureSection() {
  const data = [
    {
      icon: "icon",
      title: "More leads",
      sub: "Fireforms was built with conversion rate in mind. Multi-step forms convert up to 2 times higher!",
    },
    {
      icon: "icon",
      title: "No code",
      sub: "Hiring developers is expensive and time consuming, with fireforms we've done the hard work for you.",
    },
    {
      icon: "icon",
      title: "Friendly support",
      sub: "Our support team is ready to help you in any way to make sure you get the most out of Fireforms!",
    },
  ];

  return (
    <section className="pt-40">
      <div className="bg-fireGreen flex flex-col xl:flex-row xl:space-x-32 justify-center items-center">
        {data.map((feature) => {
          return (
            <div className="text-center text-white max-w-md py-32 px-8">
              <p>{feature.icon}</p>
              <p className="text-2xl font-bold py-2">{feature.title}</p>
              <p className="text-xl">{feature.sub}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// absolute left-0 right-0
