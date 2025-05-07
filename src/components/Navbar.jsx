import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import image from "../assets/image.png";
//import {Link} from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when viewport becomes desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
      <nav
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
              scrolled || menuOpen ? "bg-white shadow-md" : "bg-transparent"
          }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div>
            <img src={image} alt="Logo" className="h-10 sm:h-12 md:h-16 w-auto"/>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 lg:space-x-8 text-sm font-medium text-gray-700">
            <li><a href="#about" className="hover:text-indigo-600 transition-colors">About</a></li>
            <li><a href="#services" className="hover:text-indigo-600 transition-colors">Services</a></li>
            <li><a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a></li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                className="p-2 text-gray-700 hover:text-indigo-600 transition-colors"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
            <div className="md:hidden px-4 sm:px-6 pb-4 bg-white shadow-md">
              <ul className="space-y-4 text-sm font-medium text-gray-700">
                <li><a href="#about" className="block py-2 hover:text-indigo-600 transition-colors" onClick={() => setMenuOpen(false)}>About</a></li>
                <li><a href="#services" className="block py-2 hover:text-indigo-600 transition-colors" onClick={() => setMenuOpen(false)}>Services</a></li>
                <li><a href="#contact" className="block py-2 hover:text-indigo-600 transition-colors" onClick={() => setMenuOpen(false)}>Contact</a></li>
              </ul>
            </div>
        )}
      </nav>
  );
}