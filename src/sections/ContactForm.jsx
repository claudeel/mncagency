import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        .sendForm(
            "service_3qnaqhy",
            "template_mljal8e", // replace with your template ID
            form.current,
            "zI0R902j4lW5HYYlS" // replace with your public key
        )
        .then(
            (result) => {
              console.log(result.text);
              alert("Message sent successfully!");
              form.current.reset();
            },
            (error) => {
              console.log(error.text);
              alert("Oops! Something went wrong.");
            }
        );
  };

  return (
      <section id="contact" className="bg-white py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-700">
            Contact Us
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-6 bg-gray-50 p-6 md:p-8 rounded-xl shadow-md">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input type="text" name="user_name" id="name" required
                     placeholder="Enter your full name"
                     className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input type="email" name="user_email" id="email" required
                     placeholder="you@example.com"
                     className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input type="tel" name="user_phone" id="number" required
                     placeholder="+233 801 234 567"
                     className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea name="message" id="message" rows="5" required
                        placeholder="Type your message here..."
                        className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
  );
}
