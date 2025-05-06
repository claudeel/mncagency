import React from "react";
import { Button } from "../components/Button";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6 bg-gradient-to-br from-blue-500 to-indigo-600 text-white pt-20">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-bold mb-4">Grow Your Brand with Us</h1>
        <p className="text-xl mb-6">
          We help you connect, engage, and scale through powerful social media marketing strategies.
        </p>
        <Button>Get Started</Button>
      </div>
    </section>
  );
}
