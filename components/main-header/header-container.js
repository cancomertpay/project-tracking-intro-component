"use client";

// framer-motion is a library that allows you to animate elements on your website.
import { motion } from "framer-motion";

//  variants is a file that contains animation variants for the website.
import variants from "@/variants/variants";

function HeaderContainer({ children }) {
  return (
    <motion.header
      variants={variants.mainHeader}
      initial="hidden"
      animate="visible"
      className="absolute top-0 w-full flex items-center justify-between p-10 z-10 lg:px-32"
    >
      {children}
    </motion.header>
  );
}

export default HeaderContainer;
