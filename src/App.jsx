import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/index";
import About from "./components/About/About";
import Project from "./components/Project/Index";
import ContactSection from "./components/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <ContactSection />
    </>
  );
}
