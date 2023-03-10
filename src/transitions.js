export const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
    transition: { ease: [0.43, 0.13, 0.23, 0.96] },
  },
  visible: {
    opacity: 1,
    x: 0,

    transition: { easeInOut: [0.43, 0.13, 0.23, 0.96], duration: 0.6, stiffness: 90, mass: 0.5, damping: 10, type: "spring" },
  },
  exit: {
    // transition: { easeIn: [0.43, 0.13, 0.23, 0.96], delay: 0.5 },
    opacity: 0,
    y: "100vw",
    transition: { easeOut: [0.43, 0.13, 0.23, 0.96], stiffness: 110, mass: 1, damping: 20, type: "spring" },
  },
  transition: {
    easeIn: [0.43, 0.13, 0.23, 0.96],
    duration: 1.2,
  },
  // ease: [0.6, 0.01, -0.05, 0.9],
  // ease: [0.43, 0.13, 0.23, 0.96],
};

export const cardsVariants = {
  // hidden: {
  //   opacity: 0,
  //   scale: 0,
  // },
  // visible: {
  //   opacity: 1,

  //   scale: 1,
  // },
  // transition: {
  //   easeIn: [0.43, 0.13, 0.23, 0.96],
  //   duration: 0.3,
  // },
  exit: {
    x: "-100vw",
    transition: { easeOut: [0.43, 0.13, 0.23, 0.96] },
  },
};
export const childrenVariants = {
  hidden: {
    opacity: 0,
    y: "-100vw",
    scale: 0,
  },
  visible: {
    opacity: 1,
    y: "0",
    scale: 1,
  },
  transition: {
    easeIn: [0.43, 0.13, 0.23, 0.96],
    // duration: 1.2,
  },
  exit: {
    y: "-100vw",
    transition: { easeIn: [0.43, 0.13, 0.23, 0.96], delay: 0.5 },
    opacity: 0,
  },
};
export const childrenVariantsTwo = {
  hidden: {
    opacity: 0,
    y: "100vw",
    scale: 0,
  },
  visible: {
    opacity: 1,
    y: "0",
    scale: 1,
  },
  transition: {
    easeIn: [0.43, 0.13, 0.23, 0.96],
    duration: 1.2,
  },
  exit: {
    y: "100vw",
    transition: { easeIn: [0.43, 0.13, 0.23, 0.96], delay: 0.5 },
    opacity: 0,
  },
};
