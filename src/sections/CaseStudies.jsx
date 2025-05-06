import React from "react";

export default function CaseStudies() {
  const cases = [
    {
      title: "Boosted Engagement by 300%",
      description: "We helped a fashion brand triple their engagement on Instagram using targeted campaigns and reels.",
    },
    {
      title: "Lead Gen for SaaS",
      description: "Our strategy brought in over 2,000 qualified leads for a SaaS company within 3 months.",
    },
    {
      title: "Viral TikTok Growth",
      description: "We created viral content that took a local food brand to 150K followers in 6 weeks.",
    },
  ];

  return (
    <section id="cases" className="py-20 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Case Studies</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Real results from real campaigns. Here's how we make a difference.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {cases.map((c, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-indigo-600">{c.title}</h3>
              <p className="text-gray-600">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
