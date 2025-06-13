// lib/motion.js
export const slideInFromLeft = (delay = 0) => ({
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

export const slideInFromRight = (delay = 0) => ({
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

export const slideInFromTop = {
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
