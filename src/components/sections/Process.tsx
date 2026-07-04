import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const STEPS = [
  {
    number: '01',
    title: 'Research & Analysis',
    body: 'Before anything else, I study the market. I look at similar websites, analyze what is working and what is not, and figure out why the successful ones are winning. This shapes every decision that follows.',
  },
  {
    number: '02',
    title: 'Planning',
    body: 'I define project architecture, user flow, database structure, and choose the technology stack best suited to the business goals.',
  },
  {
    number: '03',
    title: 'Development',
    body: 'I write fast, clean, scalable, and maintainable code using modern frameworks and reusable components built to work seamlessly across every device.',
  },
  {
    number: '04',
    title: 'Optimization',
    body: 'Performance optimization, SEO fundamentals, accessibility, security, and a smooth user experience are integrated throughout development, not bolted on at the end.',
  },
  {
    number: '05',
    title: 'Deployment',
    body: 'Production-ready deployment with testing, monitoring, and ongoing improvements to ensure long-term reliability.',
  },
];

// Horizontal connector for Desktop (Normal)
const ConnectorHorizontal = ({ className, flipped = false }: { className?: string, flipped?: boolean }) => (
  <svg 
    width="64" 
    height="60" 
    viewBox="0 0 64 60" 
    fill="none" 
    className={`absolute z-0 pointer-events-none hidden lg:block ${className} ${flipped ? 'scale-y-[-1]' : ''}`}
    style={{ overflow: 'visible' }}
  >
    <path d="M0 50 C 20 10, 44 10, 64 50" stroke="rgba(184,150,90,0.15)" strokeWidth="6" strokeLinecap="round" fill="none" style={{ filter: 'blur(4px)' }} />
    <path d="M0 50 C 20 10, 44 10, 64 50" stroke="#b8965a" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" fill="none" />
    <circle cx="64" cy="50" r="4" fill="#09090b" stroke="#b8965a" strokeWidth="1.5" />
    <circle cx="0" cy="50" r="4" fill="#09090b" stroke="#b8965a" strokeWidth="1.5" />
  </svg>
);

// Fade Out connector (for Card 3 desktop right side)
const ConnectorFadeOut = ({ className, flipped = false }: { className?: string, flipped?: boolean }) => (
  <svg 
    width="64" 
    height="60" 
    viewBox="0 0 64 60" 
    fill="none" 
    className={`absolute z-0 pointer-events-none hidden lg:block ${className} ${flipped ? 'scale-y-[-1]' : ''}`}
    style={{ overflow: 'visible' }}
  >
    <defs>
      <linearGradient id="fadeGradientOut" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#b8965a" stopOpacity="1" />
        <stop offset="100%" stopColor="#b8965a" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path d="M0 50 C 20 10, 44 10, 64 50" stroke="url(#fadeGradientOut)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" fill="none" />
    <circle cx="0" cy="50" r="4" fill="#09090b" stroke="#b8965a" strokeWidth="1.5" />
  </svg>
);

// Fade In connector (for Card 4 desktop left side)
const ConnectorFadeIn = ({ className, flipped = false }: { className?: string, flipped?: boolean }) => (
  <svg 
    width="64" 
    height="60" 
    viewBox="0 0 64 60" 
    fill="none" 
    className={`absolute z-0 pointer-events-none hidden lg:block ${className} ${flipped ? 'scale-y-[-1]' : ''}`}
    style={{ overflow: 'visible' }}
  >
    <defs>
      <linearGradient id="fadeGradientIn" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#b8965a" stopOpacity="0" />
        <stop offset="100%" stopColor="#b8965a" stopOpacity="1" />
      </linearGradient>
    </defs>
    <path d="M0 50 C 20 10, 44 10, 64 50" stroke="url(#fadeGradientIn)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" fill="none" />
    <circle cx="64" cy="50" r="4" fill="#09090b" stroke="#b8965a" strokeWidth="1.5" />
  </svg>
);

// Vertical connector for Mobile/Tablet
const ConnectorVertical = ({ className, flipped = false }: { className?: string, flipped?: boolean }) => (
  <svg 
    width="60" 
    height="80" 
    viewBox="0 0 60 80" 
    fill="none" 
    className={`absolute z-0 pointer-events-none lg:hidden ${className} ${flipped ? 'scale-x-[-1]' : ''}`}
    style={{ overflow: 'visible' }}
  >
    <path d="M30 0 C 10 20, 10 60, 30 80" stroke="rgba(184,150,90,0.15)" strokeWidth="6" strokeLinecap="round" fill="none" style={{ filter: 'blur(4px)' }} />
    <path d="M30 0 C 10 20, 10 60, 30 80" stroke="#b8965a" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" fill="none" />
    <circle cx="30" cy="80" r="4" fill="#09090b" stroke="#b8965a" strokeWidth="1.5" />
    <circle cx="30" cy="0" r="4" fill="#09090b" stroke="#b8965a" strokeWidth="1.5" />
  </svg>
);

