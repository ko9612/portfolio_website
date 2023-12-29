"use client";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import ProjectSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-6 md:px-8 max-w-[1240px]">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}

// 위로가기 버튼
// 인터랙션 구현
