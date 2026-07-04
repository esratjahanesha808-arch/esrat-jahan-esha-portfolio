import React from 'react';
import FadeIn from './FadeIn';
import GradientText from './GradientText';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  alignment = 'center',
  className = '',
}) => {
  const alignClass = alignment === 'center' ? 'text-center justify-center' : 'text-left justify-start';

  return (
    <div className={`mb-12 md:mb-16 flex flex-col ${alignClass} ${className}`}>
      {subtitle && (
        <FadeIn y={10} delay={0.1}>
          <span className="text-xs md:text-sm font-semibold tracking-widest text-brand-accent uppercase mb-3 block">
            {subtitle}
          </span>
        </FadeIn>
      )}
      
      <FadeIn y={15} delay={0.2}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tightest leading-none text-brand-text-primary uppercase">
          <GradientText>{title}</GradientText>
        </h2>
      </FadeIn>
    </div>
  );
};

export default SectionHeading;
