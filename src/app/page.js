import About from "./components/About";
import Capabilities from "./components/Capabilities";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Capabilities />
      <Highlights />
    </div>
  );
}
