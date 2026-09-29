import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Projects />
        <TechStack />
        <Process />
        <Pricing />
        <Contact />
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <p>© 2026 Ateeq Malkani. All rights reserved.</p>
          <p>NestJS / Node.js Backend Developer</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
