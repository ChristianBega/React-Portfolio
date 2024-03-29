export const containerVariants = {
  hidden: {
    opacity: 0,
    x: "-75px",
    transition: { ease: [0.43, 0.13, 0.23, 0.96] },
  },
  visible: {
    opacity: 1,
    x: 0,
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

export const heroTextVariants = {
  hidden: { y: "-75px", x: "-50px", opacity: 0 },
  visible: (index) => ({
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2 * index,
      duration: 0.5,
      easeIn: [0.43, 0.13, 0.23, 0.96],
      mass: 1.2,
      damping: 15,
      type: "spring",
      stiffness: 100,
    },
  }),
};

export const socialIconVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (index) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.5 * index,
      easeIn: [0.43, 0.13, 0.23, 0.96],
      type: "spring",
    },
  }),
};

export const aboutMeTextVariants = {
  hidden: { x: "50px", opacity: 0 },
  visible: (index) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.3 * index,
      easeIn: [0.43, 0.13, 0.23, 0.96],
      type: "spring",
    },
  }),
};

export const recentProjectVariants = {
  hidden: { x: "50px", opacity: 0 },
  visible: (index) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5 * index,
      easeIn: [0.43, 0.13, 0.23, 0.96],
      type: "spring",
    },
  }),
};
