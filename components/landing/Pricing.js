import Link from "next/link";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const offers = {
  monthly: [
    {
      id: 1,
      title: "Starter Monthly",
      message: "",
      price: "49",
      payInterval: "Month",
      responses: "500",
      activeForms: "20",
      link: "",
    },
    {
      id: 2,
      title: "Business Monthly",
      message: "Most Popular",
      price: "99",
      responses: "5 000",
      payInterval: "Month",
      activeForms: "Unlimited",
      link: "",
    },
    {
      id: 3,
      title: "Pro Monthly",
      message: "",
      price: "249",
      responses: "10 000",
      payInterval: "Month",
      activeForms: "Unlimited",
      link: "",
    },
  ],
  annual: [
    {
      id: 1,
      title: "Starter Yearly",
      message: "",
      price: "490",
      payInterval: "Year",
      responses: "500",
      activeForms: "20",
      link: "",
    },

    {
      id: 2,
      title: "Business Yearly",
      message: "Most Popular",
      price: "990",
      payInterval: "Year",
      responses: "5 000",
      activeForms: "Unlimited",
      link: "",
    },

    {
      id: 3,
      title: "Pro Yearly",
      message: "",
      price: "2490",
      payInterval: "Year",
      responses: "10 000",
      activeForms: "Unlimited",
      link: "",
    },
  ],
};

export default function Pricing() {
  const { monthly, annual } = offers;

  const [state, setState] = useState({
    active: "monthly",
    pricingPlan: monthly,
  });

  const handlePricingPlan = (plan) => {
    if (plan === "annual") {
      setState({
        ...state,
        active: "annual",
        pricingPlan: annual,
      });
    } else {
      setState({
        ...state,
        active: "monthly",
        pricingPlan: monthly,
      });
    }
  };

  return (
    <section id="pricing" className="flex flex-col my-24">
      <div className="flex flex-col items-center pb-8">
        <p className="text-2xl text-fireGreen font-bold mb-2">
          Pricing
        </p>
        <p className="text-4xl font-bold text-center">
          Choose Your Pricing Plan
        </p>
        <p class="mt-2 italic">psst! get two months free with a yearly plan!</p>
        <div>
          <div class="flex items-center justify-center pt-4">
            <div
              class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
              role="group"
            >
              <button
                onClick={() => handlePricingPlan("monthly")}
                type="button"
                class={`rounded-l-lg inline-block px-6 py-4 ${
                  state.active == "monthly" ? "bg-fireGreen" : "bg-neutral-500"
                } text-white font-bold text-xs leading-tight uppercase hover:bg-fireGreen focus:bg-fireGreen focus:outline-none focus:ring-0 transition duration-150 ease-in-out`}
              >
                Pay Monthly
              </button>
              <button
                onClick={() => handlePricingPlan("annual")}
                type="button"
                class={`rounded-r-lg inline-block px-6 py-4 ${
                  state.active == "annual" ? "bg-fireGreen" : "bg-neutral-500"
                } text-white font-bold text-xs leading-tight uppercase hover:bg-fireGreen focus:bg-fireGreen focus:outline-none focus:ring-0 transition duration-150 ease-in-out`}
              >
                Pay Yearly
              </button>
            </div>
          </div>
        </div>
      </div>
        {/* pricing cards */}
      <div className="flex flex-col space-y-6 lg:space-y-0 lg:space-x-5 lg:flex-row xl:justify-center items-center mt-4">

        {state.pricingPlan.map((card) => {
          return (
            <div key={card.id}>
              <Link href="https://app.fireforms.io/register">
                <div className="shadow hover:shadow-sm flex flex-col items-center px-14 lg:px-16 py-8 border rounded-3xl hover:scale-105 hover:cursor-pointer">
                  <div className="text-center">
                    <p className="text-3xl font-bold">{card.title}</p>
                    <p className="text-xl py-1 text-fireGreen mt-2 font-bold">
                      {card.message}
                    </p>
                  </div>
                  <div className="flex items-end justify-center py-10">
                    <p className="font-bold text-3xl">€{card.price}</p>
                    <p className="text-xl">/{card.payInterval}</p>
                  </div>
                  <ul className="text-left list-none space-y-3">
                    <li className="flex items-center">
                      <div className="text-fireGreen w-6 mr-2">
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </div>
                      Drag & Drop Builder
                    </li>
                    <li className="flex items-center">
                      <div className="text-fireGreen w-6 mr-2">
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </div>
                      Simple embed on any site
                    </li>
                    <li className="flex items-center">
                      <div className="text-fireGreen w-6 mr-2">
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </div>
                      {card.activeForms} - Active Forms
                    </li>
                    <li className="flex items-center">
                      <div className="text-fireGreen w-6 mr-2">
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </div>
                      {card.responses} - Responses/Mo
                    </li>
                    <li className="flex items-center">
                      <div className="text-fireGreen w-6 mr-2">
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </div>
                      GDPR Complient
                    </li>
                  </ul>
                  <button className="mt-8 bg-fireGreen p-4 rounded-2xl shadow-sm text-white font-bold">
                    Start My 7 Day Free Trial
                  </button>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}