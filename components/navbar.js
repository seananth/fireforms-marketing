import Container from "./container";
import Image from "next/image";
import Link from "next/link";

import logo from "../public/assets/branding/fireforms-logo.png";

export default function Navbar() {
  return (
    <div className="border-b">
      <Container>
        <div className="flex justify-between items-center">
          <Link href="/">
            <div className="w-48 mt-3 cursor-pointer">
              <Image src={logo} />
            </div>
          </Link>

          <div className="flex items-center justify-end md:space-x-8">
            <Link href="/blog">
              <div className="cursor-pointer">
                <p className="text-fireGray hover:underline">Blog</p>
              </div>
            </Link>
            
            <Link href="https://app.fireforms.io/login">
              <div className="flex justify-end cursor-pointer invisible md:visible" >
                <button className="bg-fireGreen md:px-5 md:py-2 rounded-2xl shadow-sm text-white font-bold">
                  Login
                </button>
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
