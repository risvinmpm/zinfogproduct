// lib/motion.ts
import type { Variants } from "framer-motion";

export const slideInFromLeft = (delay = 0): Variants => ({
  hidden: { x: -100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      delay,
      duration: 0.6,
    },
  },
});

export const slideInFromRight = (delay = 0): Variants => ({
  hidden: { x: 100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      delay,
      duration: 0.6,
    },
  },
});

export const slideInFromTop: Variants = {
  hidden: { y: -100, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      delay: 0.2,
      duration: 0.6,
    },
  },
};
