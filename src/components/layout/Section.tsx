import React, { type ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  background?: 'primary' | 'surface' | 'surfaceElevated' | 'gradient';
  padding?: boolean;
}

const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = '',
  background = 'primary',
  padding = true,
}) => {
  const getBgClass = () => {
    switch (background) {
      case 'surface':
        return 'bg-brand-bg-surface border-t border-b border-brand-border';
      case 'surfaceElevated':
        return 'bg-brand-bg-surfaceElevated border-t border-b border-brand-border-light';
      case 'gradient':
        return 'bg-radial-gradient-premium';
      case 'primary':
      default:
        return 'bg-brand-bg-primary';
    }
  };

  const padClass = padding ? 'py-20 sm:py-24 md:py-32 px-6 md:px-12 lg:px-16' : '';

  return (
    <section
      id={id}
      className={`relative w-full overflow-hidden bg-grain ${getBgClass()} ${padClass} ${className}`}
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {children}
      </div>
    </section>
  );
};

export default Section;
