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

          <Link href="https://app.fireforms.io/login">
            <div className="flex justify-end w-48 cursor-pointer">
              <button className="xl:mr-10 bg-fireGreen px-5 py-2 rounded-2xl shadow-sm text-white font-bold">
                Login
              </button>
            </div>
          </Link>
        </div>
      </Container>
    </div>
  );
}
