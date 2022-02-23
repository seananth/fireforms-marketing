import { useState } from "react";

export default function ConversionCalculator() {
  const [answer, setAnswer] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("nice");
    setAnswer(true);
  };
  return (
    <section className="pt-10">
      <div className="bg-fireGreen py-28 justify-center align-center flex flex-col">
        <div className="flex justify-center">
          {answer === true ? (
            <p>
              Your current conversion rate is X% with fireforms you would get Y%
              - Z%
            </p>
          ) : (
            <form
              action="submit"
              onSubmit={handleSubmit}
              className="flex flex-col align-center"
            >
              <div className="flex justify-center">
                <label htmlFor="traffic">
                  How much traffic are you getting?
                </label>
                <input name="traffic" type="text" />
              </div>
              <div className="flex justify-center my-2">
                <label htmlFor="leads">
                  How many of those turn into leads?
                </label>
                <input name="leads" type="text" />
              </div>
              <div className="flex justify-center mb-2">
                <label htmlFor="rev">How much revenue?</label>
                <input name="rev" type="text" />
              </div>
              <button type="submit">Submit</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
