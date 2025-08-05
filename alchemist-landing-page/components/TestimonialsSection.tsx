
import React from 'react';
import { Testimonial } from '../types';
import { SectionTitle } from './SectionTitle';
import { StarIcon, QuoteIcon as UilQuoteIcon } from './icons'; // Renamed to avoid conflict

const testimonialsData: Testimonial[] = [
  {
    id: '1',
    stars: 5,
    text: '"Absolutely outstanding service! The team was professional, friendly, and went above and beyond to meet my needs. I couldn’t be happier with the results. Highly recommended!"',
    avatarSrc: 'https://picsum.photos/seed/avatar1/100/100',
    name: 'Sarah',
    role: 'Client',
  },
  {
    id: '2',
    stars: 5,
    text: '"I was truly impressed by the quality and speed of their work. They listened to what I needed and delivered exactly that — with excellent customer support throughout the process."',
    avatarSrc: 'https://picsum.photos/seed/avatar2/100/100',
    name: 'Benjamin',
    role: 'Client',
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="bg-[#1C1C1C] p-8 rounded-xl shadow-xl relative border-l-4 border-[#D1A054]">
      <UilQuoteIcon className="absolute top-6 right-6 w-16 h-16 text-[#D1A054] opacity-10 transform -scale-x-100" />
      <div className="flex mb-4">
        {[...Array(testimonial.stars)].map((_, i) => (
          <StarIcon key={i} className="w-5 h-5 text-[#D1A054]" />
        ))}
      </div>
      <p className="text-gray-300 italic mb-6 text-sm leading-relaxed">{testimonial.text}</p>
      <div className="flex items-center">
        <img src={testimonial.avatarSrc} alt={testimonial.name} className="w-14 h-14 rounded-full mr-4 border-2 border-[#D1A054]" />
        <div>
          <h4 className="font-semibold text-white text-lg">{testimonial.name}</h4>
          <p className="text-[#D1A054] text-xs">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};


export const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-black py-16 md:py-24 relative overflow-hidden">
        {/* Subtle background pattern - for demonstration if a pattern was desired */}
        {/* <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div> */}
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle text="OUR TESTIMONIALS" className="text-center mb-12 md:mb-16" useGradient={false}/>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
