"use client";

// useState is a React hook that allows you to manage state in a functional component.
import { useState } from "react";

// framer-motion is a library that allows you to animate elements on your website.
import { motion } from "framer-motion";

function BrandLogoContainer({ children }) {
  const [rotateDec, setRotateDec] = useState(0);
  return (
    <motion.div
      animate={{ rotate: rotateDec }}
      whileTap={{ scale: 0.8 }}
      onClick={() => setRotateDec((prev) => prev + 90)}
      className="cursor-pointer"
    >
      {children}
    </motion.div>
  );
}

export default BrandLogoContainer;
