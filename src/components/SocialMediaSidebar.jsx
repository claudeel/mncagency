import React from "react";
import {FaTiktok } from "react-icons/fa";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function SocialMediaSidebar() {
  return (
    <div className="fixed top-1/3 right-0 z-50 flex flex-col space-y-4 p-2">
      <a href="https://www.tiktok.com/@mncdigitalagency?_t=ZM-8wDm4LbL8mz&_r=1" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-2 rounded-l-lg hover:bg-blue-700 transition">
        <FaTiktok size={20} />
      </a>
      <a href="https://x.com/mncagency?s=21" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white p-2 rounded-l-lg hover:bg-blue-600 transition">
        <Twitter size={20} />
      </a>
      <a href="https://www.instagram.com/mncagency?igsh=MTVxOWVtdzE0d2JqMg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="bg-pink-500 text-white p-2 rounded-l-lg hover:bg-pink-600 transition">
        <Instagram size={20} />
      </a>
    </div>
  );
}
