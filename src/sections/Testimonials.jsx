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
      quote: "Their team is pure gold. Our brand visibility exploded!",
      name: "Jane Doe",
      company: "CEO, Glow Cosmetics",
    },
    {
      quote: "We saw ROI in under 30 days. Couldn't recommend more.",
      name: "Mark Roberts",
      company: "Founder, Appfinity",
    },
    {
      quote: "Their content strategy is unmatched. We went viral twice!",
      name: "Lisa Grant",
      company: "Marketing Lead, QuickBites",
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">What Clients Say</h2>

        <div className="relative">
          {/* Scroll buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full shadow hover:bg-blue-700 transition"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="min-w-[300px] bg-gray-50 p-6 rounded-xl shadow-sm flex-shrink-0 snap-center"
              >
                <p className="text-lg italic text-gray-700 mb-4">"{t.quote}"</p>
                <div className="font-semibold text-indigo-600">{t.name}</div>
                <div className="text-sm text-gray-500">{t.company}</div>
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full shadow hover:bg-blue-700 transition"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
