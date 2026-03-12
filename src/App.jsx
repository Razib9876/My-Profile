import Hero from "./sections/Hero";
import Contact from "./sections/Contact";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Sidebar from "./components/sidebar";
// Import other sections similarly...

function App() {
  return (
    <div className="bg-base-100 min-h-screen">
      <Sidebar></Sidebar>
      <main className="lg:ml-64 transition-all duration-300">
        <Hero />

        {/* About Placeholder */}
        <section
          id="about"
          className="h-screen flex items-center justify-center bg-base-100 pt-28 pb-20 md:pt-20   mt-3"
        >
          {/* <h2 className="text-4xl font-bold">About Me Content Goes Here</h2> */}
          <About></About>
        </section>

        {/* Project Placeholder */}
        <section id="projects" className="min-h-screen  ">
          <Projects></Projects>
        </section>
        {/* Experience Placeholder */}
        <section id="experience" className="min-h-screen  ">
          <Experience></Experience>
        </section>

        <Contact />

        {/* Footer */}
        <footer className="footer footer-center p-10 bg-base-300 text-base-content rounded">
          <nav className="grid grid-flow-col gap-4">
            <a href="https://github.com" className="btn btn-ghost">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com" className="btn btn-ghost">
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:mohammadrazib987@gmail.com"
              className="btn btn-ghost"
            >
              <FaEnvelope size={24} />
            </a>
          </nav>
          <p>© 2026 - All right reserved by Mohammad Razib</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
