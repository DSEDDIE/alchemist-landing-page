
import React from 'react';

export const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
  </svg>
);

export const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
  </svg>
);

export const ChevronUpIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
  </svg>
);

export const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
  </svg>
);

export const QuoteIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.539 21.625c1.442.203 2.883.375 4.324.375 2.156 0 3.516-.508 3.516-1.898 0-1.07-.9-1.688-2.586-1.688H10.5V9.375h5.25c4.547 0 7.5 2.531 7.5 6.469 0 3.375-2.062 5.906-6.094 6.656v.281c2.438.609 5.062 1.36 5.062 3.844 0 2.812-2.344 4.359-5.906 4.359C12.188 31 6.539 21.625 6.539 21.625zM19.414 21.625c1.441.203 2.883.375 4.324.375 2.156 0 3.516-.508 3.516-1.898 0-1.07-.9-1.688-2.586-1.688H23.375V9.375h5.25c4.547 0 7.5 2.531 7.5 6.469 0 3.375-2.062 5.906-6.094 6.656v.281c2.438.609 5.063 1.36 5.063 3.844 0 2.812-2.344 4.359-5.906 4.359-4.079 0-9.727-9.375-9.727-9.375z" opacity=".2"/>
  </svg>
);

export const TelescopeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    {/* Simple telescope illustration: diagonal tube, lens circle, and tripod legs */}
    <g strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Tube */}
      <path d="M3 14l8-4 6-3" />
      {/* Lens at front */}
      <circle cx="18" cy="5" r="2" fill="currentColor" />
      {/* Tripod / stand */}
      <path d="M11 14l-3 6" />
      <path d="M15 13l4 7" />
      <path d="M11 14l4-1" />
    </g>
  </svg>
);
