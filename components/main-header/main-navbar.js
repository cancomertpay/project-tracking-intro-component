"use client";

import Typography from "@/lib/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";

function MainNavbar({ navLinksList }) {
  const pathname = usePathname();
  return (
    <div className="hidden md:block">
      <ul className="flex justify-center items-center">
        {navLinksList.map((navLink, index) => {
          return navLink.name === "hr" ? (
            <hr
              key={index}
              className="bg-neutral-grayish-blue w-2 h-2 rounded-full my-5 mx-5"
            />
          ) : (
            <li
              key={index}
              className={"text-center my-5 px-5 flex items-center"}
            >
              <Link
                href={"/"}
                className={`uppercase text-neutral-very-dark-blue font-extrabold tracking-widest hover:underline transition-all hover:text-primary-red ${
                  pathname === navLink.href && "text-primary-dark-red"
                } ${
                  navLink.name === "Login" && "!text-neutral-dark-grayish-blue"
                } ${Typography.heading.className}`}
              >
                {navLink.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MainNavbar;
