import React from "react";

export function Button({ children, variant = "primary", ...props }) {
  const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all";
  const variants = {
    primary: "bg-white text-indigo-700 hover:bg-gray-100",
    light: "bg-white text-indigo-700 hover:bg-indigo-100",
    dark: "bg-indigo-700 text-white hover:bg-indigo-800"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}
