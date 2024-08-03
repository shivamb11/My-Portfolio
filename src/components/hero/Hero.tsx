import { motion, Variants } from "framer-motion";

import "./Hero.scss";

const textVariations = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariations: Variants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-80%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="text-container"
          initial="initial"
          animate="animate"
          variants={textVariations}
        >
          <motion.h2>SHIVAM BANSAL</motion.h2>
          <motion.h3>Full Stack Web Developer</motion.h3>
          <motion.div className="buttons">
            <motion.button>See the Latest Works</motion.button>
            <motion.button>Contact Me</motion.button>
          </motion.div>
          <motion.img
            animate="scrollButton"
            variants={textVariations}
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <div className="image-container">
        <img src="/hero.png" alt="" />
      </div>
      <motion.div
        className="slider-container"
        initial="initial"
        animate="animate"
        variants={sliderVariations}
      >
        Frontend Web Developer | Backend Web Developer | Full Stack Web
        Developer
      </motion.div>
    </div>
  );
}

export default Hero;