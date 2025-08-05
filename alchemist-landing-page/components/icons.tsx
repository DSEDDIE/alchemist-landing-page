
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
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 6.5c1.02 0 1.95.17 2.81.49L12.5 9.32l1.41 1.41 2.33-2.33C16.83 9.05 17 9.98 17 11c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.02.17-1.95.49-2.81L7.17 5.86 5.86 7.17l2.33 2.33C9.05 8.17 9.98 8 11 8c.34 0 .67.04 1 .09V6.5zm-1-3.21C9.04 2.81 7.97 2.5 6.83 2.5c-3.13 0-5.67 2.54-5.67 5.67S3.7 13.83 6.83 13.83c1.13 0 2.2-.31 3.17-.83L12 15l2-2-1.99-1.99L11 9.92V6.5c0-.46-.03-.91-.09-1.36L11 3.29zM20.5 2c-1.8 0-3.39.85-4.44 2.16l-1.02-.99C14.78 2.54 14.19 2 13.5 2c-.68 0-1.28.53-1.63 1.25L10.5 5.17l1.41 1.41.62-.62c.2-.2.51-.2.71 0l2.12 2.12c.2.2.2.51 0 .71l-1.34 1.34L17 13.2V17h-3.8l3.09 3.09c.63.63 1.47.91 2.46.91 1.66 0 3-1.34 3-3 0-.99-.28-1.83-.91-2.46L19 13.09V10c0-.8-.47-1.51-1.19-1.82l.99-1.02C19.65 5.39 20.5 3.8 20.5 2z"/>
  </svg>
);
