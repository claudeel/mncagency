import React from "react";
import { RocketIcon, PhoneCallIcon, SparklesIcon } from "lucide-react";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-12">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            icon={<RocketIcon className="w-10 h-10 text-indigo-600" />}
            title="Campaign Strategy"
            description="Custom marketing campaigns designed to amplify your brand and convert your audience."
          />
          <ServiceCard
            icon={<SparklesIcon className="w-10 h-10 text-indigo-600" />}
            title="Content Creation"
            description="Thumb-stopping visuals, reels, and copywriting tailored for your target platform."
          />
          <ServiceCard
            icon={<PhoneCallIcon className="w-10 h-10 text-indigo-600" />}
            title="Analytics & Growth"
            description="We track performance and optimize your campaigns for continuous growth."
          />
        </div>
      </div>
    </section>
  );
}
