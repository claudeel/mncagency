import React from "react";

export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition bg-white">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
