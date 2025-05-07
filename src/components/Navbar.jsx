import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import image from "../assets/image.png";
import { useMediaQuery } from "react-responsive";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Media query for mobile
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu if screen resizes to desktop
  useEffect(() => {
    if (!isMobile) {
      setMenuOpen(false);
    }
  }, [isMobile]);

  return (
      <nav
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
              scrolled || menuOpen ? "bg-white shadow-md" : "bg-transparent"
          }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div>
            <img src={image} alt="Logo" className="h-10 sm:h-12 md:h-16 w-auto" />
          </div>

          {/* Desktop Menu */}
          {!isMobile && (
              <ul className="flex space-x-6 lg:space-x-8 text-sm font-medium text-gray-700">
                <li>
                  <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-indigo-600 transition-colors">Services</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
                </li>
              </ul>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
              <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  aria-label={menuOpen ? "Close menu" : "Open menu"}
                  className="p-2 text-gray-700 hover:text-indigo-600 transition-colors"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
          )}
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobile && menuOpen && (
            <div className="px-4 sm:px-6 pb-4 bg-white shadow-md">
              <ul className="space-y-4 text-sm font-medium text-gray-700">
                <li>
                  <a href="#about" className="block py-2 hover:text-indigo-600 transition-colors" onClick={() => setMenuOpen(false)}>About</a>
                </li>
                <li>
                  <a href="#services" className="block py-2 hover:text-indigo-600 transition-colors" onClick={() => setMenuOpen(false)}>Services</a>
                </li>
                <li>
                  <a href="#contact" className="block py-2 hover:text-indigo-600 transition-colors" onClick={() => setMenuOpen(false)}>Contact</a>
                </li>
              </ul>
            </div>
        )}
      </nav>
  );
}
