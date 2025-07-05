//GSAP
import ScrollTop from "./lib/animations/ScrollTop";
import SmoothScroll from "./lib/animations/SmoothScroll";

// Komponen yang bakal ditampilkan per halaman
import Navbar from "./components/Navbar";
import { HeroSection } from "./components/Hero";
import AboutSection from "./components/About";
import Footer from "./components/Footer";
import StickyCursor from "./lib/animations/StickyCursor";

// Pages Routes
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import ScrollButton from "./pages/tes";

// Halaman utama
const Home = () => (
  <>
    <HeroSection />
    <AboutSection />
  </>
);

export default function App() {
  return (
    <>
      <StickyCursor />
      <SmoothScroll>
        <Navbar />
        <main className="relative">
          <ScrollTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/Contact" element={<ContactPage />} />
            <Route path="/tes" element={<ScrollButton />} />
          </Routes>
        </main>
        <Footer />
      </SmoothScroll>
    </>
  );
}
