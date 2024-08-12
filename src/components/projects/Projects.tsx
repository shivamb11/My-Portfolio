import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import "./Projects.scss";

const projects = [
  {
    id: 1,
    title: "Elite Estate",
    img: "/projects/elite-estate.png",
    description:
      "A modern real estate platform designed to empower property owners with an easy way to list properties for sale or rent. Elite Estate offers viewers an intuitive, interactive experience, allowing them to explore detailed listings, view high-quality images, and connect directly with owners for a seamless transaction.",
    liveLink: "http://the-elite-estate.vercel.app/",
  },
  {
    id: 2,
    title: "Style Sphere",
    img: "/projects/style-sphere.png",
    description:
      "Style Sphere is not just another fashion website; it's an immersive experience where style meets technology in the most dynamic way possible. Say goodbye to the mundane and hello to a world where shopping for your favorite fashion items becomes an adventure!",
    liveLink: "https://style-sphere-ss.vercel.app/",
  },
  {
    id: 3,
    title: "The Wild Oasis",
    img: "/projects/the-wild-oasis.png",
    description:
      "The Wild Oasis is a staff-centric website that simplifies hotel cabin bookings. It offers efficient management of guests, cabins, and reservations, with customizable features tailored for hotel staff, enhancing operational efficiency and user experience.",
    liveLink: "https://the-wild-oasis-vite.vercel.app/",
  },
  {
    id: 4,
    title: "Camphunt",
    img: "/projects/camphunt.png",
    description:
      "Camphunt is a responsive website designed to help users discover and explore campgrounds. It allows visitors to read detailed reviews, browse through various campsite options, and share their own camping experiences with the community, making it easier to find the perfect spot for their next outdoor adventure.",
    liveLink: "https://camphunt-es9p.onrender.com/",
  },
  {
    id: 5,
    title: "Weather Widget",
    img: "/projects/weather-widget.png",
    description:
      "Weather Widget is a user-friendly weather website designed to provide accurate and real-time weather updates for locations worldwide. Featuring detailed hourly and daily forecasts in an appealing way it ensures you are always prepared for any weather conditions.",
    liveLink: "https://weatherwidgettt.netlify.app/",
  },
];

function ProjectItem({
  project,
}: {
  project: {
    id: number;
    title: string;
    img: string;
    description: string;
    liveLink: string;
  };
}) {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
  });

  const yPosition = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="image-container" ref={imageRef}>
            <img src={project.img} alt={`${project.title} image`} />
          </div>
          <motion.div className="text-container" style={{ y: yPosition }}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.liveLink}>See Live</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["end end", "start start"],
  });

  const progressBarScaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="projects" ref={containerRef}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          className="progress-bar"
          style={{ scaleX: progressBarScaleX }}
        ></motion.div>
      </div>
      {projects.map((project) => (
        <ProjectItem project={project} key={project.id} />
      ))}
    </div>
  );
}

export default Projects;
