import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/blog">
        <a className="hover:underline flex items-center">
          <FontAwesomeIcon className="w-4 mr-1" icon={faArrowLeft} />
          Back to posts
        </a>
      </Link>
    </h2>
  );
}
