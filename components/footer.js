import Container from "./container";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";

import logo from "../public/assets/branding/fireforms-logo.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col items-center">
          <div className="max-w-xs mb-2">
            <Image src={logo} />
          </div>
          <div className="mb-4">
            <a href="/" className="hover:underline">
              Home
            </a>
            <Link href="/terms">
              <a className="mx-4 hover:underline">Terms of Service</a>
            </Link>
            <Link href="/contact">
              <a target="_blank" className="hover:underline">
                Support
              </a>
            </Link>
            <Link href="/blog">
              <a className="mx-4 hover:underline">Blog</a>
            </Link>
          </div>
          <div>copyright {year} fireforms AB</div>
        </div>
      </Container>
    </footer>
  );
}
