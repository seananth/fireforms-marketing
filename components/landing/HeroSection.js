import Image from "next/image";
import screenshot from "../../public/assets/branding/builder-screenshot.png";

export default function HeroSection() {
  return (
    <section className="flex flex-col xl:flex-row xl:space-x-16 mt-24 items-center">
      <div className="text-center xl:text-left">
        <p className="text-6xl font-bold">
          Everything you need to build high converting multi-step forms.
        </p>
        <p className="text-2xl my-4 font-normal">
          From simple contact forms to advanced lead generation. Optimize for conversion with the next generation multi-step forms.
        </p>
        <button className="mb-4 mt-2 bg-fireGreen p-4 rounded-2xl shadow-sm text-white font-bold hover:scale-105">
          Get Started for Free
        </button>
      </div>
      
      <div className="max-w-4xl">
        <Image src={screenshot} />
      </div>
    </section>
  );
}