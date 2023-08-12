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
export const projectCardVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, easeIn: [0.43, 0.13, 0.23, 0.96], scale: 0, mass: 1.2, damping: 15, type: "spring", stiffness: 100 },
  },
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: "100px",
    transition: { duration: 0.5, easeIn: [0.43, 0.13, 0.23, 0.96], scale: 0, mass: 1.2, damping: 15, type: "spring", stiffness: 100 },
  },
};
