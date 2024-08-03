import { motion } from "framer-motion";

const links = [
  {
    href: "/#home",
    title: "Home",
  },
  {
    href: "/#projects",
    title: "Projects",
  },
  {
    href: "/#contact",
    title: "Contact",
  },
  {
    href: "/#about",
    title: "About",
  },
];

const linksVariants = {
  open: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const linkVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 25,
    opacity: 0,
  },
};

function Links() {
  return (
    <motion.ul className="links" variants={linksVariants}>
      {links.map((link) => (
        <motion.li
          variants={linkVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          key={link.href}
        >
          <a href={link.href}>{link.title}</a>
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default Links;
