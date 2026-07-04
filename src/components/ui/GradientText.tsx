import React, { type ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  from?: string;
  to?: string;
  direction?: string;
}

const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = '',
  from = 'from-brand-accent',
  to = 'to-brand-accent-light',
  direction = 'bg-gradient-to-b',
}) => {
  return (
    <span
      className={`${direction} ${from} ${to} bg-clip-text text-transparent select-text ${className}`}
    >
      {children}
    </span>
  );
};

export default GradientText;
