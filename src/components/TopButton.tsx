"use client";
import { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    // 페이지가 500px 이상 스크롤되었을 때 버튼 나타내기
    if (scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed right-5 bottom-5 z-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <button
            title="scrollToTop"
            onClick={scrollToTop}
            className="p-3 bg-white/60 rounded-full border border-white shadow-sm shadow-black/20 hover:bg-white hover:shadow-none hover:border-none transition-colors"
          >
            <BsArrowUp className="text-2xl" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TopButton;
