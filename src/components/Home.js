import {Link } from 'react-router-dom'
import Loader from './Loader'
import { motion } from "framer-motion";

const containerVariants = {
  hidden:{
    opacity:0,
  },
  visible:{
    opacity:1,
    transition:{delay:1.5, duration:1.5}
  },
}

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow:"0 0 8px rgb(255,255,255)",
    boxShadow:"0 0 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo:5
    }
  }
}

const Home = () => {
  return (
    <motion.div className="home container" variants={containerVariants} initial="hidden" animate="visible">
        <h2>Welcome to Pizza Joint</h2>
        <h4>What kind of pizza do you like</h4>
        <Link to="/base"><motion.button variants={buttonVariants} whileHover="hover">Create Pizza</motion.button></Link>
        <Loader />
    </motion.div>
  );
};

export default Home;
