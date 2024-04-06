// framer-motion global variants

import { easeIn, m, transform } from "framer-motion";

// purpose: This file contains global variants that can be used across the website.

const variants = {
  // main header variants
  mainHeader: {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.5, type: "spring", stiffness: 120 },
    },
  },

  // main content variants
  mainContent: {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.5, type: "spring", stiffness: 120 },
    },
  },

  // stagger container variants
  staggerContainer: {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  },

  // stagger item variants
  staggerItem: {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: [0.8, 1] },
  },

  // fade in variants
  fadeIn: (direction, duration, delay) => {
    let variants = {};

    switch (direction) {
      case "up":
        variants = {
          hidden: { y: -30, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              delay: delay ?? 0,
              duration: duration ?? 0,
              type: "tween",
            },
          },
        };
        break;
      case "down":
        variants = {
          hidden: { y: 30, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              delay: delay ?? 0,
              duration: duration ?? 0,
              type: "tween",
            },
          },
        };
        break;

      case "right":
        variants = {
          hidden: { x: 30, opacity: 0 },
          visible: {
            x: 0,
            opacity: 1,
            transition: {
              delay: delay ?? 0,
              duration: duration ?? 0,
              type: "tween",
            },
          },
        };
        break;

      case "left":
        variants = {
          hidden: { x: -30, opacity: 0 },
          visible: {
            x: 0,
            opacity: 1,
            transition: {
              delay: delay ?? 0,
              duration: duration ?? 0,
              type: "tween",
            },
          },
        };
        break;

      default:
        variants = {
          hidden: { y: -30, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              delay: delay ?? 0,
              duration: duration ?? 0,
              type: "tween",
            },
          },
        };
        break;
    }
    return variants;
  },
};

export default variants;
