import { motion } from "framer-motion";

import Sidebar from "../sidebar/Sidebar";
import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.h2
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          PORTFOLIO
        </motion.h2>
        <div className="socials">
          <a href="https://github.com/shivamb11/">
            <img src="/github.jpeg" alt="github-logo" />
          </a>
          <a href="https://www.linkedin.com/in/shivam-bansal11/">
            <img src="/linkedin.png" alt="github-logo" />
          </a>
          <a href="https://leetcode.com/shivam_bansal11/">
            <img src="/leetcode.png" alt="github-logo" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
