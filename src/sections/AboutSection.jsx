import React from "react";

export default function AboutSection() {
    return (
        <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gray-50">
            <div className="max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4 md:mb-6">Who We Are</h2>
                <div className="w-16 h-1 bg-blue-500 mx-auto mb-4 sm:mb-6"></div>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-prose mx-auto">
                    We're a team of creatives and strategists passionate about transforming your digital presence.
                    With years of experience in branding, content, and analytics, we deliver impactful results.
                </p>
            </div>
        </section>
    );
}