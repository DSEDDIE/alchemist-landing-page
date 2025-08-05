import React from 'react';
import { GoldenButton } from './GoldenButton';
import { QuoteForm } from './QuoteForm';

export const Hero: React.FC = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat pt-20 md:pt-0"
      style={{ backgroundImage: "url('/project.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="text-center md:text-left py-12 md:py-0">
            <h1 className="text-4xl sm:text-5xl lg:text-4xl font-bold text-white leading-tight mb-5">
              WELCOME TO ALCHEMIST RESIN
            </h1>
            <h3 className="text-1xl sm:text-1xl lg:text-2xl font-semibold text-gold mb-4">
              New York’s Epoxy Flooring & Concrete Coating Specialists
            </h3>
            <p className="text-lg text-gray-300 mb-10 max-w-x2 mx-auto md:mx-0">

              At Alchemist Resin, we deliver premium epoxy flooring and high-performance surface coatings for residential, commercial, and garage spaces across New York City. Whether you’re upgrading your home interior, modernizing a retail space, or finishing a garage, we combine durability, design, and expert craftsmanship to bring your vision to life.
              We also offer professional concrete sealing services to protect and preserve your surfaces—defending against moisture, staining, and long-term wear.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <a href="#quote-form">
                <GoldenButton className="px-10 py-4 text-base">
                  Get a Quote
                </GoldenButton>
              </a>
              <GoldenButton variant="outline-gold" className="px-10 py-4 text-base">
                Call Now: +1 (929) 520-0087
              </GoldenButton>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <QuoteForm
              title="Get A FREE Quote!"
              subtitle=" "
              note=""
              formContext="hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
};