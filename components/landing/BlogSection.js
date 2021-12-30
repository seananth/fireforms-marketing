import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BlogSection() {
  return (
    <section className="pt-10">
      <div className="bg-fireGreen py-28 flex justify-center">
        <Link href="/blog">
          <div className="flex items-end text-white cursor-pointer">
            <p className="font-bold text-4xl">Learn more on our blog</p>
            <div className="ml-4 w-8 flex items-center">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
