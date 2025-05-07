import React from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "GHS 2,500",
    features: [
      "5 pages",
        "Email System",
      "Mobile Friendly",
      "Renews at GHS 1,400/yr",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: "GHS 3,000",
    features: [
        "10 pages",
        "Email System",
      "Social Media Integration",
      "Website Analytics",
        "Renews at GHS 1,800,yr"
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: "GHS 7,000",
    features: [
        "Ecommerce",
        "Unlimited pages",
      "Mobile Friendly",
        "Email System",
      "Social Media Integration",
      "Ad campaign management",
      "Monthly performance reports",
        "Online Payments",
        "Renews at GHS 4,000/yr"
    ],
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Our Pricing Plans</h2>
        <p className="text-gray-500 mb-12">Choose the perfect plan for your business.</p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`border rounded-2xl p-8 shadow-sm ${
                plan.popular ? "border-blue-600 shadow-lg" : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold text-blue-600 mb-6">{plan.price}</p>
              <ul className="space-y-3 text-gray-600 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center justify-center">
                    <Check className="h-5 w-5 text-blue-600 mr-2" />
                    {feature}
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
