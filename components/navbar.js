import Container from "./container";
import Image from "next/image";
import Link from "next/link";

import logo from "../public/assets/branding/fireforms-logo.png";

export default function Navbar() {
  return (
    <div className="border-b">
      <Container>
        <Link href="/">
          <div className="w-48 mt-3 cursor-pointer">
            <Image src={logo} />
          </div>
        </Link>
      </Container>
    </div>
  );
}
