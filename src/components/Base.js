import { motion } from "framer-motion";
import { useState } from "react";
import BounceButton from "../animations/buttons";
import { containerVariants } from "../animations/container";

const nextVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 80 },
  },
};

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];
  const [titleStyle, setTitleStyle] = useState({ transform: "translateZ(0)" });

  const rotateContainer = (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 10;
    setTitleStyle({ transform: "translateZ(200px)" });
    e.target.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  };

  const resetContainer = (e) => {
    e.target.style.transition = "all 0.6s ease";
    e.target.style.transform = `rotateY(0deg) rotateX(0deg)`;
    setTitleStyle({ transform: "translateZ(0px)" });
  };

  return (
    <motion.div
      className="base container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      onMouseMove={(e) => rotateContainer(e)}
      onMouseLeave={(e) => resetContainer(e)}
      exit="exit"
    >
      <h3 style={titleStyle}>Step 1: Choose Base Type</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <li key={base} onClick={() => addBase(base)}>
              <span className={spanClass}> {base}</span>
            </li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next" variants={nextVariants}>
          <BounceButton label="Next" to="/toppings" />
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
