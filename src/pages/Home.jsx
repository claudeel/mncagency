import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import AboutSection from "../sections/AboutSection";
import Services from "../sections/Services";
import CTA from "../sections/CTA";
import Footer from "../components/Footer";
import CaseStudies from "../sections/CaseStudies";
import Testimonials from "../sections/Testimonials";
import PricingSection from "../components/PricingSection";
import SocialMediaSidebar from "../components/SocialMediaSidebar";
import ContactForm from "../sections/ContactForm";
export default function Home() {
  return (
    <div className="font-sans text-gray-900 flex flex-col mn-h-screen flex-grow">
      <Navbar />
      <Hero />
      <AboutSection />
      <SocialMediaSidebar />
      <Services />
      <ContactForm />
      <PricingSection />
      <CaseStudies />
      <Testimonials />
      <Footer />
    </div>
  );
}