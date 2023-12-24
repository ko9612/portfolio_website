import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#FFC8DD] to-[#BDE0FE]">
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto px-8">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
}

// px-12 py-4
