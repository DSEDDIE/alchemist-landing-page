import React from 'react';

interface GoldenButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'filled' | 'outline-gold' | 'outline-black-gold-text';
  fullWidth?: boolean;
  disabled?: boolean; // <-- Add this line
}

export const GoldenButton: React.FC<GoldenButtonProps> = ({
  children,
  onClick,
  className = '',
  type = 'button',
  variant = 'filled',
  fullWidth = false,
  disabled = false, // <-- Add this line
}) => {
  let baseStyle = `py-3 px-8 rounded-md text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black`;
  if (fullWidth) {
    baseStyle += ' w-full';
  }

  if (variant === 'filled') {
    baseStyle += ` text-black shadow-md hover:shadow-lg bg-[linear-gradient(to_right,#D7AC50_10%,#FFFFCF_25%,#CEA346_48%,#FFDE7A_69%,#D7AC50_88%)] hover:bg-[linear-gradient(to_right,#C69B4C_10%,#EDEEC2_25%,#B8943F_48%,#ECCB6F_69%,#C69B4C_88%)] focus:ring-[#D1A054]`;
  } else if (variant === 'outline-gold') {
    baseStyle += ` border-2 border-[#D1A054] text-[#D1A054] bg-transparent hover:bg-[#D1A054] hover:text-black focus:ring-[#D1A054]`;
  } else if (variant === 'outline-black-gold-text') {
    baseStyle += ` border border-[#D1A054] text-[#D1A054] bg-black hover:bg-[#D1A054] hover:text-black focus:ring-[#D1A054]`;
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${className}`}
      disabled={disabled} // <-- Add this line
    >
      {children}
    </button>
  );
};