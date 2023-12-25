import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto px-6 md:px-8">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
}

// px-12 py-4
// 위로가기 버튼
// scroll snap 적용
// 인터랙션 구현 틈틈이
// 영역에 따라 NavBar list 색 변경(보류)
