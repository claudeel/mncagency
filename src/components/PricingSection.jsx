import React, { useState } from "react";
import { Check } from "lucide-react";

const websitePlans = [
  {
    name: "Starter",
    price: "GHS 2,500",
    features: ["5 pages", "Email System", "Mobile Friendly", "Renews at GHS 1,400/yr"],
    popular: false,
  },
  {
    name: "Growth",
    price: "GHS 3,000",
    features: ["10 pages", "Email System", "Social Media Integration", "Website Analytics", "Renews at GHS 1,800/yr"],
    popular: true,
  },
  {
    name: "Elite",
    price: "GHS 7,000",
    features: ["Ecommerce", "Unlimited pages", "Mobile Friendly", "Email System", "Social Media Integration", "Ad campaign management", "Monthly performance reports", "Online Payments", "Renews at GHS 4,000/yr"],
    popular: false,
  },
];

const socialMediaPlans = [
  {
    name: "Basic",
    price: "GHS 800/mo",
    features: ["3 posts/week", "1 platform", "Basic Analytics"],
    popular: false,
  },
  {
    name: "Pro",
    price: "GHS 1,500/mo",
    features: ["5 posts/week", "2 platforms", "Custom graphics", "Monthly reporting"],
    popular: true,
  },
  {
    name: "Elite Social",
    price: "GHS 2,500/mo",
    features: ["Daily posts", "3+ platforms", "Ad management", "Content creation", "Performance reports", "Community engagement"],
    popular: false,
  },
];

export default function PricingSection() {
  const [activeCategory, setActiveCategory] = useState("website");

  const plans = activeCategory === "website" ? websitePlans : socialMediaPlans;

  return (
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            Our Pricing Plans
          </h2>
          <p className="text-gray-500 mb-8 text-base md:text-lg">
            Choose the perfect plan for your business.
          </p>

          {/* Toggle Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            <button
                onClick={() => setActiveCategory("website")}
                className={`px-4 py-2 rounded-full font-medium transition ${
                    activeCategory === "website" ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"
                }`}
            >
              Website Development
            </button>
            <button
                onClick={() => setActiveCategory("social")}
                className={`px-4 py-2 rounded-full font-medium transition ${
                    activeCategory === "social" ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"
                }`}
            >
              Social Media Management
            </button>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
                <div
                    key={plan.name}
                    className={`border rounded-2xl p-6 md:p-8 shadow-sm flex flex-col ${
                        plan.popular ? "border-blue-600 shadow-lg" : "border-gray-200"
                    }`}
                >
                  {plan.popular && (
                      <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 self-center">
                  Most Popular
                </span>
                  )}
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">{plan.name}</h3>
                  <p className="text-3xl font-bold text-blue-600 mb-6">{plan.price}</p>
                  <ul className="space-y-3 text-gray-600 mb-8">
                    {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center justify-start md:justify-center">
                          <Check className="h-5 w-5 text-blue-600 mr-2" />
                          <span className="text-sm md:text-base">{feature}</span>
                        </li>
                    ))}
                  </ul>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}
