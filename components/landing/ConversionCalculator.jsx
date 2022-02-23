import { useState } from "react";

export default function ConversionCalculator() {
  const [done, setDone] = useState(false);
  const [answer, setAnswer] = useState({
    visitors: 0,
    leads: 0,
    revenue: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(answer);
    setDone(true);
  };
  return (
    <section className="pt-10">
      <div className="bg-fireGreen py-28 justify-center align-center flex flex-col">
        <div className="flex justify-center">
          <form
            action="submit"
            onSubmit={handleSubmit}
            className="flex flex-col align-center text-center"
          >
            {/* visitors */}
            <label htmlFor="traffic" className="text-2xl">
              How Many Visitors Do You Have?
            </label>
            <input
              name="traffic"
              type="number"
              onChange={(e) =>
                setAnswer((answer) => ({
                  ...answer,
                  visitors: e.target.value,
                }))
              }
            />
            <div className="my-2" />
            {/* leads */}
            <label htmlFor="leads" className="text-2xl">
              How many of those turn into leads?
            </label>
            <input
              name="leads"
              type="number"
              onChange={(e) =>
                setAnswer((answer) => ({
                  ...answer,
                  leads: e.target.value,
                }))
              }
            />
            <div className="my-2" />
            {/* revenue */}
            <label htmlFor="rev" className="text-2xl">
              How much revenue are you generating?
            </label>
            <input
              name="rev"
              type="number"
              onChange={(e) =>
                setAnswer((answer) => ({
                  ...answer,
                  revenue: e.target.value,
                }))
              }
            />
            <div className="my-2" />
            <button type="submit">Submit</button>
          </form>
          <div>
            Current
            <p className="text-2xl text-white font-bold">
              conversion rate:{" "}
              {Math.round((answer.leads / answer.visitors) * 100)}%
            </p>
            <p className="text-2xl text-white font-bold">
              Leads: {answer.leads}
            </p>
            <p className="text-2xl text-white font-bold">
              Total Revenue: ${answer.revenue}
            </p>
            <p className="text-2xl text-white font-bold">
              Revenue per Lead: ${answer.revenue / answer.leads}
            </p>
          </div>
          <div>
            With Fireforms
            <p className="text-2xl text-white font-bold">
              conversion rate:{" "}
              {Math.round((answer.leads / answer.visitors) * 100) * 1.5}%
            </p>
            <p className="text-2xl text-white font-bold">
              Leads: {answer.leads * 1.5}
            </p>
            <p className="text-2xl text-white font-bold">
              Total Revenue: $
              {(answer.revenue / answer.leads) * (answer.leads * 1.5)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
