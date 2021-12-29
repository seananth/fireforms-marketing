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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit in autem
          repellendus nesciunt quas quibusdam delectus qua
        </p>
        <button className="mb-4 mt-2 bg-fireGreen p-4 rounded-2xl shadow-sm text-white font-bold">
          Get Started for Free
        </button>
      </div>
      
      <div className="max-w-4xl">
        <Image src={screenshot} />
      </div>
    </section>
  );
}