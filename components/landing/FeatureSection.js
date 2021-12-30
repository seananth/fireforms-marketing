import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FeatureSection() {
  const data = [
    {
      icon: faChartLine,
      title: "More leads",
      sub: "Fireforms was built with conversion rate in mind. Multi-step forms convert up to 2 times higher!",
    },
    {
      icon: faCode,
      title: "No code",
      sub: "Hiring developers is expensive and time consuming, with Fireforms we've done the hard work for you.",
    },
    {
      icon: faHeadset,
      title: "Friendly support",
      sub: "Our support team is ready to help you in any way to make sure you get the most out of Fireforms!",
    },
  ];

  return (
    <section className="pt-10">
      <div className="bg-fireGreen flex flex-col xl:flex-row xl:space-x-32 justify-center items-center">
        {data.map((feature, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center text-center text-white max-w-md py-28 px-8"
            >
              <div className="w-24 flex justify-center mb-2">
                <FontAwesomeIcon icon={feature.icon} />
              </div>
              <p className="text-2xl font-bold py-2">{feature.title}</p>
              <p className="text-xl">{feature.sub}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
