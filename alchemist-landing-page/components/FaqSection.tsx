import React, { useState } from 'react';
import { FaqItemData } from '../types';
import { SectionTitle } from './SectionTitle';
import { QuoteForm } from './QuoteForm';
import { ChevronDownIcon, ChevronUpIcon } from './icons';

const faqData: FaqItemData[] = [
  {
    id: '1',
    question: 'WHAT SERVICES DO WE OFFER?',
    answer: 'At ALCHEMIST Resin , we specialize in premium epoxy flooring and concrete solutions for both residential and commercial spaces. From stunning, easy-to-maintain residential epoxy floors to durable, high-performance commercial coatings, our team delivers custom results tailored to your needs. We also offer garage floor epoxy for added protection and a polished finish, as well as concrete sealing services that extend the life of your surfaces by shielding them from moisture, stains, and wear. No matter the project, we are here to elevate your space with quality craftsmanship and lasting value.',
  },
  {
    id: '2',
    question: 'WHAT AREAS DO WE SERVE?',
    answer: 'ALCHEMIST Resin proudly serves homeowners and businesses throughout New York city , bringing expert decorative concrete and epoxy flooring solutions to a wide range of communities If you are located near our service area but do not see your city listed, do not hesitate to contact us — we are always open to taking on projects throughout the region.',
  },
  {
    id: '3',
    question: 'WHAT SETS US APART FROM OTHER OPTIONS?',
    answer: 'What sets ALCHEMIST Resin apart is our commitment to quality, customization, and customer care. We do not believe in one-size-fits-all solutions—every project is tailored to match your specific vision and needs. Leading our team is Ed , an experienced operator with over 5 years in the decorative concrete and epoxy flooring industry. His hands-on expertise, eye for detail, and dedication to doing things right the first time ensure that every client receives top-tier workmanship and a smooth, stress-free experience. From your first consultation to the final coat, we deliver lasting results you can count on.',
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
          <div className="mt-12 lg:mt-0 flex justify-center lg:justify-end">
             <QuoteForm
              title="GET A QUOTE NOW!"
              formContext="faq"
            />
          </div>
        </div>
      </div>
    </section>
  );
};