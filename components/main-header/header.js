// description: This is the main header component of the website.

//  next/image is a component that optimizes images for your website. It is a part of the Next.js framework.
import Image from "next/image";

//  brandLogo is the logo of the website.
import brandLogo from "@/public/images/logo.svg";

import Navbar from "./navbar";
import HeaderContainer from "./header-container";
import BrandLogoContainer from "../shareble-UI/brand-logo";

function MainHeader() {
  return (
    <HeaderContainer>
      <BrandLogoContainer>
        <Image src={brandLogo} alt="brand-logo" priority />
      </BrandLogoContainer>
      <Navbar />
    </HeaderContainer>
  );
}

export default MainHeader;