const Process: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="process"
      ref={ref}
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ background: '#09090b', borderTop: '1px solid rgba(255,255,255,0.04)' }}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[40%]"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(90,62,25,0.18) 0%, transparent 70%)', filter: 'blur(50px)' }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col items-center justify-center text-center mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="flex items-center gap-3 mb-6">
            <span className="inline-block w-8 h-px" style={{ background: '#b8965a', opacity: 0.6 }} />
            <span className="text-[11px] font-medium uppercase tracking-[0.18em]" style={{ color: '#b8965a', fontFamily: 'Inter, sans-serif' }}>Process</span>
            <span className="inline-block w-8 h-px" style={{ background: '#b8965a', opacity: 0.6 }} />
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="leading-[1.05] tracking-tight mb-6" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.6rem)', fontFamily: "'Instrument Serif', Georgia, serif", color: '#f5f5f4' }}>
            From Idea <em style={{ fontStyle: 'italic', color: '#b8965a' }}>to Launch.</em>
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.18 }} className="max-w-lg" style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(245,245,244,0.45)', lineHeight: 1.75 }}>
            A clear, research-driven process from the first conversation to the final deployment.
          </motion.p>
        </div>

        {/* Cards Container */}
        <div className="relative w-full pb-10 flex flex-col gap-y-20 lg:gap-y-24 items-center pt-10">
          
          {/* Row 1 (Items 1, 2, 3) */}
          <div className="flex flex-col lg:flex-row w-full justify-center items-center gap-y-20 gap-x-8 lg:gap-x-16">
            {STEPS.slice(0, 3).map((step, i) => {
              const actualIndex = i;
              const isEven = actualIndex % 2 === 0;
              const isLastInRowDesktop = actualIndex === 2;
              
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + actualIndex * 0.1 }}
                  className={`relative w-full max-w-[320px] h-[380px] rounded-3xl p-8 flex flex-col justify-between border transition-all duration-300 group hover:-translate-y-2 lg:transform ${isEven ? 'lg:-translate-y-6' : 'lg:translate-y-12'}`}
                  style={{
                    background: 'linear-gradient(160deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                    borderColor: 'rgba(255,255,255,0.08)',
                    boxShadow: '0 20px 40px -20px rgba(0,0,0,0.5)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(184,150,90,0.3)';
                    (e.currentTarget as HTMLDivElement).style.background = 'linear-gradient(160deg, rgba(184,150,90,0.06) 0%, rgba(255,255,255,0.01) 100%)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.08)';
                    (e.currentTarget as HTMLDivElement).style.background = 'linear-gradient(160deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)';
                  }}
                >
                  <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: '3.5rem', color: 'rgba(184,150,90,0.9)', lineHeight: 1, textShadow: '0 4px 12px rgba(184,150,90,0.2)' }}>
                    {step.number}
                  </div>

                  <div>
                    <h3 className="mb-4" style={{ fontFamily: "'Plus Jakarta Sans', Inter, sans-serif", fontSize: '1.25rem', fontWeight: 600, color: '#f5f5f4' }}>
                      {step.title}
                    </h3>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: 'rgba(245,245,244,0.5)', lineHeight: 1.6 }}>
                      {step.body}
                    </p>
                  </div>

                  {/* Horizontal connector for desktop */}
                  {!isLastInRowDesktop && (
                    <ConnectorHorizontal className={`-right-8 lg:-right-16 top-[40%] w-[64px]`} flipped={!isEven} />
                  )}

                  {/* Fade-out connector for desktop item 3 right side */}
                  {actualIndex === 2 && (
                    <ConnectorFadeOut className={`-right-8 lg:-right-16 top-[40%] w-[64px]`} flipped={!isEven} />
                  )}
                  
                  {/* Vertical connector for mobile (ensures mobile is connected across rows) */}
                  <ConnectorVertical className={`top-full left-1/2 -translate-x-1/2 h-[80px]`} flipped={!isEven} />
                </motion.div>
              );
            })}
          </div>

          {/* Row 2 (Items 4, 5) */}
          <div className="flex flex-col lg:flex-row w-full justify-center items-center gap-y-20 gap-x-8 lg:gap-x-16">
            {STEPS.slice(3, 5).map((step, i) => {
              const actualIndex = i + 3;
              const isEven = actualIndex % 2 === 0;
              const isLastInRowDesktop = actualIndex === 4;
              
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + actualIndex * 0.1 }}
                  className={`relative w-full max-w-[320px] h-[380px] rounded-3xl p-8 flex flex-col justify-between border transition-all duration-300 group hover:-translate-y-2 lg:transform ${isEven ? 'lg:-translate-y-6' : 'lg:translate-y-12'}`}
                  style={{
                    background: 'linear-gradient(160deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                    borderColor: 'rgba(255,255,255,0.08)',
                    boxShadow: '0 20px 40px -20px rgba(0,0,0,0.5)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(184,150,90,0.3)';
                    (e.currentTarget as HTMLDivElement).style.background = 'linear-gradient(160deg, rgba(184,150,90,0.06) 0%, rgba(255,255,255,0.01) 100%)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.08)';
                    (e.currentTarget as HTMLDivElement).style.background = 'linear-gradient(160deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)';
                  }}
                >
                  {/* Fade-in connector for desktop item 4 left side */}
                  {actualIndex === 3 && (
                    <ConnectorFadeIn className={`-left-8 lg:-left-16 top-[40%] w-[64px]`} flipped={!isEven} />
                  )}

                  <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: '3.5rem', color: 'rgba(184,150,90,0.9)', lineHeight: 1, textShadow: '0 4px 12px rgba(184,150,90,0.2)' }}>
                    {step.number}
                  </div>

                  <div>
                    <h3 className="mb-4" style={{ fontFamily: "'Plus Jakarta Sans', Inter, sans-serif", fontSize: '1.25rem', fontWeight: 600, color: '#f5f5f4' }}>
                      {step.title}
                    </h3>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: 'rgba(245,245,244,0.5)', lineHeight: 1.6 }}>
                      {step.body}
                    </p>
                  </div>

                  {/* Horizontal connector for desktop */}
                  {!isLastInRowDesktop && (
                    <ConnectorHorizontal className={`-right-8 lg:-right-16 top-[40%] w-[64px]`} flipped={!isEven} />
                  )}
                  
                  {/* Vertical connector for mobile (all items except last) */}
                  {!isLastInRowDesktop && (
                    <ConnectorVertical className={`top-full left-1/2 -translate-x-1/2 h-[80px]`} flipped={!isEven} />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
