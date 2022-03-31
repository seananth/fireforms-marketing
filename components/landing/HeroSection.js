import Image from "next/image";
import Link from "next/link";
import screenshot from "../../public/assets/branding/builder-mock-v2.png";

export default function HeroSection() {
  return (
    <section className="flex flex-col xl:flex-row xl:space-x-16 mt-4 lg:mt-24 items-center">
      <div className="text-center xl:text-left">
        <p className="text-4xl lg:text-6xl font-bold">
          Everything you need to build{" "}
          <mark className="inline-block bg-fireGreenOpacity">high converting</mark> multi-step forms.
        </p>
        <p className="order-last text-xl lg:text-2xl my-4 font-normal">
          From simple contact forms to advanced lead generation. Optimize for
          conversion with the next generation multi-step forms.
        </p>
        <Link href="https://app.fireforms.io/register">
          <button className="mb-4 mt-2 bg-fireGreen p-4 rounded-2xl shadow-sm text-white font-bold hover:scale-105">
            Start My 7 Day Free Trial
          </button>
        </Link>
      </div>

      <div className="max-w-2xl shadow-sm rounded-xl">
        <Image src={screenshot} priority={true} />
      </div>
    </section>
  );
}
