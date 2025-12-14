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
            {/* CTAs removed from hero section; header CTAs remain. Content flows cleanly. */}
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="bg-[#1C1C1C] p-0 md:p-0 rounded-xl shadow-2xl w-full max-w-md overflow-hidden" id="quote-form">
              {/* Video at the top of the card */}
              <div className="relative mx-auto w-[92%] md:w-[85%]" style={{ aspectRatio: '9/16', minHeight: '340px', maxHeight: '520px', overflow: 'hidden' }}>
                  <video
                    className="w-full h-full object-cover rounded-t-xl"
                    src="/hero-video.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                <div className="absolute inset-0 bg-black bg-opacity-25 rounded-t-xl pointer-events-none"></div>
              </div>
              {/* QuoteForm with two-stage flow, no title or subtitle */}
              <QuoteForm
                title=""
                subtitle=""
                note=""
                formContext="hero"
                twoStage
                className="pt-0 pb-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};