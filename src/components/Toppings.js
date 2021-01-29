import BounceButton from "../animations/buttons";
import { containerVariants } from "../animations/container";
import { motion } from "framer-motion";

const Toppings = ({ addTopping, pizza }) => {
  const toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <motion.div
      className="toppings container"
      variants={containerVariants}
      initial="hidden"
      whileHover="hover"
      animate="visible"
      exit="exit"
    >
      <motion.h3 whileHover={{z:200}}>Step 2: Choose Toppings </motion.h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <li key={topping} onClick={() => addTopping(topping)}>
              <span className={spanClass}>{topping}</span>
            </li>
          );
        })}
      </ul>

      <BounceButton label="Order" to="/order" />
    </motion.div>
  );
};

export default Toppings;
