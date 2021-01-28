import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const buttonVariants = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        duration: 0.3,
        repeat: 5,
        repeatType: 'mirror',
        ease:'easeOut'
      }
    }
  }

const BounceButton = ({label, to}) => {
    return (
        <Link to={to}><motion.button variants={buttonVariants} whileHover="hover">{label}</motion.button></Link>
    );
}
 
export default BounceButton;