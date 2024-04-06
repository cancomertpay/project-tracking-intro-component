// description: Navbar component for the main header

import Typography from "@/lib/fonts";
import MainNavbar from "./main-navbar";
import MobileNavbar from "./mobile-navbar";

function Navbar() {
  const navLinksList = [
    { name: "Product", href: "/product" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "hr", href: "" },
    { name: "Login", href: "/login" },
  ];

  return (
    <nav>
      <MobileNavbar navLinksList={navLinksList} />
      <MainNavbar navLinksList={navLinksList} />
    </nav>
  );
}

export default Navbar;
