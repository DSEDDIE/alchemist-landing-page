import React, { useState } from 'react';
import { GoldenButton } from './GoldenButton';

export const ContactSection: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  return (
    <section className="bg-[#1C1C1C] py-10 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
          {/* Left: Title and Address */}
          <div className="text-center md:text-left flex-shrink-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              LET'S CONNECT TOGETHER
            </h2>
            <br/>
            <p className="text-sm text-gray-400 mt-2">
              1-15 57th Ave Suite 4523 Long Island city NY 11101
            </p>
          </div>
          {/* Right: Form */}
          <div className="flex items-center gap-4 w-full md:w-auto md:flex-grow justify-center md:justify-end">
            <form
              action="https://formspree.io/f/mrbkonak" // <-- yahan apna endpoint lagayen
              method="POST"
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <input
                type="tel"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone *"
                className="bg-[#101010] border border-gray-700 text-white rounded-full py-3 px-5 placeholder-gray-500 focus:ring-2 focus:ring-[#D1A054] focus:border-[#D1A054] outline-none w-full sm:w-auto sm:min-w-[180px] md:min-w-[200px] text-sm"
                required
                aria-label="Phone Number"
              />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address *"
                className="bg-[#101010] border border-gray-700 text-white rounded-full py-3 px-5 placeholder-gray-500 focus:ring-2 focus:ring-[#D1A054] focus:border-[#D1A054] outline-none w-full sm:w-auto sm:min-w-[180px] md:min-w-[200px] text-sm"
                required
                aria-label="Email Address"
              />
              <GoldenButton type="submit" className="rounded-full px-8 py-3 w-full sm:w-auto whitespace-nowrap text-sm">
                Contact now
              </GoldenButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
