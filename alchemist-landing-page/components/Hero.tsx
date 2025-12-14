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
            <h1 className="bg-gradient-to-r from-[#d1a054] to-[#f5e2b7] bg-clip-text text-transparent font-extrabold tracking-tight text-5xl md:text-6xl brightAquaGlow font-sora">
              WELCOME TO ALCHEMIST RESIN
            </h1>
            <h3 className="subheadline mt-6 md:mt-8">
              New York’s Benchmark for Epoxy Flooring & Concrete Artistry
            </h3>
            <p className="body-text mx-auto md:mx-0">
              At Alchemist Resin, we deliver premium epoxy flooring and high-performance surface coatings for residential and commercial spaces across New York City. Whether you're upgrading any area of your home or modernizing a business interior, we combine durability, design, and expert craftsmanship to bring your vision to life.
            </p>
            <p className="body-text mx-auto md:mx-0">
              <strong>We also specialize in custom epoxy countertops—from kitchen islands to bar tops—crafted for beauty, durability, and everyday performance.</strong>
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <a href="#quote-form">
                <GoldenButton className="px-10 py-4 text-base">
                  Get a Quote
                </GoldenButton>
              </a>
              <GoldenButton variant="outline-gold" className="px-10 py-4 text-base">
                Call Now: +1 (646) 640-0380
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