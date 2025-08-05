
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-500 text-xs">
          <a href="#" className="hover:text-[#D1A054] transition-colors">PRIVACY POLICY</a>
          <span className="mx-2">|</span>
          <a href="#" className="hover:text-[#D1A054] transition-colors">TERMS AND CONDITIONS</a>
        </p>
        <p className="text-gray-600 text-xs mt-2">
          &copy; {new Date().getFullYear()} Alchemist. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
