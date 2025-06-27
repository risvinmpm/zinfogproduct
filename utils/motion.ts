import type { Variants } from "framer-motion";

export function slideInFromLeft(delay: number): Variants {
  return {
    hidden: { x: -100, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",    // Add type here
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export function slideInFromRight(delay: number): Variants {
  return {
    hidden: { x: 100, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",    // Add type here
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export const slideInFromTop: Variants = {
  hidden: { y: -100, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",      // Add type here
      delay: 0.5,
      duration: 0.5,
    },
  },
};
