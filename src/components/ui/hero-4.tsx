// components/ui/hero-4.tsx
// Hero-4 component adapted from prompt — integrated with our design system tokens

import * as React from "react";
import { cn } from "../../lib/utils";

export interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: React.ReactNode;
  animatedTexts: string[];
  subtitle: string;
  infoBadgeText: string;
  ctaButtonText: string;
  ctaOnClick?: () => void;
  socialProofText?: string;
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  ({ className, heading, animatedTexts, subtitle, infoBadgeText, ctaButtonText, ctaOnClick, socialProofText, ...props }, ref) => {
    const [textIndex, setTextIndex] = React.useState(0);
    const [displayText, setDisplayText] = React.useState("");
    const [isDeleting, setIsDeleting] = React.useState(false);

    React.useEffect(() => {
      const fullText = animatedTexts[textIndex];

      const handleTyping = () => {
        if (isDeleting) {
          setDisplayText((prev) => prev.substring(0, prev.length - 1));
        } else {
          setDisplayText((prev) => fullText.substring(0, prev.length + 1));
        }
      };

      const typingSpeed = isDeleting ? 65 : 130;
      const typeInterval = setInterval(handleTyping, typingSpeed);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2200);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % animatedTexts.length);
      }

      return () => clearInterval(typeInterval);
    }, [displayText, isDeleting, textIndex, animatedTexts]);

    return (
      <section
        className={cn(
          "flex flex-col items-center justify-center text-center py-20 md:py-32 px-6",
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-5">
          {/* Main heading */}
          <h1
            className="font-display font-black uppercase tracking-tightest leading-[1.05] text-brand-text-primary"
            style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3.8rem)' }}
          >
            {heading}
            {/* Typewriter line with dashed border */}
            <span className="relative mt-2 block w-fit mx-auto">
              <span className="absolute inset-0 -z-10 -m-2">
                <span className="absolute inset-0 border border-dashed border-brand-accent/40 rounded-xl" />
              </span>
              <span className="bg-gradient-to-r from-brand-accent-light to-brand-accent bg-clip-text text-transparent min-h-[1.2em] inline-block">
                {displayText}
                <span className="inline-block w-[2px] h-[0.85em] bg-brand-accent ml-0.5 align-middle animate-pulse" aria-hidden="true" />
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-brand-text-secondary text-sm sm:text-base leading-[1.75] max-w-xl mx-auto">
            {subtitle}
          </p>

          {/* Info Badge */}
          <div className="inline-flex items-center gap-2 rounded-lg bg-brand-bg-surface border border-brand-border text-brand-text-secondary px-4 py-2 text-[11px] font-display font-semibold uppercase tracking-wider">
            <span className="text-brand-accent">✦</span>
            {infoBadgeText}
          </div>

          {/* CTA Button */}
          <button
            onClick={ctaOnClick}
            className="px-8 py-3.5 text-xs font-display font-semibold uppercase tracking-widest rounded-full bg-gradient-to-r from-brand-accent to-brand-accent-light text-brand-bg-primary hover:brightness-110 hover:shadow-glow-accent active:scale-95 transition-all duration-200 cursor-pointer"
          >
            {ctaButtonText}
          </button>

          {/* Social Proof */}
          {socialProofText && (
            <p className="text-brand-text-muted text-xs font-display font-medium tracking-wider uppercase">
              {socialProofText}
            </p>
          )}
        </div>
      </section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
