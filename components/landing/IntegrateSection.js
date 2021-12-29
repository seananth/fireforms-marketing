import Image from "next/image";
import webflow from "../../public/assets/branding/works-with/webflow.png";
import wix from "../../public/assets/branding/works-with/wix.png";
import wordpress from "../../public/assets/branding/works-with/wordpress.png";

export default function IntegrateSection() {
  return (
    <section className="flex justify-between items-center	lg:px-32 mt-24">
      <div className="w-28">
        <Image src={webflow} />
      </div>
      <div className="w-28">
        <Image src={wix} />
      </div>
      <div className="w-28">
        <Image src={wordpress} />
      </div>
      <div className="w-28">
        <p>100+ more</p>
      </div>
    </section>
  );
}
