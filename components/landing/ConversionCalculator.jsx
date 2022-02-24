import { useState } from "react";
import Container from "../container";

export default function ConversionCalculator() {
  const [done, setDone] = useState(false);
  const [answer, setAnswer] = useState({
    visitors: 100000,
    leads: 100,
    revenue: 10000,
  });

  const handleResult = (e) => {
    e.preventDefault();
    if (done === false) {
      setDone(true);
    } else {
      setDone(false);
      setAnswer((answer) => ({
        visitors: 100000,
        leads: 100,
        revenue: 10000,
      }));
    }
  };

  return (
    <section className="pt-10">
      <div className="bg-fireGreen pb-12 pt-8 flex flex-col">
        <Container>
          {done === false ? (
            <>
              <p className="text-center text-4xl font-bold text-white">
                Get The Most Out Of Your Forms!
              </p>
              <p className="text-center mb-4 text-xl font-bold text-white">
                You wouldn't go fishing with a broken net, right?
              </p>
            </>
          ) : null}
          <div className="flex flex-col items-center md:items-start md:flex-row md:justify-evenly md:items-center">
            {done === false ? (
              <div className="flex flex-col text-center w-9/12 md:w-1/3 lg:w-1/4">
                {/* visitors */}
                <div className="my-2 flex flex-col">
                  <label
                    htmlFor="traffic"
                    className="text-2xl text-white font-bold"
                  >
                    Visitors
                  </label>
                  <input
                    className="py-3 px-2 rounded-md focus:outline-none w-full shadow-sm"
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
                <div className="my-2 flex flex-col">
                  <label
                    htmlFor="leads"
                    className="text-2xl text-white font-bold"
                  >
                    Leads
                  </label>
                  <input
                    className="py-3 px-2 rounded-md focus:outline-none shadow-sm"
                    name="leads"
                    type="number"
                    defaultValue={100}
                    onChange={(e) =>
                      setAnswer((answer) => ({
                        ...answer,
                        leads: e.target.value,
                      }))
                    }
                  />
                </div>

                {/* revenue */}
                <div className="my-2 flex flex-col">
                  <label
                    htmlFor="rev"
                    className="text-2xl text-white font-bold"
                  >
                    Revenue
                  </label>
                  <input
                    className="py-3 px-2 rounded-md focus:outline-none shadow-sm"
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
                <button
                  type="submit"
                  onClick={handleResult}
                  className="mt-1 px-2 py-3 bg-white rounded-lg text-fireGreen font-bold shadow-sm"
                >
                  View Result
                </button>
              </div>
            ) : (
              <div>
                <div className="flex flex-col md:flex-row">
                  <div className="my-4 md:mb-2 mx-2">
                    <p className="text-3xl text-white font-bold border-b-2 mb-2 text-center">
                      Before FireForms
                    </p>
                    <p className="text-2xl text-white font-bold">
                      Conversion Rate:{" "}
                      {((answer.leads / answer.visitors) * 100).toFixed(2)}%
                    </p>
                    <p className="text-2xl text-white font-bold">
                      Leads: {answer.leads}
                    </p>
                    <p className="text-2xl text-white font-bold">
                      Total Revenue: ${answer.revenue}
                    </p>
                  </div>
                  <div className="border-b-4 md:border-l-4 border-dotted md:mx-4"/>
                  <div className="my-4 md:mb-2 mx-2">
                    <p className="text-3xl text-white font-bold border-b-2 mb-2 text-center">
                      Using FireForms
                    </p>

                    <p className="text-2xl text-white font-bold">
                      Conversion Rate:{" "}
                      {((answer.leads / answer.visitors) * 100 * 1.5).toFixed(
                        2
                      )}
                      %
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
                      {Math.round(
                        (answer.revenue / answer.leads) * (answer.leads * 1.5)
                      )}
                      <span className="text-sm text-success">
                        {" "}
                        +{" "}
                        {Math.round(
                          (answer.revenue / answer.leads) *
                            (answer.leads * 1.5) -
                            answer.revenue
                        )}
                      </span>
                    </p>
                  </div>
                </div>
                <button
                  type="submit"
                  onClick={handleResult}
                  className="mt-4 px-2 py-3 bg-white rounded-lg text-fireGreen font-bold shadow-sm w-full"
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
        </Container>
      </div>
    </section>
  );
}
