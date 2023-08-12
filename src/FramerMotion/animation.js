export const containerVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    // x: "100vw",
    transition: { ease: [0.43, 0.13, 0.23, 0.96] },
  },
  visible: {
    opacity: 1,
    scale: 1,
    // x: 0,
    transition: { easeInOut: [0.43, 0.13, 0.23, 0.96], duration: 0.6, stiffness: 60, mass: 0.5, damping: 8, type: "spring" },
  },

  transition: {
    easeIn: [0.43, 0.13, 0.23, 0.96],
    duration: 1.2,
  },
};
