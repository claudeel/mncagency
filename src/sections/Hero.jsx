import React from "react";
import { Button } from "../components/Button";

export default function Hero() {
    return (
        <section className="min-h-[60vh] flex items-center justify-center text-center px-6 bg-gradient-to-br from-blue-500 to-indigo-600 text-white pt-24 pb-16">
            <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                    Grow Your Brand with Us
                </h1>
                <p className="text-base sm:text-lg md:text-xl mb-6 leading-relaxed">
                    We help you connect, engage, and scale through powerful social media marketing strategies.
                </p>
                <Button>Get Started</Button>
            </div>
        </section>
    );
}
