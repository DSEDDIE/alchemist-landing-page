
import React from 'react';
import { GoldenButton } from './GoldenButton';
import { SectionTitle } from './SectionTitle';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <SectionTitle
              text="WHY YOU CHOOSE US"
              className="mb-6 text-left drop-shadow-[0_0_16px_rgba(209,160,84,0.55)] animate-pulse"
              useGradient={true}
            />
            <p className="text-gray-300 mb-8 leading-relaxed">
               At the heart of everything we do is a commitment to quality, trust, and customer satisfaction. We stand out by delivering personalized solutions tailored to your unique needs, backed by years of experience and a passion for excellence. Our team goes the extra mile to ensure timely service, transparent communication, and long-term value. When you choose us, you're not just selecting a service you're choosing a reliable partner who cares about your success.</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#quote-form">
                <GoldenButton className="px-10 py-4 text-base">
                  Get Your free Quote
                </GoldenButton>
              </a>
              <GoldenButton variant="outline-gold" className="px-10 py-4 text-base">
                Call Now: +1 (646) 640-0380
              </GoldenButton>              

            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-1 gap-4 h-[330px] md:h-[560px]">
            <div className="col-span-1 row-span-1 rounded-xl overflow-hidden shadow-lg">
                <img src="/Group2.png" alt="Epoxy floor detail" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
