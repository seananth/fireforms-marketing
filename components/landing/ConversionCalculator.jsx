import { useState } from "react";
import Container from "../container";

export default function ConversionCalculator() {
  const [done, setDone] = useState(false);
  const [answer, setAnswer] = useState({
    visitors: 100000,
    leads: 1000,
    revenue: 10000,
  });

  return (
    <section className="pt-10">
      <div className="bg-fireGreen pb-16 pt-8 flex flex-col">
        <Container>
          <p className="text-center mb-12 text-4xl font-bold text-white">Conversion Rate Makes A Difference!</p>
          <div className="flex flex-col items-center md:items-start md:flex-row md:justify-evenly md:items-center">
            <div className="flex flex-col text-center w-9/12 lg:w-1/4">
              {/* visitors */}
              <div className="my-3 flex flex-col">
                <label
                  htmlFor="traffic"
                  className="text-2xl text-white font-bold"
                >
                  Visitors
                </label>
                <input
                  className="py-3 px-2 rounded-md focus:outline-none w-full"
                  name="traffic"
                  type="number"
                  defaultValue={10000}
                  onChange={(e) =>
                    setAnswer((answer) => ({
                      ...answer,
                      visitors: e.target.value,
                    }))
                  }
                />
              </div>
              {/* leads */}
              <div className="my-3 flex flex-col">
                <label
                  htmlFor="leads"
                  className="text-2xl text-white font-bold"
                >
                  Leads
                </label>
                <input
                  className="py-3 px-2 rounded-md focus:outline-none"
                  name="leads"
                  type="number"
                  defaultValue={1000}
                  onChange={(e) =>
                    setAnswer((answer) => ({
                      ...answer,
                      leads: e.target.value,
                    }))
                  }
                />
              </div>

              {/* revenue */}
              <div className="my-3 flex flex-col">
                <label htmlFor="rev" className="text-2xl text-white font-bold">
                  Revenue
                </label>
                <input
                  className="py-3 px-2 rounded-md focus:outline-none"
                  name="rev"
                  type="number"
                  defaultValue={10000}
                  onChange={(e) =>
                    setAnswer((answer) => ({
                      ...answer,
                      revenue: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
            {/* Info */}
            <div>
              <div className="mb-4 md:mb-2">
                <p className="text-3xl text-white font-bold border-b-2 mb-2">
                  Before FireForms
                </p>
                <p className="text-2xl text-white font-bold">
                  conversion rate:{" "}
                  {((answer.leads / answer.visitors) * 100).toFixed(2)}%
                </p>
                <p className="text-2xl text-white font-bold">
                  Leads: {answer.leads}
                </p>
                <p className="text-2xl text-white font-bold">
                  Total Revenue: ${answer.revenue}
                </p>
                {/* <p className="text-2xl text-white font-bold">
                  Revenue per Lead: ${Math.round(answer.revenue / answer.leads)}
                </p> */}
              </div>
              <div>
                <p className="text-3xl text-white font-bold border-b-2 mb-2">
                  Using FireForms
                </p>

                <p className="text-2xl text-white font-bold">
                  conversion rate:{" "}
                  {((answer.leads / answer.visitors) * 100 * 1.5).toFixed(2)}%
                </p>
                <p className="text-2xl text-white font-bold">
                  Leads: {answer.leads * 1.5}
                  <span className="text-sm text-success">
                    {" "}
                    + {answer.leads * 1.5 - answer.leads}
                  </span>
                </p>
                <p className="text-2xl text-white font-bold">
                  Total Revenue: $
                  {(answer.revenue / answer.leads) * (answer.leads * 1.5)}
                  <span className="text-sm text-success">
                    {" "}
                    +{" "}
                    {(answer.revenue / answer.leads) * (answer.leads * 1.5) -
                      answer.revenue}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
