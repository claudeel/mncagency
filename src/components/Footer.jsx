import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
      <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between space-y-8 md:space-y-0">

          {/* Left side */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">YourBrand</h3>
            <p className="mt-2 text-sm text-gray-400">© 2025 YourBrand. All rights reserved.</p>
          </div>

          {/* Center nav links */}
          <div className="flex flex-wrap justify-center space-x-6">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>

          {/* Right side social icons */}
          <div className="flex justify-center space-x-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <Facebook size={20} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <Twitter size={20} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <Instagram size={20} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <Linkedin size={20} />
            </a>
          </div>

        </div>
      </footer>
  );
}
