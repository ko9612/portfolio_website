"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { NavLinksArr } from "../data/NavArray";
import NavLink from "./NavLink";
import MobileMenuOverlay from "./MobileMenuOverlay";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [NavbarOpen, setNavBarOpen] = useState<boolean>(false);
  const outside = useRef<HTMLDivElement>(null);

  const onBurgerClicked = () => {
    setNavBarOpen(!NavbarOpen);
  };

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  const handlerOutsie = (e: MouseEvent) => {
    if (!outside.current?.contains(e.target as Node)) {
      setNavBarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);

    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handlerOutsie);

    return () => {
      document.removeEventListener("mousedown", handlerOutsie);
    };
  }, []);

  return (
    <nav
      ref={outside}
      className={`fixed mx-auto top-0 left-0 right-0 z-10 bg-[#121212] border-b ${
        scrollPosition > 100 ? "border-[#33353F]" : "border-transparent"
      }`}
    >
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Hana&apos;s Portfolio
        </Link>
        <div className="mobile block md:hidden">
          <button
            aria-label="menu"
            type="button"
            className="px-1"
            onClick={onBurgerClicked}
          >
            <div
              className={`h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300 ${
                NavbarOpen && "rotate-45 translate-y-2"
              }`}
            />
            <div
              className={`h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300 ${
                NavbarOpen && "opacity-0 "
              }`}
            />
            <div
              className={`h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300 ${
                NavbarOpen && "-rotate-45 -translate-y-2"
              }`}
            />
          </button>
        </div>
        <div className="menu hidden md:block md:w-auto">
          <ul className="flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-0">
            {NavLinksArr.map((link) => (
              <li key={link.title}>
                <NavLink href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {NavbarOpen && <MobileMenuOverlay />}
    </nav>
  );
};

export default Navbar;
