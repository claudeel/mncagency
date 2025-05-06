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

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <img src={image} className="h-16 w-auto"/>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
          <li><a href="#about" className="hover:text-indigo-600">About</a></li>
          <li><a href="#services" className="hover:text-indigo-600">Services</a></li>
          <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 bg-white shadow-md">
          <ul className="space-y-4 text-sm font-medium text-gray-700">
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
