
import React from 'react';

interface SectionTitleProps {
  text: string;
  className?: string;
  useGradient?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ text, className = '', useGradient = true }) => {
  const titleClasses = useGradient
    ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#E0C083] via-[#D1A054] to-[#B38728]'
    : 'text-[#D1A054]'; // Solid gold color

  return (
    <h2 className={`text-4xl lg:text-5xl font-bold ${titleClasses} ${className}`}>
      {text}
    </h2>
  );
};
