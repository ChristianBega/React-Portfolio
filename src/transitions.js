export const containerVariant = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    transition: { easeIn: [0.43, 0.13, 0.23, 0.96], delay: 0.5 },
    opacity: 0,
  },
  transition: {
    easeIn: [0.43, 0.13, 0.23, 0.96],
    duration: 1.2,
  },
  // ease: [0.6, 0.01, -0.05, 0.9],
  // ease: [0.43, 0.13, 0.23, 0.96],
};
export const transition2 = {
  duration: 0.9,
  easeInOut: [0.43, 0.13, 0.23, 0.96],
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
    transition: { easeInOut: [0.43, 0.13, 0.23, 0.96], delay: 0.1 },
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
    duration: 1.2,
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
