import { motion } from "framer-motion";
import Loader from "./Loader";
import BounceButton from "../animations/buttons";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.5, duration: 1.5 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

const Home = () => {
  return (
    <motion.div
      className="home container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Welcome to Pizza Joint</h2>
      <h4>What kind of pizza do you like</h4>
      <BounceButton label="Create Pizza" to="/base" />
      <Loader />
    </motion.div>
  );
};

export default Home;
