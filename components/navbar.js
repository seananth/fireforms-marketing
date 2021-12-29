import Container from "./container";
import Image from "next/image";

import logo from "../public/assets/branding/fireforms-logo.png";

export default function Navbar() {
  return (
    <div className="border-b">
      <Container>
        <div className="w-48 mt-3">
          <Image src={logo} />
        </div>
      </Container>
    </div>
  );
}
