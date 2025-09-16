import React, { useState, useEffect } from 'react';
  {/*import { NavItem } from '../types';*/}
import { GoldenButton } from './GoldenButton';

  {/*const navItems: NavItem[] = [
  { label: 'Home', href: '#' }
];*/}

const logoUrl = "/logos.png";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={` top-0 left-0 right-0 z-70 transition-all duration-400 ${isScrolled ? 'bg-black bg-opacity-90 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" aria-label="Alchemist Resin Home">
              <img src={logoUrl} alt="Alchemist Resin Logo" className="h-24 w-auto" />
            </a>
          </div>

          {/* Navigation Links - Centered 
          <nav className="hidden md:flex flex-grow justify-center items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-[#D1A054] px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>*/}

          {/* Action Buttons - Right Aligned */}
          <div className="hidden md:flex items-center space-x-4">
            <GoldenButton 
              variant="outline-black-gold-text" 
              className="text-xs px-4 py-2" 
              onClick={() => {
                document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get a Quote
            </GoldenButton>
            <a href="tel:+16466400380">
              <GoldenButton
                variant="outline-gold"
                className="text-xs px-4 py-2"
                type="button"
              >
                Call Now: +1 (646) 640-0380
              </GoldenButton>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-300 hover:text-white p-2" aria-label="Open menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};