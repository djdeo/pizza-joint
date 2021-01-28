import { motion, useCycle } from "framer-motion";

const loaderVariants = {
    animationOne: {
        x: [-20, 40],
        y: [0, -30],
        transition: {
            x: {
                repeat : Infinity,
                duration: 0.5,
                repeatType:'mirror'
            },
            y: {
                repeat : Infinity,
                duration: 0.25,
                ease: 'easeOut',
                repeatType:'mirror'
            },
        }
    },
    animationTwo: {
        y: [0, -40],
        x: 0,
        transition: {
            y: {
                repeat : Infinity,
                duration: 0.25,
                ease: 'easeOut'
            }
        }
    },
}


const Loader = () => {
    const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo")

    return (
        <>
            <motion.div className="loader" variants={loaderVariants} animate={animation} />
            <div onClick={()=>cycleAnimation()}>Change Loader</div>
        </>
    );
}
 
export default Loader;