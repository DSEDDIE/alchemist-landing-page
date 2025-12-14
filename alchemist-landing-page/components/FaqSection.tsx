import React, { useState } from 'react';
import { FaqItemData } from '../types';
import { SectionTitle } from './SectionTitle';

import { ChevronDownIcon, ChevronUpIcon } from './icons';

const faqData: FaqItemData[] = [
  {
    id: '1',
    question: 'WHAT SERVICES DO WE OFFER?',
    answer: 'In addition to epoxy flooring and concrete coatings, Alchemist Resin offers a wide range of surface transformation solutions designed to upgrade existing spaces without unnecessary demolition. We specialize in custom concrete countertops, bar tops, and work surfaces tailored to each project’s design and functional needs.\n\nOur team also performs bathroom makeovers and surface refinishing directly over existing tile, creating seamless, modern finishes without the cost or disruption of full tear-outs. For floors and exterior surfaces, we provide concrete overlays and asphalt repair using high-performance coating systems engineered for durability, adhesion, and long-term wear.\n\nWhether it’s a countertop, bar top, floor, or resurfacing project, every application is carefully prepared and executed with the same attention to detail and craftsmanship that defines our work.',
  },
  {
    id: '2',
    question: 'WHAT AREAS DO WE SERVE?',
    answer: 'Alchemist Resin proudly serves residential and commercial clients throughout New York City, all of New York State, and the greater Tri-State Area. Our team provides premium epoxy flooring and concrete coating solutions across New York, New Jersey, and Connecticut, delivering the same level of craftsmanship, preparation, and attention to detail on every project.\n\nIf your property is located anywhere within our service region, we’re equipped to bring our expertise directly to you. For projects outside the immediate area, availability is considered on a case-by-case basis.',
  },
  {
    id: '3',
    question: 'WHAT SETS US APART FROM OTHER OPTIONS?',
    answer: 'What sets Alchemist Resin apart is our commitment to craftsmanship, materials, and preparation—never shortcuts. Every project begins with industrial-grade surface preparation, because long-lasting epoxy systems depend on what happens before the coating is ever applied.\n\nWe use high-performance, professional-grade materials designed for durability, adhesion, and long-term wear—not off-the-shelf products. Our team takes additional steps during installation to ensure proper bonding, even coverage, and a finish that performs as well as it looks.\n\nFrom residential spaces to demanding commercial environments, we approach every floor with precision, care, and respect for the material. The result is a surface built to withstand daily use, moisture, and impact—crafted to last, not just to impress on day one.',
  },
];

const FaqItem: React.FC<{ item: FaqItemData; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-700 last:border-b-0">
      <button
        onClick={onClick}
        className={`w-full text-left py-5 px-6 flex justify-between items-center transition-colors duration-300 rounded-t-md
                    ${isOpen 
                        ? 'bg-gradient-to-r from-[#FAF0C5] via-[#E0C083] to-[#BE9B5B] text-black font-semibold' 
                        : 'bg-[#2D2D2D] hover:bg-[#3a3a3a] text-white'}`}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
      >
        <span className="text-sm font-semibold">{item.question}</span>
        {isOpen ? <ChevronUpIcon className="w-5 h-5 text-black" /> : <ChevronDownIcon className="w-5 h-5 text-gray-400" />}
      </button>
      {isOpen && (
        <div id={`faq-answer-${item.id}`} className="p-6 bg-[#1C1C1C] text-gray-300 text-sm leading-relaxed rounded-b-md">
          {item.answer}
        </div>
      )}
    </div>
  );
};

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(faqData[0]?.id || null);

  const handleToggle = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className="bg-[#101010] py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <SectionTitle text="FREQUENTLY ASKED QUESTIONS" className="mb-10 text-left" useGradient={false} />
            <div className="space-y-1 rounded-md overflow-hidden shadow-lg">
              {faqData.map((item) => (
                <FaqItem
                  key={item.id}
                  item={item}
                  isOpen={openFaqId === item.id}
                  onClick={() => handleToggle(item.id)}
                />
              ))}
            </div>
          </div>
          {/* Removed embedded quote form for FAQ section as requested. FAQ layout and spacing preserved. */}
        </div>
      </div>
    </section>
  );
};