import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function SocialMediaSidebar() {
  return (
    <div className="fixed top-1/3 right-0 z-50 flex flex-col space-y-4 p-2">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-2 rounded-l-lg hover:bg-blue-700 transition">
        <Facebook size={20} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white p-2 rounded-l-lg hover:bg-blue-600 transition">
        <Twitter size={20} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-pink-500 text-white p-2 rounded-l-lg hover:bg-pink-600 transition">
        <Instagram size={20} />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-blue-700 text-white p-2 rounded-l-lg hover:bg-blue-800 transition">
        <Linkedin size={20} />
      </a>
    </div>
  );
}
