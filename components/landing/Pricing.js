import Image from "next/image";
import BG from "../../public/assets/branding/patternBG.png";

export default function Pricing() {
  return (
    <section className="flex flex-col my-24">
      <div className="flex flex-col items-center pb-8">
        <p className="text-2xl text-fireGreen font-bold mb-2">Plans</p>
        <p className="text-4xl font-bold">Choose Your Pricing Plan</p>
      </div>
      {/* monthly */}
      <div className="flex flex-col space-y-6 xl:space-y-0 xl:flex-row xl:justify-center items-center mt-8">
        <div className="xl:mr-5 flex flex-col items-center px-24 py-8 border rounded-3xl hover:scale-105 hover:cursor-pointer">
          <div className="text-center">
            <p className="text-4xl">Early Bird Monthly</p>
            <p className="text-xl py-1 text-fireGreen mt-2 font-bold">
              Limited time only!
            </p>
          </div>
          <div className="flex items-center justify-center py-10">
            <p className="font-bold text-3xl">€49</p>
            <p className="text-xl">/Monthly</p>
          </div>
          <ul className="text-left list-none text-xl space-y-3">
            <li>Drag & Drop Builder</li>
            <li>Simple embed on any site</li>
            <li>Unlimited - active forms</li>
            <li>Unlimited - responses/mo</li>
            <li>GDPR Complient</li>
          </ul>
          <button className="mt-8 bg-fireGreen p-4 rounded-2xl shadow-sm text-white font-bold ">
            Create Account
          </button>
        </div>
        {/* Yearly */}
        <div className="xl:mr-5 flex flex-col items-center px-28 py-8 border rounded-3xl hover:scale-105 hover:cursor-pointer">
          <div className="text-center">
            <p className="text-4xl">Early Bird Yearly</p>
            <p className="text-xl py-1 text-fireGreen mt-2 font-bold">
              2 Months for Free!
            </p>
          </div>
          <div className="flex items-center justify-center py-10">
            <p className="font-bold text-3xl">€49</p>
            <p className="text-xl">/Yearly</p>
          </div>
          <ul className="text-left list-none text-xl space-y-3">
            <li>Drag & Drop Builder</li>
            <li>Simple embed on any site</li>
            <li>Unlimited - active forms</li>
            <li>Unlimited - responses/mo</li>
            <li>GDPR Complient</li>
          </ul>
          <button className="mt-8 bg-fireGreen p-4 rounded-2xl shadow-sm text-white font-bold ">
            Create Account
          </button>
        </div>
      </div>
    </section>
  );
}