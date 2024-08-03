import "./App.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <main>
      <Cursor />
      <section id="home">
        <Navbar />
        <Hero />
      </section>
      <section id="projects">
        <Parallax />
      </section>
      <Projects />
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}

export default App;
