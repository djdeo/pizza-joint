export const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", delay: 0.5 },
  },
  hover:{
    scale:1.1,
    boxShadow:'rgb(244, 255, 255, 0.5) 0 5px 10px 0px'
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};
