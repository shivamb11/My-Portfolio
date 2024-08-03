import { useState } from "react";
import { motion } from "framer-motion";

import "./Sidebar.scss";
import Links from "./links/Links";
import ToggleButton from "./togglebutton/ToggleButton";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div className="sidebar" animate={isOpen ? "open" : "closed"}>
      <ToggleButton setIsOpen={setIsOpen} />
      <motion.div className="container" variants={variants}>
        <Links />
      </motion.div>
    </motion.div>
  );
}

export default Sidebar;
