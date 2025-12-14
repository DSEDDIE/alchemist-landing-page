
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ImageGallery } from './components/ImageGallery';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import QuoteWizard from "./components/QuoteWizard";
import { useState } from "react";



const App: React.FC = () => {
  const [wizardOpen, setWizardOpen] = useState(false);

  return (
    <div className="bg-black min-h-screen text-gray-100 font-sans">
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <ServicesSection />
        <TestimonialsSection />
        <FaqSection />
        <ImageGallery />
        <ContactSection />
        <button 
          onClick={() => setWizardOpen(true)}
          className="fixed bottom-8 right-8 bg-[#D1A054] text-black font-bold py-3 px-6 rounded-full hover:bg-[#e6b566] transition z-40"
        >
          Get a Quote
        </button>
      </main>
      <Footer />
      <QuoteWizard open={wizardOpen} onClose={() => setWizardOpen(false)} />
    </div>
  );
};

export default App;
