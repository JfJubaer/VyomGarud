import About from "./components/About";
import Capabilities from "./components/Capabilities";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Capabilities />
      <Highlights />
      <Contact />
    </div>
  );
}
