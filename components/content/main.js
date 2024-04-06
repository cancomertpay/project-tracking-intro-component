"use client";

// description: This is the main content of the page, where the main content of the page will be displayed.

import Image from "next/image";

import heroIllustration from "@/public/images/illustration-devices.svg";

import { motion } from "framer-motion";
import variants from "@/variants/variants";

function MainContent({ children }) {
  return (
    <>
      <div className="-z-20">
        <motion.div
          initial={{ y: -500 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3, type: "tween", duration: 1 }}
          className="flex items-stretch justify-center h-[425px] md:h-screen lg:h-[55vh]"
        >
          <span className="flex-1"></span>
          <span className="flex-1 bg-secondary-cyan-blue rounded-bl-[5rem]"></span>
        </motion.div>
      </div>
      <motion.main
        variants={variants.mainContent}
        initial="hidden"
        animate="visible"
        className="absolute top-32 lg:top-0 pb-10 w-full overflow-x-hidden md:mt-10 md:pb-0 md:flex md:flex-col md:items-center md:gap-10 lg:flex-row-reverse lg:px-32 lg:mt-0 lg:h-screen"
      >
        <div className="md:flex-1 lg:flex-auto w-[482px] h-[239px] md:w-full lg:h-[50vh] lg:-mr-96">
          <Image
            className="object-cover ml-4 md:ml-0 lg:h-[60vh] lg:w-full lg:object-fill"
            src={heroIllustration}
            alt="Devices illustration image"
            priority
          />
        </div>
        <div className="md:flex-1 lg:flex-auto mt-14 md:mt-0">{children}</div>
      </motion.main>
    </>
  );
}

export default MainContent;
