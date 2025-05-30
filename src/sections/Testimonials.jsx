import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  const testimonials = [
    {
      quote: "We look forward to working with you!",
      name: "Martin Eze",
      company: "CEO, MnC Agency",
    },
    {
      quote: "Let's take your business to the next level!",
      name: "CLaude Appiah-Sasraku",
      company: "Web Developer",
    },
  ];

  return (
      <section id="testimonials" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">From Our Team.</h2>

          <div className="relative">
            {/* Scroll buttons (hidden on small screens) */}
            {/*<button
                onClick={scrollLeft}
                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow hover:bg-blue-700 transition"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>*/}

            <div
                ref={scrollRef}
                className="flex space-x-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {testimonials.map((t, idx) => (
                  <div
                      key={idx}
                      className="min-w-[280px] md:min-w-[300px] bg-gray-50 p-6 rounded-xl shadow-sm flex-shrink-0 snap-center"
                  >
                    <p className="text-base md:text-lg italic text-gray-700 mb-4">"{t.quote}"</p>
                    <div className="font-semibold text-indigo-600">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.company}</div>
                  </div>
              ))}
            </div>

            {/*<button
                onClick={scrollRight}
                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow hover:bg-blue-700 transition"
            >
              <ChevronRight className="h-5 w-5" />
            </button>*/}
          </div>
        </div>
      </section>
  );
}
