import React from "react";
import { Button } from "../components/Button";

export default function CTA() {
  return (
<section id="contact" className="pt-20 pb-0 px-6 bg-indigo-600 text-white text-center">

      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Ready to Boost Your Brand?</h2>
        <p className="text-lg mb-6">Let’s work together to elevate your digital presence.</p>
        <Button variant="light">Book a Free Consultation</Button>
      </div>
    </section>
  );
}