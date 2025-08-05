
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

const App: React.FC = () => {
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
      </main>
      <Footer />
    </div>
  );
};

export default App;
