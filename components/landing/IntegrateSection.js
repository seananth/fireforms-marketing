import Image from "next/image";
import webflow from "../../public/assets/branding/works-with/webflow.png";
import wix from "../../public/assets/branding/works-with/wix.png";
import wordpress from "../../public/assets/branding/works-with/wordpress.png";
import shopify from "../../public/assets/branding/works-with/shopify.png";

export default function IntegrateSection() {
  return (
    <section className="pt-20">
      <div className="text-center pb-14">
        <p className="text-2xl text-gray-500	font-bold">Works on Any Platform</p>
      </div>
      <div className="flex justify-between items-center	lg:px-32">
        <div className="w-32">
          <Image src={webflow} />
        </div>
        <div className="w-28">
          <Image src={wix} />
        </div>
        <div className="w-28">
          <Image src={wordpress} />
        </div>
        <div className="w-28">
          <Image src={shopify} />
        </div>
        <div className="w-28">
          <p className="text-xl	font-bold text-gray-500	">100+ More</p>
        </div>
      </div>
    </section>
  );
}
