"use client";
// description: This is the modal component of the website.

import ReactDOM from "react-dom";

// framer-motion is a library that allows you to animate elements on your website.
import { motion } from "framer-motion";
import variants from "@/variants/variants";

function Modal({ isOpen, children, className, toggleDropdown }) {
  const handleOverlayClick = (e) => {
    if (e.target.id === "overlay") {
      toggleDropdown();
    }
  };
  return isOpen
    ? ReactDOM.createPortal(
        <div
          id="overlay"
          onClick={handleOverlayClick}
          className={"fixed top-0 w-screen h-screen z-20 " + className}
        >
          <motion.div
            variants={variants.fadeIn("up", 0.2, 0.2)}
            className="absolute top-28 right-0 left-0 bg-white p-2 mx-8 shadow-2xl rounded-md z-30"
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {children}
          </motion.div>
        </div>,
        document.getElementById("modal")
      )
    : null;
}

export default Modal;
