"use client";

// useState is a react hook that allows you to use state in a functional component.
import { useState } from "react";

// usePathname is a hook that allows you to get the current pathname of the website.
import { usePathname } from "next/navigation";

// next/image is a component that optimizes images for the website. It is a part of the Next.js framework.
import Image from "next/image";

// next/link is a component that allows you to link to other pages in the website. It is a part of the Next.js framework.
import Link from "next/link";

// modal is a component that displays a react-portal on the website.
import Modal from "../shareble-UI/modal";

// framer-motion is a library that allows you to animate elements on your website.
import { AnimatePresence, motion } from "framer-motion";

//  variants is a file that contains animation variants for the website.
import variants from "@/variants/variants";

// hamburgerIcon is the dropdown icon of the website.
import hamburgerIcon from "@/public/images/icon-hamburger.svg";

// closeIcon is the close icon of the website.
import closeIcon from "@/public/images/icon-close.svg";
import Typography from "@/lib/fonts";

function MobileNavbar({ navLinksList }) {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <div className="relative md:hidden" onClick={toggleDropdown}>
        {!isOpen ? (
          <motion.div
            animate={{ scale: [0.9, 1.2, 1] }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={hamburgerIcon}
              alt="open dropdown icon of the website"
            />
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.3 }}
          >
            <Image src={closeIcon} alt="close dropdown icon of the website" />
          </motion.div>
        )}
      </div>

      {/* dropdown nav menu */}
      <AnimatePresence>
        {isOpen && (
          <Modal
            toggleDropdown={toggleDropdown}
            isOpen={isOpen}
            className="md:hidden"
          >
            <motion.ul
              variants={variants.staggerContainer}
              initial="hidden"
              animate="visible"
              className="px-6"
            >
              {navLinksList.map((navLink, index) => {
                return navLink.name === "hr" ? (
                  <hr
                    key={index}
                    className="bg-neutral-grayish-blue w-full my-5"
                  />
                ) : (
                  <motion.li
                    variants={variants.staggerItem}
                    key={index}
                    className={
                      "text-center my-5 px-5 " + Typography.heading.className
                    }
                  >
                    <Link
                      href={"/"}
                      className={`uppercase text-neutral-very-dark-blue font-extrabold text-xl  tracking-wider hover:text-primary-red ${
                        pathname === navLink.href && "text-primary-dark-red"
                      } ${
                        navLink.name === "Login" &&
                        "!text-neutral-dark-grayish-blue"
                      }`}
                    >
                      {navLink.name}
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}

export default MobileNavbar;
